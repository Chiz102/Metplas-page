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
        <span class="sep">/</span>
        <a [routerLink]="['/catalogo', supplierSlug]">{{ supplier?.name }}</a>
        <span class="sep">/</span>
        <span class="current">{{ categoryName }}</span>
      </div>
    </nav>

    <!-- Hero -->
    <section class="category-hero">
      <div class="hero-deco-tl"></div>
      <div class="container hero-inner">
        <a [routerLink]="['/catalogo', supplierSlug]" class="back-link">
          <span class="material-icons-outlined">arrow_back</span>
          {{ 'catalog.backToCategories' | translate }}
        </a>
        <h1>{{ categoryName }}</h1>
        <p class="product-count">{{ products.length }} {{ 'catalog.productsAvailable' | translate }}</p>
      </div>
    </section>
    
    <div class="deco-bar"></div>

    <!-- Products Grid -->
    <section class="products-section">
      <div class="container">
        @if (products.length > 0) {
          <div class="products-grid">
            @for (product of products; track product.id; let i = $index) {
              <a [routerLink]="['/producto', supplierSlug, product.slug]" 
                 class="product-card" 
                 [style.animation-delay]="i * 60 + 'ms'">
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
            <a [routerLink]="['/catalogo', supplierSlug]" class="btn-green">
              <span class="material-icons-outlined">arrow_back</span>
              {{ 'catalog.backToCategories' | translate }}
            </a>
          </div>
        }
      </div>
    </section>
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
        font-size: 0.9rem;
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
    
    .category-hero {
      position: relative;
      padding: 2.5rem 0;
      background: #fff;
      overflow: hidden;
    }
    
    .hero-deco-tl {
      position: absolute;
      top: 0; left: 0;
      width: 100px; height: 100%;
      background: linear-gradient(135deg, #229443 0%, #229443 12%, #104F8E 12%, #104F8E 24%, transparent 24%);
      pointer-events: none;
      @media (max-width: 768px) { display: none; }
    }
    
    .hero-inner { position: relative; z-index: 1; }
    
    .deco-bar {
      height: 6px;
      background: linear-gradient(90deg, #229443 0%, #104F8E 50%, #229443 100%);
    }
    
    .back-link {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      color: #718096;
      text-decoration: none;
      font-size: 0.9rem;
      margin-bottom: 1rem;
      transition: color 0.2s ease;
      
      .material-icons-outlined { font-size: 18px; }
      &:hover { color: #229443; }
    }
    
    h1 {
      font-size: 2.25rem;
      color: #0a2540;
      margin-bottom: 0.5rem;
    }
    
    .product-count {
      color: #718096;
      font-size: 1rem;
      font-style: italic;
    }
    
    .products-section {
      padding: 3rem 0 4rem;
      background: #fff;
    }
    
    .products-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1.5rem;
      
      @media (max-width: 1200px) { grid-template-columns: repeat(3, 1fr); }
      @media (max-width: 900px) { grid-template-columns: repeat(2, 1fr); }
      @media (max-width: 540px) { grid-template-columns: 1fr; }
    }
    
    .product-card {
      background: #fff;
      border: 2px solid #e2e8f0;
      border-radius: 14px;
      overflow: hidden;
      text-decoration: none;
      transition: all 0.3s ease;
      animation: fadeInUp 0.5s ease forwards;
      opacity: 0;
      
      &:hover {
        border-color: #229443;
        transform: translateY(-6px);
        box-shadow: 0 12px 32px rgba(16, 79, 142, 0.1);
        
        .product-image {
          img { transform: scale(1.05); }
          .overlay { opacity: 1; }
        }
      }
      
      .product-image {
        position: relative;
        aspect-ratio: 1;
        overflow: hidden;
        background: #f8fafc;
        
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        
        .placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          
          .material-icons-outlined { font-size: 56px; color: #cbd5e1; }
        }
        
        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, 
            rgba(10, 37, 64, 0.8) 0%,
            rgba(10, 37, 64, 0.3) 50%,
            transparent 100%);
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding-bottom: 1rem;
          opacity: 0;
          transition: opacity 0.3s ease;
          
          .view-btn {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 8px 18px;
            background: #229443;
            color: white;
            border-radius: 100px;
            font-size: 0.8rem;
            font-weight: 600;
            
            .material-icons-outlined { font-size: 16px; }
          }
        }
      }
      
      .product-info {
        padding: 1rem 1.25rem;
        
        h3 {
          font-size: 0.95rem;
          font-weight: 700;
          color: #0a2540;
          margin-bottom: 0.25rem;
          line-height: 1.3;
        }
        
        .description {
          font-size: 0.8rem;
          color: #718096;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          max-width: 100%;
        }
      }
    }
    
    .empty-state {
      text-align: center;
      padding: 4rem;
      background: #f8fafc;
      border: 2px solid #e2e8f0;
      border-radius: 16px;
      
      .material-icons-outlined { font-size: 64px; color: #cbd5e1; margin-bottom: 1rem; }
      h3 { margin-bottom: 0.5rem; color: #0a2540; }
      p { color: #718096; margin-bottom: 1.5rem; }
    }
    
    .btn-green {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 12px 24px;
      background: linear-gradient(135deg, #229443, #2ecc71);
      color: #fff;
      font-size: 0.95rem;
      font-weight: 700;
      text-decoration: none;
      border-radius: 10px;
      transition: all 0.3s ease;
      
      .material-icons-outlined { font-size: 18px; }
      
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(34, 148, 67, 0.3);
        color: #fff;
      }
    }
    
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
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
    this.api.getSupplierBySlug(this.supplierSlug).subscribe(supplier => {
      this.supplier = supplier;
    });

    this.api.getProductsByCategory(this.supplierSlug, this.categorySlug).subscribe(result => {
      this.products = result.products;
      this.categoryName = result.categoryName;
    });
  }
}
