import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ApiService } from '../../core/services/api.service';
import { Supplier, Product } from '../../core/models/catalog.model';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule],
  template: `
    <!-- Hero -->
    <section class="page-hero">
      <div class="container">
        <span class="hero-label animate-fade-in-up">
          <span class="material-icons-outlined">storefront</span>
          {{ currentSupplier ? currentSupplier.name : ('catalog.ourSuppliers' | translate) }}
        </span>
        <h1 class="animate-fade-in-up delay-1">
          {{ currentSupplier ? currentSupplier.name : ('catalog.catalog' | translate) }}
        </h1>
        <p class="hero-description animate-fade-in-up delay-2">
          {{ currentSupplier?.description || ('catalog.catalogDescription' | translate) }}
        </p>
        @if (currentSupplier?.country) {
          <div class="supplier-origin animate-fade-in-up delay-3">
            <span class="material-icons-outlined">public</span>
            {{ currentSupplier?.country }}
          </div>
        }
      </div>
    </section>

    <!-- Supplier Filter -->
    <section class="filter-section">
      <div class="container">
        <div class="filter-tabs">
          <a 
            routerLink="/catalogo" 
            class="filter-tab"
            [class.active]="!currentSupplier">
            <span class="material-icons-outlined">grid_view</span>
            {{ 'catalog.allSuppliers' | translate }}
          </a>
          @for (supplier of suppliers; track supplier.id) {
            <a 
              [routerLink]="['/catalogo', supplier.slug]" 
              class="filter-tab"
              [class.active]="currentSupplier?.slug === supplier.slug"
              [style.--supplier-color]="supplier.color">
              <span class="material-icons-outlined">{{ supplier.icon || 'business' }}</span>
              {{ supplier.name }}
            </a>
          }
        </div>
      </div>
    </section>

    <!-- Catalog Grid -->
    <section class="section">
      <div class="container">
        @if (currentSupplier) {
          <!-- Single Supplier View with Products -->
          <div class="supplier-detail">
            <div class="supplier-header" [style.--supplier-color]="currentSupplier.color">
              <div class="supplier-logo">
                @if (currentSupplier.logo) {
                  <img [src]="currentSupplier.logo" [alt]="currentSupplier.name">
                } @else {
                  <span class="material-icons-outlined">{{ currentSupplier.icon || 'business' }}</span>
                }
              </div>
              <div class="supplier-info">
                <h2>{{ currentSupplier.name }}</h2>
                <p>{{ currentSupplier.description }}</p>
                @if (currentSupplier.website) {
                  <a [href]="currentSupplier.website" target="_blank" class="supplier-website">
                    <span class="material-icons-outlined">language</span>
                    {{ 'catalog.visitWebsite' | translate }}
                  </a>
                }
              </div>
            </div>

            @if (currentSupplier.products && currentSupplier.products.length > 0) {
              <div class="products-grid">
                @for (product of currentSupplier.products; track product.id; let i = $index) {
                  <div class="product-card" [style.animation-delay]="i * 80 + 'ms'" [style.--supplier-color]="currentSupplier.color">
                    <div class="product-image">
                      @if (product.image) {
                        <img [src]="product.image" [alt]="product.name">
                      } @else {
                        <span class="material-icons-outlined">{{ currentSupplier.icon || 'inventory_2' }}</span>
                      }
                      @if (product.is_featured) {
                        <span class="featured-badge">
                          <span class="material-icons-outlined">star</span>
                          {{ 'catalog.featured' | translate }}
                        </span>
                      }
                    </div>
                    <div class="product-content">
                      <h3>{{ product.name }}</h3>
                      <p>{{ product.short_description || product.description }}</p>
                      @if (product.sku) {
                        <span class="product-sku">SKU: {{ product.sku }}</span>
                      }
                      <button class="btn btn-outline btn-sm product-btn">
                        <span class="material-icons-outlined">info</span>
                        {{ 'catalog.moreInfo' | translate }}
                      </button>
                    </div>
                  </div>
                }
              </div>
            } @else {
              <div class="empty-state">
                <span class="material-icons-outlined">inventory_2</span>
                <h3>{{ 'catalog.comingSoon' | translate }}</h3>
                <p>{{ 'catalog.comingSoonDesc' | translate }}</p>
                <a routerLink="/contacto" class="btn btn-primary">
                  <span class="material-icons-outlined">mail</span>
                  {{ 'catalog.contact' | translate }}
                </a>
              </div>
            }
          </div>
        } @else {
          <!-- All Suppliers Grid -->
          <div class="suppliers-overview">
            @for (supplier of suppliers; track supplier.id; let i = $index) {
              <a [routerLink]="['/catalogo', supplier.slug]" class="supplier-card" [style.animation-delay]="i * 100 + 'ms'" [style.--supplier-color]="supplier.color">
                <div class="card-header">
                  <div class="card-logo">
                    @if (supplier.logo) {
                      <img [src]="supplier.logo" [alt]="supplier.name">
                    } @else {
                      <span class="material-icons-outlined">{{ supplier.icon || 'business' }}</span>
                    }
                  </div>
                  <span class="card-badge">
                    {{ supplier.products_count || 0 }} {{ 'catalog.products' | translate }}
                  </span>
                </div>
                <h3>{{ supplier.name }}</h3>
                <p>{{ supplier.description }}</p>
                @if (supplier.country) {
                  <div class="supplier-country">
                    <span class="material-icons-outlined">public</span>
                    {{ supplier.country }}
                  </div>
                }
                <span class="card-link">
                  {{ 'catalog.viewProducts' | translate }}
                  <span class="material-icons-outlined">arrow_forward</span>
                </span>
              </a>
            }
          </div>
        }
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section cta-section">
      <div class="container">
        <div class="cta-card">
          <div class="cta-icon">
            <span class="material-icons-outlined">support_agent</span>
          </div>
          <h2>{{ 'catalog.cantFind' | translate }}</h2>
          <p>{{ 'catalog.cantFindDesc' | translate }}</p>
          <div class="cta-actions">
            <a routerLink="/contacto" class="btn btn-primary btn-lg">
              <span class="material-icons-outlined">chat</span>
              {{ 'catalog.requestConsultation' | translate }}
            </a>
            <a href="https://wa.me/56996154315" target="_blank" class="btn btn-secondary btn-lg">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .page-hero {
      padding: calc(80px + var(--space-4xl)) 0 var(--space-2xl);
      text-align: center;
      background: 
        radial-gradient(ellipse 80% 50% at 50% 0%, var(--color-accent-light) 0%, transparent 60%);
    }
    
    .hero-label {
      display: inline-flex;
      align-items: center;
      gap: var(--space-sm);
      padding: var(--space-sm) var(--space-md);
      background: var(--color-accent-light);
      border: 1px solid var(--color-border-strong);
      border-radius: var(--radius-full);
      font-size: 0.875rem;
      color: var(--color-accent);
      margin-bottom: var(--space-lg);
      
      .material-icons-outlined {
        font-size: 16px;
      }
    }
    
    h1 {
      margin-bottom: var(--space-md);
    }
    
    .hero-description {
      font-size: 1.125rem;
      color: var(--color-text-secondary);
      max-width: 600px;
      margin: 0 auto;
    }
    
    .supplier-origin {
      display: inline-flex;
      align-items: center;
      gap: var(--space-sm);
      margin-top: var(--space-lg);
      padding: var(--space-sm) var(--space-md);
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-full);
      font-size: 0.9rem;
      color: var(--color-text-secondary);
      
      .material-icons-outlined {
        font-size: 18px;
        color: var(--color-accent);
      }
    }
    
    .filter-section {
      padding: var(--space-lg) 0;
      border-bottom: 1px solid var(--color-border);
      position: sticky;
      top: 70px;
      background: rgba(10, 22, 40, 0.95);
      backdrop-filter: blur(20px);
      z-index: 100;
    }
    
    .filter-tabs {
      display: flex;
      gap: var(--space-sm);
      overflow-x: auto;
      padding-bottom: var(--space-sm);
      
      &::-webkit-scrollbar {
        height: 4px;
      }
    }
    
    .filter-tab {
      display: flex;
      align-items: center;
      gap: var(--space-sm);
      padding: var(--space-sm) var(--space-lg);
      font-size: 0.95rem;
      font-weight: 500;
      color: var(--color-text-secondary);
      text-decoration: none;
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-full);
      white-space: nowrap;
      transition: all var(--transition-fast);
      
      .material-icons-outlined {
        font-size: 18px;
      }
      
      &:hover {
        border-color: var(--supplier-color, var(--color-accent));
        color: var(--supplier-color, var(--color-accent));
      }
      
      &.active {
        background: var(--supplier-color, var(--color-accent));
        border-color: var(--supplier-color, var(--color-accent));
        color: white;
      }
    }
    
    .supplier-detail {
      .supplier-header {
        display: flex;
        align-items: center;
        gap: var(--space-xl);
        margin-bottom: var(--space-3xl);
        padding: var(--space-2xl);
        background: linear-gradient(135deg, var(--color-surface) 0%, var(--color-surface-elevated) 100%);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-xl);
        border-left: 4px solid var(--supplier-color, var(--color-accent));
        
        .supplier-logo {
          width: 100px;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          border-radius: var(--radius-lg);
          overflow: hidden;
          flex-shrink: 0;
          
          img {
            width: 80%;
            height: 80%;
            object-fit: contain;
          }
          
          .material-icons-outlined {
            font-size: 48px;
            color: var(--supplier-color, var(--color-accent));
          }
        }
        
        .supplier-info {
          flex: 1;
          
          h2 {
            margin-bottom: var(--space-sm);
            color: var(--supplier-color, var(--color-accent));
          }
          
          p {
            font-size: 1.1rem;
            margin-bottom: var(--space-md);
          }
        }
        
        .supplier-website {
          display: inline-flex;
          align-items: center;
          gap: var(--space-sm);
          font-size: 0.9rem;
          color: var(--color-accent);
          text-decoration: none;
          
          &:hover {
            text-decoration: underline;
          }
          
          .material-icons-outlined {
            font-size: 18px;
          }
        }
        
        @media (max-width: 640px) {
          flex-direction: column;
          text-align: center;
        }
      }
    }
    
    .products-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: var(--space-xl);
      
      @media (max-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
      }
      
      @media (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
      }
      
      @media (max-width: 640px) {
        grid-template-columns: 1fr;
      }
    }
    
    .product-card {
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-lg);
      overflow: hidden;
      transition: all var(--transition-base);
      animation: fadeInUp 0.6s ease forwards;
      opacity: 0;
      
      &:hover {
        border-color: var(--supplier-color, var(--color-accent));
        transform: translateY(-4px);
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
        
        .product-image img {
          transform: scale(1.05);
        }
      }
      
      .product-image {
        position: relative;
        height: 180px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, #1a2744 0%, #0d1829 100%);
        overflow: hidden;
        
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-base);
        }
        
        .material-icons-outlined {
          font-size: 64px;
          color: var(--supplier-color, var(--color-accent));
          opacity: 0.4;
        }
        
        .featured-badge {
          position: absolute;
          top: var(--space-sm);
          right: var(--space-sm);
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 4px 10px;
          background: linear-gradient(135deg, #f59e0b, #d97706);
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 600;
          color: white;
          
          .material-icons-outlined {
            font-size: 14px;
            color: white;
            opacity: 1;
          }
        }
      }
      
      .product-content {
        padding: var(--space-lg);
        
        h3 {
          font-size: 1.1rem;
          margin-bottom: var(--space-sm);
          color: var(--color-text-primary);
        }
        
        p {
          font-size: 0.9rem;
          color: var(--color-text-muted);
          margin-bottom: var(--space-md);
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .product-sku {
          display: block;
          font-size: 0.8rem;
          color: var(--color-text-muted);
          margin-bottom: var(--space-md);
          font-family: monospace;
        }
        
        .product-btn {
          width: 100%;
          border-color: var(--supplier-color, var(--color-accent));
          color: var(--supplier-color, var(--color-accent));
          
          &:hover {
            background: var(--supplier-color, var(--color-accent));
            color: white;
          }
        }
      }
    }
    
    .empty-state {
      text-align: center;
      padding: var(--space-4xl) var(--space-xl);
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-xl);
      
      .material-icons-outlined {
        font-size: 80px;
        color: var(--color-accent);
        opacity: 0.5;
        margin-bottom: var(--space-lg);
      }
      
      h3 {
        margin-bottom: var(--space-md);
      }
      
      p {
        max-width: 400px;
        margin: 0 auto var(--space-xl);
      }
    }
    
    .suppliers-overview {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: var(--space-xl);
      
      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }
    }
    
    .supplier-card {
      display: flex;
      flex-direction: column;
      padding: var(--space-2xl);
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-xl);
      text-decoration: none;
      transition: all var(--transition-base);
      animation: fadeInUp 0.6s ease forwards;
      opacity: 0;
      border-top: 4px solid var(--supplier-color, var(--color-accent));
      
      &:hover {
        border-color: var(--supplier-color, var(--color-accent));
        transform: translateY(-8px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        
        .card-logo {
          transform: scale(1.1);
        }
        
        .card-link {
          color: var(--supplier-color, var(--color-accent));
          gap: var(--space-md);
        }
      }
      
      .card-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: var(--space-lg);
      }
      
      .card-logo {
        width: 72px;
        height: 72px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: white;
        border-radius: var(--radius-lg);
        transition: transform var(--transition-base);
        overflow: hidden;
        
        img {
          width: 80%;
          height: 80%;
          object-fit: contain;
        }
        
        .material-icons-outlined {
          font-size: 36px;
          color: var(--supplier-color, var(--color-accent));
        }
      }
      
      .card-badge {
        font-size: 0.8rem;
        padding: var(--space-xs) var(--space-sm);
        background: var(--color-surface-elevated);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-full);
        color: var(--color-text-muted);
      }
      
      h3 {
        font-size: 1.5rem;
        color: var(--supplier-color, var(--color-text-primary));
        margin-bottom: var(--space-sm);
      }
      
      > p {
        color: var(--color-text-muted);
        margin-bottom: var(--space-lg);
        flex: 1;
      }
      
      .supplier-country {
        display: flex;
        align-items: center;
        gap: var(--space-sm);
        font-size: 0.9rem;
        color: var(--color-text-secondary);
        margin-bottom: var(--space-lg);
        
        .material-icons-outlined {
          font-size: 18px;
          color: var(--supplier-color, var(--color-accent));
        }
      }
      
      .card-link {
        display: flex;
        align-items: center;
        gap: var(--space-sm);
        font-size: 0.95rem;
        font-weight: 500;
        color: var(--color-text-secondary);
        transition: all var(--transition-fast);
        
        .material-icons-outlined {
          font-size: 18px;
        }
      }
    }
    
    .cta-section {
      padding-bottom: 0;
    }
    
    .cta-card {
      text-align: center;
      padding: var(--space-4xl);
      background: linear-gradient(135deg, var(--color-surface) 0%, var(--color-surface-elevated) 100%);
      border: 1px solid var(--color-border-strong);
      border-radius: var(--radius-xl);
      
      .cta-icon {
        width: 80px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--gradient-accent-full);
        border-radius: var(--radius-xl);
        margin: 0 auto var(--space-xl);
        
        .material-icons-outlined {
          font-size: 40px;
          color: var(--color-primary);
        }
      }
      
      h2 {
        margin-bottom: var(--space-md);
      }
      
      p {
        font-size: 1.125rem;
        max-width: 500px;
        margin: 0 auto var(--space-2xl);
      }
      
      @media (max-width: 768px) {
        padding: var(--space-2xl);
      }
    }
    
    .cta-actions {
      display: flex;
      justify-content: center;
      gap: var(--space-md);
      flex-wrap: wrap;
      
      .btn svg {
        margin-right: var(--space-sm);
      }
    }
    
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `]
})
export class CatalogComponent implements OnInit {
  private api = inject(ApiService);
  private route = inject(ActivatedRoute);
  
  suppliers: Supplier[] = [];
  currentSupplier: Supplier | null = null;

  ngOnInit() {
    this.api.getSuppliers().subscribe(suppliers => {
      this.suppliers = suppliers;
    });

    this.route.params.subscribe(params => {
      const supplierSlug = params['category']; // Reutilizamos el parámetro existente
      if (supplierSlug) {
        this.api.getSupplierBySlug(supplierSlug).subscribe({
          next: supplier => this.currentSupplier = supplier,
          error: () => this.currentSupplier = null
        });
      } else {
        this.currentSupplier = null;
      }
    });
  }
}
