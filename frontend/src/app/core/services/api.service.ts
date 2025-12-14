import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Category, SubCategory, Product, ContactMessage, CompanyInfo } from '../models/catalog.model';
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

  // Categories
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.withLang(`${this.apiUrl}/categories/`)).pipe(
      catchError(() => of(this.getMockCategories()))
    );
  }

  getCategoryBySlug(slug: string): Observable<Category> {
    return this.http.get<Category>(this.withLang(`${this.apiUrl}/categories/${slug}/`));
  }

  getCategoriesByType(type: string): Observable<Category[]> {
    return this.http.get<Category[]>(this.withLang(`${this.apiUrl}/categories/by_type/?type=${type}`));
  }

  // SubCategories
  getSubCategories(categorySlug?: string): Observable<SubCategory[]> {
    const url = categorySlug 
      ? `${this.apiUrl}/subcategories/?category=${categorySlug}`
      : `${this.apiUrl}/subcategories/`;
    return this.http.get<SubCategory[]>(this.withLang(url));
  }

  getSubCategoryBySlug(slug: string): Observable<SubCategory> {
    return this.http.get<SubCategory>(this.withLang(`${this.apiUrl}/subcategories/${slug}/`));
  }

  // Products
  getProducts(subcategorySlug?: string): Observable<Product[]> {
    const url = subcategorySlug
      ? `${this.apiUrl}/products/?subcategory=${subcategorySlug}`
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

  // Mock data for development (bilingüe)
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
        subcategories_count: 2
      },
      {
        id: 2,
        name: isEn ? 'Supplies' : 'Insumos',
        slug: 'insumos',
        category_type: 'insumos',
        description: isEn ? 'First-quality industrial supplies' : 'Insumos industriales de primera calidad',
        icon: 'inventory_2',
        subcategories_count: 3
      },
      {
        id: 3,
        name: isEn ? 'Services' : 'Servicios',
        slug: 'servicios',
        category_type: 'servicios',
        description: isEn ? 'Specialized technical services' : 'Servicios técnicos especializados',
        icon: 'engineering',
        subcategories_count: 0
      },
      {
        id: 4,
        name: isEn ? 'Innovation & Development' : 'Innovación y Desarrollo',
        slug: 'innovacion',
        category_type: 'innovacion',
        description: isEn ? 'Innovative solutions for your industry' : 'Soluciones innovadoras para tu industria',
        icon: 'lightbulb',
        subcategories_count: 0
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
