import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ApiService } from '../../../core/services/api.service';
import { Product } from '../../../core/models/catalog.model';

@Component({
  selector: 'app-category-products',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule],
  template: `
    <!-- Breadcrumb -->
    <nav class="breadcrumb">
      <div class="container">
        <a routerLink="/catalogo">{{ 'catalog.catalog' | translate }}</a>
        <span class="separator">/</span>
        <a [routerLink]="['/catalogo', supplierSlug]">{{ supplier?.name }}</a>
        <span class="separator">/</span>
        <span class="current">{{ categoryName }}</span>
      </div>
    </nav>

    <!-- Hero -->
    <section class="category-hero" [style.--supplier-color]="supplier?.color">
      <div class="container">
        <a [routerLink]="['/catalogo', supplierSlug]" class="back-link">
          <span class="material-icons-outlined">arrow_back</span>
          {{ 'catalog.backToCategories' | translate }}
        </a>
        <h1>{{ categoryName }}</h1>
        <p class="product-count">{{ products.length }} {{ 'catalog.productsAvailable' | translate }}</p>
      </div>
    </section>

    <!-- Products Grid -->
    <section class="section products-section">
      <div class="container">
        @if (products.length > 0) {
          <div class="products-grid">
            @for (product of products; track product.id; let i = $index) {
              <a [routerLink]="['/producto', supplierSlug, product.slug]" 
                 class="product-card" 
                 [style.animation-delay]="i * 60 + 'ms'"
                 [style.--supplier-color]="supplier?.color">
                <div class="product-image">
                  @if (product.image) {
                    <img [src]="product.image" [alt]="product.name" loading="lazy">
                  } @else {
                    <div class="placeholder">
                      <span class="material-icons-outlined">{{ supplier?.icon || 'inventory_2' }}</span>
                    </div>
                  }
                  <div class="overlay">
                    <span class="view-btn">
                      <span class="material-icons-outlined">visibility</span>
                      {{ 'catalog.viewProduct' | translate }}
                    </span>
                  </div>
                </div>
                <div class="product-info">
                  <h3>{{ product.name }}</h3>
                  @if (product.short_description) {
                    <p class="description">{{ product.short_description }}</p>
                  }
                </div>
              </a>
            }
          </div>
        } @else {
          <div class="empty-state">
            <span class="material-icons-outlined">inventory_2</span>
            <h3>{{ 'catalog.noProducts' | translate }}</h3>
            <p>{{ 'catalog.noProductsDesc' | translate }}</p>
            <a [routerLink]="['/catalogo', supplierSlug]" class="btn btn-primary">
              <span class="material-icons-outlined">arrow_back</span>
              {{ 'catalog.backToCategories' | translate }}
            </a>
          </div>
        }
      </div>
    </section>
  `,
  styles: [`
    .breadcrumb {
      padding: calc(80px + var(--space-lg)) 0 var(--space-lg);
      background: var(--color-surface);
      border-bottom: 1px solid var(--color-border);
      
      .container {
        display: flex;
        align-items: center;
        gap: var(--space-sm);
        font-size: 0.9rem;
        flex-wrap: wrap;
      }
      
      a {
        color: var(--color-text-muted);
        text-decoration: none;
        transition: color var(--transition-fast);
        
        &:hover {
          color: var(--color-accent);
        }
      }
      
      .separator {
        color: var(--color-text-muted);
      }
      
      .current {
        color: var(--color-text-primary);
        font-weight: 500;
      }
    }
    
    .category-hero {
      padding: var(--space-2xl) 0;
      background: linear-gradient(135deg, 
        color-mix(in srgb, var(--supplier-color, var(--color-accent)) 10%, transparent) 0%,
        transparent 50%);
      
      .back-link {
        display: inline-flex;
        align-items: center;
        gap: var(--space-sm);
        color: var(--color-text-muted);
        text-decoration: none;
        font-size: 0.9rem;
        margin-bottom: var(--space-lg);
        transition: color var(--transition-fast);
        
        .material-icons-outlined {
          font-size: 18px;
        }
        
        &:hover {
          color: var(--supplier-color, var(--color-accent));
        }
      }
      
      h1 {
        font-size: 2.25rem;
        margin-bottom: var(--space-sm);
        color: var(--color-text-primary);
      }
      
      .product-count {
        color: var(--color-text-muted);
        font-size: 1rem;
      }
    }
    
    .products-section {
      padding-top: var(--space-2xl);
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
      
      @media (max-width: 540px) {
        grid-template-columns: 1fr;
      }
    }
    
    .product-card {
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-xl);
      overflow: hidden;
      text-decoration: none;
      transition: all var(--transition-base);
      animation: fadeInUp 0.5s ease forwards;
      opacity: 0;
      
      &:hover {
        border-color: var(--supplier-color, var(--color-accent));
        transform: translateY(-8px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        
        .product-image {
          img {
            transform: scale(1.08);
          }
          
          .overlay {
            opacity: 1;
          }
        }
      }
      
      .product-image {
        position: relative;
        aspect-ratio: 1;
        overflow: hidden;
        background: linear-gradient(145deg, #1a2744 0%, #0d1829 100%);
        
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-base);
        }
        
        .placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          
          .material-icons-outlined {
            font-size: 64px;
            color: var(--supplier-color, var(--color-accent));
            opacity: 0.3;
          }
        }
        
        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, 
            rgba(0, 0, 0, 0.8) 0%,
            rgba(0, 0, 0, 0.4) 50%,
            transparent 100%);
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding-bottom: var(--space-lg);
          opacity: 0;
          transition: opacity var(--transition-base);
          
          .view-btn {
            display: flex;
            align-items: center;
            gap: var(--space-sm);
            padding: var(--space-sm) var(--space-lg);
            background: var(--supplier-color, var(--color-accent));
            color: white;
            border-radius: var(--radius-full);
            font-size: 0.875rem;
            font-weight: 500;
            
            .material-icons-outlined {
              font-size: 18px;
            }
          }
        }
      }
      
      .product-info {
        padding: var(--space-lg);
        
        h3 {
          font-size: 1rem;
          font-weight: 600;
          color: var(--color-text-primary);
          margin-bottom: var(--space-xs);
          line-height: 1.4;
        }
        
        .description {
          font-size: 0.85rem;
          color: var(--color-text-muted);
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      }
    }
    
    .empty-state {
      text-align: center;
      padding: var(--space-4xl);
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-xl);
      
      .material-icons-outlined {
        font-size: 80px;
        color: var(--color-accent);
        opacity: 0.4;
        margin-bottom: var(--space-lg);
      }
      
      h3 {
        margin-bottom: var(--space-sm);
      }
      
      p {
        color: var(--color-text-muted);
        margin-bottom: var(--space-xl);
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
export class CategoryProductsComponent implements OnInit {
  private api = inject(ApiService);
  private route = inject(ActivatedRoute);
  
  supplier: any = null;
  products: Product[] = [];
  supplierSlug = '';
  categorySlug = '';
  categoryName = '';

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.supplierSlug = params['supplier'];
      this.categorySlug = params['category'];
      this.loadData();
    });
  }

  loadData() {
    // Cargar proveedor
    this.api.getSupplierBySlug(this.supplierSlug).subscribe(supplier => {
      this.supplier = supplier;
    });

    // Cargar productos de la categoría
    this.api.getProductsByCategory(this.supplierSlug, this.categorySlug).subscribe(result => {
      this.products = result.products;
      this.categoryName = result.categoryName;
    });
  }
}



