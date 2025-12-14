import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
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
  getSuppliers(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(this.withLang(`${this.apiUrl}/suppliers/`)).pipe(
      catchError(() => of(this.getMockSuppliers()))
    );
  }

  getSupplierBySlug(slug: string): Observable<Supplier> {
    return this.http.get<Supplier>(this.withLang(`${this.apiUrl}/suppliers/${slug}/`));
  }

  // Categories (para filtrado adicional)
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.withLang(`${this.apiUrl}/categories/`)).pipe(
      catchError(() => of(this.getMockCategories()))
    );
  }

  getCategoryBySlug(slug: string): Observable<Category> {
    return this.http.get<Category>(this.withLang(`${this.apiUrl}/categories/${slug}/`));
  }

  // Products
  getProducts(supplierSlug?: string): Observable<Product[]> {
    const url = supplierSlug
      ? `${this.apiUrl}/products/?supplier=${supplierSlug}`
      : `${this.apiUrl}/products/`;
    return this.http.get<Product[]>(this.withLang(url));
  }

  getFeaturedProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.withLang(`${this.apiUrl}/products/featured/`)).pipe(
      catchError(() => of([]))
    );
  }

  getProductBySlug(slug: string): Observable<Product> {
    return this.http.get<Product>(this.withLang(`${this.apiUrl}/products/${slug}/`));
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

  // Mock data for development
  private getMockSuppliers(): Supplier[] {
    const lang = this.languageService.getCurrentLanguage();
    const isEn = lang === 'en';
    
    return [
      {
        id: 1,
        name: 'Jarvis',
        slug: 'jarvis',
        description: isEn ? 'Leading supplier of high-precision industrial equipment.' : 'Proveedor líder en equipos industriales de alta precisión.',
        country: isEn ? 'Germany' : 'Alemania',
        icon: 'precision_manufacturing',
        color: '#1565c0',
        products_count: 5
      },
      {
        id: 2,
        name: 'Freund',
        slug: 'freund',
        description: isEn ? 'Specialists in industrial cutlery and cutting tools.' : 'Especialistas en cuchillería industrial y herramientas de corte.',
        country: isEn ? 'Germany' : 'Alemania',
        icon: 'content_cut',
        color: '#d32f2f',
        products_count: 8
      },
      {
        id: 3,
        name: 'Dick',
        slug: 'dick',
        description: isEn ? 'Premium manufacturer of professional knives and tools.' : 'Fabricante premium de cuchillos y herramientas profesionales.',
        country: isEn ? 'Germany' : 'Alemania',
        icon: 'hardware',
        color: '#2e7d32',
        products_count: 12
      },
      {
        id: 4,
        name: 'Proveedor Ejemplo',
        slug: 'proveedor-ejemplo',
        description: isEn ? 'Example supplier description.' : 'Descripción del proveedor ejemplo.',
        country: 'Chile',
        icon: 'business',
        color: '#7b1fa2',
        products_count: 3
      }
    ];
  }

  private getMockCategories(): Category[] {
    const lang = this.languageService.getCurrentLanguage();
    const isEn = lang === 'en';
    
    return [
      {
        id: 1,
        name: isEn ? 'Equipment' : 'Equipos',
        slug: 'equipos',
        category_type: 'equipos',
        description: isEn ? 'High-precision equipment for industry' : 'Equipos de alta precisión para la industria',
        icon: 'precision_manufacturing',
        products_count: 10
      },
      {
        id: 2,
        name: isEn ? 'Supplies' : 'Insumos',
        slug: 'insumos',
        category_type: 'insumos',
        description: isEn ? 'First-quality industrial supplies' : 'Insumos industriales de primera calidad',
        icon: 'inventory_2',
        products_count: 15
      }
    ];
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
