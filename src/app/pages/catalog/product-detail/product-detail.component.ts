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
        <span class="sep">/</span>
        <a [routerLink]="['/catalogo', supplierSlug]">{{ supplier?.name }}</a>
        <span class="sep">/</span>
        <span class="current">{{ product?.name }}</span>
      </div>
    </nav>

    <!-- Product Detail -->
    <section class="product-section">
      <div class="container">
        @if (product) {
          <div class="product-layout">
            <!-- Image Section -->
            <div class="product-gallery">
              <div class="main-image">
                @if (currentImage || product.image) {
                  <img [src]="currentImage || product.image" [alt]="product.name">
                } @else {
                  <div class="placeholder">
                    <span class="material-icons-outlined">{{ supplier?.icon || 'inventory_2' }}</span>
                  </div>
                }
              </div>
              @if (getAllImages().length > 1) {
                <div class="thumbnail-strip">
                  @for (img of getAllImages(); track img) {
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
              
              <h1 class="product-title">{{ product.name }}</h1>
              
              @if (product.category_name) {
                <span class="category-tag">{{ product.category_name }}</span>
              }
              
              @if (product.short_description) {
                <p class="short-description">{{ product.short_description }}</p>
              }
              
              @if (product.description) {
                <div class="detail-block">
                  <h3>
                    <span class="bar"></span>
                    {{ 'product.description' | translate }}
                  </h3>
                  <p>{{ product.description }}</p>
                </div>
              }
              
              @if (product.specifications && hasSpecifications()) {
                <div class="detail-block">
                  <h3>
                    <span class="bar"></span>
                    {{ 'product.specifications' | translate }}
                  </h3>
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
                   class="btn-green">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  {{ 'product.requestQuote' | translate }}
                </a>
                <a routerLink="/contacto" class="btn-outline-blue">
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
      <section class="related-section">
        <div class="deco-bar-sm"></div>
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
    :host { display: block; }
    
    .breadcrumb {
      padding: calc(80px + 1rem) 0 1rem;
      background: #fff;
      border-bottom: 1px solid #e2e8f0;
      
      .container {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.85rem;
        flex-wrap: wrap;
      }
      
      a {
        color: #718096;
        text-decoration: none;
        &:hover { color: #229443; }
      }
      
      .sep { color: #cbd5e1; }
      .current { color: #0a2540; font-weight: 600; }
    }
    
    .product-section {
      padding: 3rem 0 4rem;
      background: #fff;
    }
    
    .product-layout {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: start;
      
      @media (max-width: 900px) {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
    }
    
    .product-gallery {
      position: sticky;
      top: 100px;
      
      .main-image {
        aspect-ratio: 1;
        background: #f8fafc;
        border: 2px solid #e2e8f0;
        border-radius: 16px;
        overflow: hidden;
        margin-bottom: 1rem;
        
        img { width: 100%; height: 100%; object-fit: cover; }
        
        .placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          
          .material-icons-outlined { font-size: 100px; color: #cbd5e1; }
        }
      }
      
      .thumbnail-strip {
        display: flex;
        gap: 0.5rem;
        overflow-x: auto;
        
        .thumbnail {
          width: 72px;
          height: 72px;
          flex-shrink: 0;
          border: 2px solid #e2e8f0;
          border-radius: 10px;
          overflow: hidden;
          cursor: pointer;
          transition: border-color 0.2s ease;
          background: transparent;
          padding: 0;
          
          &:hover, &.active { border-color: #229443; }
          img { width: 100%; height: 100%; object-fit: cover; }
        }
      }
      
      @media (max-width: 900px) { position: static; }
    }
    
    .product-info {
      .supplier-badge {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 6px 14px;
        background: #f0f9ff;
        border: 1px solid #e2e8f0;
        border-radius: 100px;
        font-size: 0.85rem;
        color: #104F8E;
        font-weight: 600;
        margin-bottom: 1.25rem;
        
        .material-icons-outlined { font-size: 16px; }
      }
      
      .product-title {
        font-size: 2rem;
        color: #0a2540;
        margin-bottom: 0.75rem;
        line-height: 1.2;
      }
      
      .category-tag {
        display: inline-block;
        padding: 4px 12px;
        background: #f8fafc;
        border: 1px solid #e2e8f0;
        border-radius: 6px;
        font-size: 0.8rem;
        color: #718096;
        margin-bottom: 1.25rem;
      }
      
      .short-description {
        font-size: 1.05rem;
        color: #4a5568;
        margin-bottom: 1.5rem;
        line-height: 1.7;
      }
    }
    
    .detail-block {
      margin-bottom: 1.5rem;
      
      h3 {
        font-size: 1rem;
        margin-bottom: 0.75rem;
        color: #0a2540;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        
        .bar {
          width: 4px;
          height: 20px;
          background: #229443;
          border-radius: 2px;
          display: inline-block;
        }
      }
      
      p {
        color: #4a5568;
        line-height: 1.7;
        max-width: 100%;
      }
    }
    
    .spec-list {
      display: grid;
      gap: 0.5rem;
      
      .spec-item {
        display: flex;
        padding: 0.75rem 1rem;
        background: #f8fafc;
        border: 1px solid #e2e8f0;
        border-radius: 10px;
        
        dt { font-weight: 600; color: #4a5568; flex: 1; }
        dd { color: #0a2540; font-weight: 700; margin: 0; }
      }
    }
    
    .product-actions {
      display: flex;
      gap: 1rem;
      padding-top: 1.5rem;
      border-top: 2px solid #e2e8f0;
      margin-top: 1.5rem;
      
      @media (max-width: 540px) { flex-direction: column; }
    }
    
    .btn-green {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      flex: 1;
      padding: 14px 24px;
      background: linear-gradient(135deg, #229443, #2ecc71);
      color: #fff;
      font-size: 1rem;
      font-weight: 700;
      text-decoration: none;
      border-radius: 10px;
      transition: all 0.3s ease;
      
      svg { width: 20px; height: 20px; }
      
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(34, 148, 67, 0.3);
        color: #fff;
      }
    }
    
    .btn-outline-blue {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      flex: 1;
      padding: 14px 24px;
      background: transparent;
      color: #104F8E;
      font-size: 1rem;
      font-weight: 700;
      text-decoration: none;
      border: 2px solid #104F8E;
      border-radius: 10px;
      transition: all 0.3s ease;
      
      .material-icons-outlined { font-size: 20px; }
      
      &:hover {
        background: #104F8E;
        color: #fff;
        transform: translateY(-2px);
      }
    }
    
    /* Related */
    .related-section {
      padding: 0 0 4rem;
      background: #fff;
      
      h2 { text-align: center; margin-bottom: 2rem; padding-top: 3rem; color: #0a2540; }
    }
    
    .deco-bar-sm {
      height: 6px;
      background: linear-gradient(90deg, #229443 0%, #104F8E 50%, #229443 100%);
    }
    
    .related-grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 1.25rem;
      
      @media (max-width: 1000px) { grid-template-columns: repeat(4, 1fr); }
      @media (max-width: 768px) { grid-template-columns: repeat(3, 1fr); }
      @media (max-width: 540px) { grid-template-columns: repeat(2, 1fr); }
    }
    
    .related-card {
      text-decoration: none;
      transition: transform 0.2s ease;
      animation: fadeInUp 0.5s ease forwards;
      opacity: 0;
      
      &:hover {
        transform: translateY(-4px);
        .related-image { border-color: #229443; }
      }
      
      .related-image {
        aspect-ratio: 1;
        background: #f8fafc;
        border: 2px solid #e2e8f0;
        border-radius: 14px;
        overflow: hidden;
        margin-bottom: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: border-color 0.2s ease;
        
        img { width: 100%; height: 100%; object-fit: cover; }
        .material-icons-outlined { font-size: 32px; color: #cbd5e1; }
      }
      
      .related-name {
        display: block;
        font-size: 0.85rem;
        color: #4a5568;
        text-align: center;
        line-height: 1.3;
        font-weight: 600;
      }
    }
    
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
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
    this.api.getSupplierBySlug(this.supplierSlug).subscribe(supplier => {
      this.supplier = supplier;
      
      if (supplier?.products) {
        this.product = supplier.products.find((p: Product) => p.slug === slug) || null;
        if (this.product?.image) {
          this.currentImage = this.product.image;
        }
        
        this.relatedProducts = supplier.products
          .filter((p: Product) => p.slug !== slug && p.category_name === this.product?.category_name)
          .slice(0, 5);
      }
    });
  }

  selectImage(img: string) {
    this.currentImage = img;
  }

  getAllImages(): string[] {
    if (!this.product) return [];
    const images: string[] = [];
    if (this.product.image) images.push(this.product.image);
    if (this.product.gallery) images.push(...this.product.gallery);
    return images;
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
