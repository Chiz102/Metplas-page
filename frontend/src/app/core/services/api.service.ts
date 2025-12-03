import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Category, SubCategory, Product, ContactMessage, CompanyInfo } from '../models/catalog.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  // Categories
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/categories/`).pipe(
      catchError(() => of(this.getMockCategories()))
    );
  }

  getCategoryBySlug(slug: string): Observable<Category> {
    return this.http.get<Category>(`${this.apiUrl}/categories/${slug}/`);
  }

  getCategoriesByType(type: string): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/categories/by_type/?type=${type}`);
  }

  // SubCategories
  getSubCategories(categorySlug?: string): Observable<SubCategory[]> {
    const url = categorySlug 
      ? `${this.apiUrl}/subcategories/?category=${categorySlug}`
      : `${this.apiUrl}/subcategories/`;
    return this.http.get<SubCategory[]>(url);
  }

  getSubCategoryBySlug(slug: string): Observable<SubCategory> {
    return this.http.get<SubCategory>(`${this.apiUrl}/subcategories/${slug}/`);
  }

  // Products
  getProducts(subcategorySlug?: string): Observable<Product[]> {
    const url = subcategorySlug
      ? `${this.apiUrl}/products/?subcategory=${subcategorySlug}`
      : `${this.apiUrl}/products/`;
    return this.http.get<Product[]>(url);
  }

  getFeaturedProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products/featured/`).pipe(
      catchError(() => of([]))
    );
  }

  getProductBySlug(slug: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/products/${slug}/`);
  }

  // Contact
  sendContactMessage(message: ContactMessage): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.apiUrl}/contact/`, message);
  }

  // Company Info
  getCompanyInfo(): Observable<CompanyInfo> {
    return this.http.get<CompanyInfo>(`${this.apiUrl}/company/`).pipe(
      catchError(() => of(this.getDefaultCompanyInfo()))
    );
  }

  // Mock data for development
  private getMockCategories(): Category[] {
    return [
      {
        id: 1,
        name: 'Equipos',
        slug: 'equipos',
        category_type: 'equipos',
        description: 'Equipos de alta precisión para la industria',
        icon: 'precision_manufacturing',
        subcategories_count: 2
      },
      {
        id: 2,
        name: 'Insumos',
        slug: 'insumos',
        category_type: 'insumos',
        description: 'Insumos industriales de primera calidad',
        icon: 'inventory_2',
        subcategories_count: 3
      },
      {
        id: 3,
        name: 'Servicios',
        slug: 'servicios',
        category_type: 'servicios',
        description: 'Servicios técnicos especializados',
        icon: 'engineering',
        subcategories_count: 0
      },
      {
        id: 4,
        name: 'Innovación y Desarrollo',
        slug: 'innovacion',
        category_type: 'innovacion',
        description: 'Soluciones innovadoras para tu industria',
        icon: 'lightbulb',
        subcategories_count: 0
      }
    ];
  }

  private getDefaultCompanyInfo(): CompanyInfo {
    return {
      name: 'Metplastech Technologies SPA',
      slogan: 'Innovación y tecnología para la industria',
      phone: '+569 9615 4315',
      whatsapp: '+56996154315',
      email: 'contacto@metplastech.cl',
      address: 'Curicó – Región del Maule – Chile'
    };
  }
}

