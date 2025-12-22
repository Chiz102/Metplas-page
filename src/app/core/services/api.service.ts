import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, forkJoin } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Supplier, Category, Product, ContactMessage, CompanyInfo } from '../models/catalog.model';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly apiUrl = 'http://localhost:8000/api';
  private languageService = inject(LanguageService);

  constructor(private http: HttpClient) {}

  /**
   * Agrega el parámetro de idioma a la URL
   */
  private withLang(url: string): string {
    const lang = this.languageService.getCurrentLanguage();
    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}lang=${lang}`;
  }

  // Suppliers (Proveedores)

  getSuppliers(): Observable<any[]> {
    // Fetches supplier metadata from assets and returns as array
    return this.http.get<any>(`assets/catalog/__metadata__.json`).pipe(
      catchError(() => of({ suppliers: {} })),
      // Map the suppliers object to an array of suppliers with slug
      // (slug is the key in the suppliers object)
      // Example: { suppliers: { zeigler: { ... } } } => [ { slug: 'zeigler', ... } ]
      // Use RxJS map operator
      map((data: any) => {
        if (!data || !data.suppliers) return [];
        return Object.entries(data.suppliers).map(([slug, supplier]: [string, any]) => ({ slug, ...supplier }));
      })
    );
  }

  getSupplierBySlug(slug: string): Observable<any> {
    // Fetches a single supplier by slug from the metadata and loads its products
    return this.http.get<any>(`assets/catalog/__metadata__.json`).pipe(
      catchError(() => of({ suppliers: {} })),
      switchMap((data: any) => {
        if (!data || !data.suppliers) return of(null);
        const supplier = data.suppliers[slug];
        if (!supplier) return of(null);
        
        // Cargar los productos del proveedor
        return this.getProductsBySupplier(slug).pipe(
          map(products => ({
            slug,
            ...supplier,
            products,
            products_count: products.length
          }))
        );
      })
    );
  }

  // Categories (para filtrado adicional)
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.withLang(`${this.apiUrl}/categories/`)).pipe(
      catchError(() => of([]))
    );
  }

  getCategoryBySlug(slug: string): Observable<Category> {
    return this.http.get<Category>(this.withLang(`${this.apiUrl}/categories/${slug}/`));
  }

  // Products - Carga desde archivos JSON locales
  getProducts(supplierSlug?: string): Observable<Product[]> {
    if (!supplierSlug) {
      // Cargar todos los productos de todos los proveedores
      return this.getSuppliers().pipe(
        switchMap(suppliers => {
          if (suppliers.length === 0) return of([]);
          const requests = suppliers.map(s => this.getProductsBySupplier(s.slug));
          return forkJoin(requests).pipe(
            map(results => results.flat())
          );
        })
      );
    }
    return this.getProductsBySupplier(supplierSlug);
  }

  /**
   * Carga productos de un proveedor específico desde sus archivos JSON
   */
  getProductsBySupplier(supplierSlug: string): Observable<Product[]> {
    const lang = this.languageService.getCurrentLanguage();
    const isEn = lang === 'en';
    
    return this.http.get<any>(`assets/catalog/__metadata__.json`).pipe(
      catchError(() => of({ suppliers: {} })),
      switchMap((metadata: any) => {
        const supplier = metadata.suppliers?.[supplierSlug];
        if (!supplier || !supplier.files) return of([]);
        
        // Cargar cada archivo de productos del proveedor
        const productRequests: Observable<any[]>[] = supplier.files.map((file: string) =>
          this.http.get<any[]>(`assets/catalog/${supplierSlug}/${file}`).pipe(
            catchError(() => of([] as any[]))
          )
        );
        
        if (productRequests.length === 0) return of([]);
        
        return forkJoin(productRequests).pipe(
          map((results) => {
            const allProducts: Product[] = [];
            let id = 1;
            
            results.forEach(products => {
              products.forEach((p: any) => {
                allProducts.push({
                  id: id++,
                  name: isEn ? (p.item_name || p.item_name_es) : (p.item_name_es || p.item_name),
                  slug: this.slugify(p.item_name || p.item_name_es),
                  short_description: isEn ? (p.description || p.category || '') : (p.description_es || p.category_es || p.category || ''),
                  description: isEn ? (p.description || '') : (p.description_es || ''),
                  specifications: {},
                  image: this.transformImagePath(p.image_path),
                  gallery: (p.gallery || []).map((img: string) => this.transformImagePath(img)),
                  is_featured: false,
                  order: id,
                  supplier_name: supplierSlug,
                  category_name: isEn ? p.category : (p.category_es || p.category)
                });
              });
            });
            
            return allProducts;
          })
        );
      })
    );
  }

  /**
   * Transforma la ruta de imagen del JSON a la ruta correcta en assets
   */
  private transformImagePath(imagePath: string | undefined): string {
    if (!imagePath) return '';
    // Transforma "images/Resicut Basic.jpg" a "assets/images/products/Resicut Basic.jpg"
    if (imagePath.startsWith('images/')) {
      return `assets/images/products/${imagePath.substring(7)}`;
    }
    return imagePath;
  }

  /**
   * Genera un slug a partir de un nombre
   */
  private slugify(text: string): string {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .trim();
  }

  getFeaturedProducts(): Observable<Product[]> {
    return this.getProducts().pipe(
      map(products => products.slice(0, 6)),
      catchError(() => of([]))
    );
  }

  getProductBySlug(slug: string): Observable<Product> {
    return this.getProducts().pipe(
      map(products => products.find(p => p.slug === slug) || products[0])
    );
  }

  /**
   * Obtiene las categorías de un proveedor desde su metadata específico
   */
  getSupplierCategories(supplierSlug: string): Observable<any[]> {
    return this.http.get<any>(`assets/catalog/${supplierSlug}/__metadata__.json`).pipe(
      catchError(() => of({ categories: [] })),
      map((data: any) => {
        if (!data || !data.categories) return [];
        return data.categories;
      })
    );
  }

  /**
   * Obtiene productos de una categoría específica de un proveedor
   */
  getProductsByCategory(supplierSlug: string, categorySlug: string): Observable<{ products: Product[], categoryName: string }> {
    const lang = this.languageService.getCurrentLanguage();
    const isEn = lang === 'en';
    
    return this.http.get<any>(`assets/catalog/${supplierSlug}/__metadata__.json`).pipe(
      catchError(() => of({ categories: [] })),
      switchMap((metadata: any) => {
        if (!metadata || !metadata.categories) {
          return of({ products: [], categoryName: categorySlug });
        }
        
        // Encontrar la categoría por slug (el nombre del archivo sin .json, con espacios como guiones)
        const category = metadata.categories.find((c: any) => {
          const catSlug = c.file.replace('.json', '').toLowerCase().replace(/\s+/g, '-');
          return catSlug === categorySlug;
        });
        
        if (!category) {
          return of({ products: [], categoryName: categorySlug });
        }
        
        const categoryName = isEn ? category.name_en : category.name_es;
        
        // Cargar productos del archivo de la categoría
        return this.http.get<any[]>(`assets/catalog/${supplierSlug}/${category.file}`).pipe(
          catchError(() => of([])),
          map((products: any[]) => {
            let id = 1;
            const mappedProducts: Product[] = products.map((p: any) => ({
              id: id++,
              name: isEn ? (p.item_name || p.item_name_es) : (p.item_name_es || p.item_name),
              slug: this.slugify(p.item_name || p.item_name_es),
              short_description: isEn ? (p.description || p.category || '') : (p.description_es || p.category_es || p.category || ''),
              description: isEn ? (p.description || '') : (p.description_es || ''),
              specifications: {},
              image: this.transformImagePath(p.image_path),
              gallery: (p.gallery || []).map((img: string) => this.transformImagePath(img)),
              is_featured: false,
              order: id,
              supplier_name: supplierSlug,
              category_name: categoryName
            }));
            
            return { products: mappedProducts, categoryName };
          })
        );
      })
    );
  }

  // Contact
  sendContactMessage(message: ContactMessage): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.apiUrl}/contact/`, message);
  }

  // Company Info
  getCompanyInfo(): Observable<CompanyInfo> {
    return this.http.get<CompanyInfo>(this.withLang(`${this.apiUrl}/company/`)).pipe(
      catchError(() => of(this.getDefaultCompanyInfo()))
    );
  }

  // Categories by Supplier Slug
  getCategoriesBySupplierSlug(supplierSlug: string, lang: 'eng' | 'esp' = 'esp'): string[] {
    // Loads categories from the supplier in __metadata__.json
    // Returns an array of category names in the requested language
    const req = new XMLHttpRequest();
    req.open('GET', 'assets/catalog/__metadata__.json', false); // synchronous
    req.send(null);
    if (req.status === 200) {
      try {
        const data = JSON.parse(req.responseText);
        const supplier = data.suppliers?.[supplierSlug];
        if (supplier && supplier.available_categories && supplier.available_categories[lang]) {
          return supplier.available_categories[lang];
        }
      } catch (e) {
        return [];
      }
    }
    return [];
  }

  private getDefaultCompanyInfo(): CompanyInfo {
    const lang = this.languageService.getCurrentLanguage();
    const isEn = lang === 'en';
    
    return {
      name: 'Metplastech Technologies SPA',
      slogan: isEn ? 'Innovation and technology for industry' : 'Innovación y tecnología para la industria',
      phone: '+569 9615 4315',
      whatsapp: '+56996154315',
      email: 'contacto@metplastech.cl',
      address: isEn ? 'Curicó – Maule Region – Chile' : 'Curicó – Región del Maule – Chile'
    };
  }
}
