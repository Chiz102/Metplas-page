import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ApiService } from '../../../core/services/api.service';
import { Product } from '../../../core/models/catalog.model';

@Component({
  selector: 'app-product-detail',
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
        <a [routerLink]="['/catalogo', supplierSlug, product?.category_name?.toLowerCase()?.replace(' ', '-')]">
          {{ product?.category_name }}
        </a>
        <span class="separator">/</span>
        <span class="current">{{ product?.name }}</span>
      </div>
    </nav>

    <!-- Product Detail -->
    <section class="product-detail" [style.--supplier-color]="supplier?.color">
      <div class="container">
        @if (product) {
          <div class="product-layout">
            <!-- Image Section -->
            <div class="product-gallery">
              <div class="main-image">
                @if (product.image) {
                  <img [src]="product.image" [alt]="product.name">
                } @else {
                  <div class="placeholder">
                    <span class="material-icons-outlined">{{ supplier?.icon || 'inventory_2' }}</span>
                  </div>
                }
              </div>
              @if (product.gallery && product.gallery.length > 0) {
                <div class="thumbnail-strip">
                  @for (img of product.gallery; track img) {
                    <button class="thumbnail" (click)="selectImage(img)" [class.active]="currentImage === img">
                      <img [src]="img" [alt]="product.name">
                    </button>
                  }
                </div>
              }
            </div>

            <!-- Info Section -->
            <div class="product-info">
              <div class="supplier-badge">
                <span class="material-icons-outlined">{{ supplier?.icon || 'business' }}</span>
                {{ supplier?.name }}
              </div>
              
              <h1>{{ product.name }}</h1>
              
              @if (product.category_name) {
                <span class="category-tag">{{ product.category_name }}</span>
              }
              
              @if (product.short_description) {
                <p class="short-description">{{ product.short_description }}</p>
              }
              
              @if (product.description) {
                <div class="description">
                  <h3>{{ 'product.description' | translate }}</h3>
                  <p>{{ product.description }}</p>
                </div>
              }
              
              @if (product.specifications && hasSpecifications()) {
                <div class="specifications">
                  <h3>{{ 'product.specifications' | translate }}</h3>
                  <dl class="spec-list">
                    @for (spec of getSpecifications(); track spec.key) {
                      <div class="spec-item">
                        <dt>{{ spec.key }}</dt>
                        <dd>{{ spec.value }}</dd>
                      </div>
                    }
                  </dl>
                </div>
              }
              
              <!-- Actions -->
              <div class="product-actions">
                <a href="https://wa.me/56996154315?text={{ getWhatsAppMessage() }}" 
                   target="_blank" 
                   class="btn btn-primary btn-lg">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  {{ 'product.requestQuote' | translate }}
                </a>
                <a routerLink="/contacto" class="btn btn-outline btn-lg">
                  <span class="material-icons-outlined">mail</span>
                  {{ 'product.contactUs' | translate }}
                </a>
              </div>
            </div>
          </div>
        }
      </div>
    </section>

    <!-- Related Products -->
    @if (relatedProducts.length > 0) {
      <section class="section related-section">
        <div class="container">
          <h2>{{ 'product.relatedProducts' | translate }}</h2>
          <div class="related-grid">
            @for (related of relatedProducts; track related.id; let i = $index) {
              <a [routerLink]="['/producto', supplierSlug, related.slug]" 
                 class="related-card"
                 [style.animation-delay]="i * 80 + 'ms'">
                <div class="related-image">
                  @if (related.image) {
                    <img [src]="related.image" [alt]="related.name">
                  } @else {
                    <span class="material-icons-outlined">inventory_2</span>
                  }
                </div>
                <span class="related-name">{{ related.name }}</span>
              </a>
            }
          </div>
        </div>
      </section>
    }
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
        font-size: 0.85rem;
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
    
    .product-detail {
      padding: var(--space-3xl) 0;
    }
    
    .product-layout {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--space-4xl);
      align-items: start;
      
      @media (max-width: 900px) {
        grid-template-columns: 1fr;
        gap: var(--space-2xl);
      }
    }
    
    .product-gallery {
      position: sticky;
      top: 100px;
      
      .main-image {
        aspect-ratio: 1;
        background: linear-gradient(145deg, #1a2744 0%, #0d1829 100%);
        border-radius: var(--radius-xl);
        overflow: hidden;
        margin-bottom: var(--space-lg);
        
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          
          .material-icons-outlined {
            font-size: 120px;
            color: var(--supplier-color, var(--color-accent));
            opacity: 0.3;
          }
        }
      }
      
      .thumbnail-strip {
        display: flex;
        gap: var(--space-sm);
        overflow-x: auto;
        
        .thumbnail {
          width: 80px;
          height: 80px;
          flex-shrink: 0;
          border: 2px solid var(--color-border);
          border-radius: var(--radius-md);
          overflow: hidden;
          cursor: pointer;
          transition: border-color var(--transition-fast);
          background: transparent;
          padding: 0;
          
          &:hover, &.active {
            border-color: var(--supplier-color, var(--color-accent));
          }
          
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
      
      @media (max-width: 900px) {
        position: static;
      }
    }
    
    .product-info {
      .supplier-badge {
        display: inline-flex;
        align-items: center;
        gap: var(--space-sm);
        padding: var(--space-xs) var(--space-md);
        background: color-mix(in srgb, var(--supplier-color, var(--color-accent)) 15%, transparent);
        border: 1px solid color-mix(in srgb, var(--supplier-color, var(--color-accent)) 30%, transparent);
        border-radius: var(--radius-full);
        font-size: 0.85rem;
        color: var(--supplier-color, var(--color-accent));
        margin-bottom: var(--space-lg);
        
        .material-icons-outlined {
          font-size: 16px;
        }
      }
      
      h1 {
        font-size: 2rem;
        margin-bottom: var(--space-md);
        line-height: 1.3;
      }
      
      .category-tag {
        display: inline-block;
        padding: var(--space-xs) var(--space-sm);
        background: var(--color-surface-elevated);
        border-radius: var(--radius-sm);
        font-size: 0.8rem;
        color: var(--color-text-muted);
        margin-bottom: var(--space-lg);
      }
      
      .short-description {
        font-size: 1.125rem;
        color: var(--color-text-secondary);
        margin-bottom: var(--space-xl);
        line-height: 1.6;
      }
      
      .description, .specifications {
        margin-bottom: var(--space-xl);
        
        h3 {
          font-size: 1rem;
          margin-bottom: var(--space-md);
          color: var(--color-text-primary);
          display: flex;
          align-items: center;
          gap: var(--space-sm);
          
          &::before {
            content: '';
            width: 4px;
            height: 20px;
            background: var(--supplier-color, var(--color-accent));
            border-radius: 2px;
          }
        }
        
        p {
          color: var(--color-text-secondary);
          line-height: 1.7;
        }
      }
      
      .spec-list {
        display: grid;
        gap: var(--space-sm);
        
        .spec-item {
          display: flex;
          padding: var(--space-md);
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          
          dt {
            font-weight: 500;
            color: var(--color-text-secondary);
            flex: 1;
          }
          
          dd {
            color: var(--color-text-primary);
            margin: 0;
          }
        }
      }
      
      .product-actions {
        display: flex;
        gap: var(--space-md);
        padding-top: var(--space-xl);
        border-top: 1px solid var(--color-border);
        
        .btn {
          flex: 1;
          justify-content: center;
          
          svg {
            margin-right: var(--space-sm);
          }
        }
        
        @media (max-width: 540px) {
          flex-direction: column;
        }
      }
    }
    
    .related-section {
      background: var(--color-surface);
      border-top: 1px solid var(--color-border);
      
      h2 {
        text-align: center;
        margin-bottom: var(--space-2xl);
      }
    }
    
    .related-grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: var(--space-lg);
      
      @media (max-width: 1000px) {
        grid-template-columns: repeat(4, 1fr);
      }
      
      @media (max-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
      }
      
      @media (max-width: 540px) {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    
    .related-card {
      text-decoration: none;
      transition: transform var(--transition-fast);
      animation: fadeInUp 0.5s ease forwards;
      opacity: 0;
      
      &:hover {
        transform: translateY(-4px);
        
        .related-image {
          border-color: var(--color-accent);
        }
      }
      
      .related-image {
        aspect-ratio: 1;
        background: var(--color-surface-elevated);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-lg);
        overflow: hidden;
        margin-bottom: var(--space-sm);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: border-color var(--transition-fast);
        
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .material-icons-outlined {
          font-size: 32px;
          color: var(--color-text-muted);
        }
      }
      
      .related-name {
        display: block;
        font-size: 0.85rem;
        color: var(--color-text-secondary);
        text-align: center;
        line-height: 1.3;
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
export class ProductDetailComponent implements OnInit {
  private api = inject(ApiService);
  private route = inject(ActivatedRoute);
  
  product: Product | null = null;
  supplier: any = null;
  relatedProducts: Product[] = [];
  supplierSlug = '';
  currentImage = '';

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.supplierSlug = params['supplier'];
      const productSlug = params['slug'];
      this.loadProduct(productSlug);
    });
  }

  loadProduct(slug: string) {
    // Cargar proveedor
    this.api.getSupplierBySlug(this.supplierSlug).subscribe(supplier => {
      this.supplier = supplier;
      
      // Buscar el producto en los productos del proveedor
      if (supplier?.products) {
        this.product = supplier.products.find((p: Product) => p.slug === slug) || null;
        if (this.product?.image) {
          this.currentImage = this.product.image;
        }
        
        // Productos relacionados (misma categoría, diferentes)
        this.relatedProducts = supplier.products
          .filter((p: Product) => p.slug !== slug && p.category_name === this.product?.category_name)
          .slice(0, 5);
      }
    });
  }

  selectImage(img: string) {
    this.currentImage = img;
  }

  hasSpecifications(): boolean {
    return this.product?.specifications ? Object.keys(this.product.specifications).length > 0 : false;
  }

  getSpecifications(): { key: string; value: string }[] {
    if (!this.product?.specifications) return [];
    return Object.entries(this.product.specifications).map(([key, value]) => ({ key, value }));
  }

  getWhatsAppMessage(): string {
    const msg = `Hola, me interesa el producto: ${this.product?.name} (${this.supplier?.name})`;
    return encodeURIComponent(msg);
  }
}

