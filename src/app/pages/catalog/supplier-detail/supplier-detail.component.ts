import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ApiService } from '../../../core/services/api.service';

interface SupplierCategory {
  file: string;
  name_es: string;
  name_en: string;
  icon: string;
  productCount?: number;
}

@Component({
  selector: 'app-supplier-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule],
  template: `
    <!-- Breadcrumb -->
    <nav class="breadcrumb">
      <div class="container">
        <a routerLink="/catalogo">{{ 'catalog.catalog' | translate }}</a>
        <span class="separator">/</span>
        <span class="current">{{ supplier?.name }}</span>
      </div>
    </nav>

    <!-- Hero -->
    <section class="supplier-hero">
      <div class="hero-deco-tl"></div>
      <div class="container hero-inner">
        <div class="hero-content">
          <div class="supplier-logo">
            @if (supplier?.logo) {
              <img [src]="supplier.logo" [alt]="supplier.name">
            } @else {
              <span class="material-icons-outlined">{{ supplier?.icon || 'business' }}</span>
            }
          </div>
          <div class="supplier-info">
            <h1>{{ supplier?.name }}</h1>
            <p class="description">{{ supplier?.description }}</p>
            <div class="meta-row">
              @if (supplier?.country) {
                <div class="meta-badge">
                  <span class="material-icons-outlined">public</span>
                  {{ supplier?.country }}
                </div>
              }
              @if (supplier?.website) {
                <a [href]="supplier.website" target="_blank" class="website-link">
                  <span class="material-icons-outlined">language</span>
                  {{ 'catalog.visitWebsite' | translate }}
                </a>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Decorative Bar -->
    <div class="deco-bar"></div>

    <!-- Categories Grid -->
    <section class="categories-section">
      <div class="container">
        <div class="section-head">
          <h2>{{ 'catalog.productCategories' | translate }}</h2>
          <p>{{ 'catalog.selectCategory' | translate }}</p>
        </div>

        <div class="categories-grid">
          @for (category of categories; track category.file; let i = $index) {
            <a [routerLink]="['/catalogo', supplierSlug, getCategorySlug(category)]" 
               class="category-card" 
               [style.animation-delay]="i * 80 + 'ms'">
              <div class="card-icon">
                <span class="material-icons-outlined">{{ category.icon }}</span>
              </div>
              <div class="card-content">
                <h3>{{ isEnglish ? category.name_en : category.name_es }}</h3>
                @if (category.productCount) {
                  <span class="product-count">{{ category.productCount }} {{ 'catalog.products' | translate }}</span>
                }
              </div>
              <div class="card-arrow">
                <span class="material-icons-outlined">arrow_forward</span>
              </div>
            </a>
          }
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-card">
          <span class="material-icons-outlined cta-icon">support_agent</span>
          <h3>{{ 'catalog.needHelp' | translate }}</h3>
          <p>{{ 'catalog.needHelpDesc' | translate }}</p>
          <a routerLink="/contacto" class="btn-green">
            <span class="material-icons-outlined">chat</span>
            {{ 'catalog.contactUs' | translate }}
          </a>
        </div>
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
      }
      
      a {
        color: #718096;
        text-decoration: none;
        &:hover { color: #229443; }
      }
      
      .separator { color: #cbd5e1; }
      .current { color: #0a2540; font-weight: 600; }
    }
    
    /* Hero */
    .supplier-hero {
      position: relative;
      padding: 3rem 0;
      background: #fff;
      overflow: hidden;
    }
    
    .hero-deco-tl {
      position: absolute;
      top: 0; left: 0;
      width: 120px; height: 100%;
      background: linear-gradient(135deg, #229443 0%, #229443 10%, #104F8E 10%, #104F8E 20%, transparent 20%);
      pointer-events: none;
      @media (max-width: 768px) { display: none; }
    }
    
    .hero-inner { position: relative; z-index: 1; }
    
    .deco-bar {
      height: 8px;
      background: linear-gradient(to bottom,
        #229443 0%, #229443 25%,
        #104F8E 25%, #104F8E 75%,
        #229443 75%, #229443 100%
      );
    }
    
    .hero-content {
      display: flex;
      align-items: center;
      gap: 2rem;
      
      @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
      }
    }
    
    .supplier-logo {
      width: 110px;
      height: 110px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #fff;
      border: 2px solid #229443;
      border-radius: 20px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
      flex-shrink: 0;
      
      img { width: 75%; height: 75%; object-fit: contain; }
      .material-icons-outlined { font-size: 48px; color: #104F8E; }
    }
    
    .supplier-info {
      flex: 1;
      
      h1 {
        font-size: 2.25rem;
        color: #0a2540;
        margin-bottom: 0.75rem;
      }
      
      .description {
        font-size: 1.05rem;
        color: #4a5568;
        margin-bottom: 1rem;
        max-width: 600px;
        line-height: 1.7;
      }
      
      .meta-row {
        display: flex;
        align-items: center;
        gap: 1rem;
        flex-wrap: wrap;
      }
    }
    
    .meta-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 14px;
      background: #f0f9ff;
      border: 1px solid #e2e8f0;
      border-radius: 100px;
      font-size: 0.85rem;
      color: #4a5568;
      
      .material-icons-outlined { font-size: 16px; color: #104F8E; }
    }
    
    .website-link {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 14px;
      color: #104F8E;
      text-decoration: none;
      font-size: 0.85rem;
      font-weight: 600;
      border: 1px solid #104F8E;
      border-radius: 100px;
      transition: all 0.2s ease;
      
      .material-icons-outlined { font-size: 16px; }
      
      &:hover {
        background: #104F8E;
        color: #fff;
      }
    }
    
    /* Categories */
    .categories-section {
      padding: 4rem 0;
      background: #fff;
    }
    
    .section-head {
      text-align: center;
      margin-bottom: 3rem;
      
      h2 {
        margin-bottom: 0.5rem;
        color: #0a2540;
      }
      
      p {
        color: #718096;
        font-size: 1.05rem;
        font-style: italic;
      }
    }
    
    .categories-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.25rem;
      
      @media (max-width: 768px) { grid-template-columns: 1fr; }
    }
    
    .category-card {
      display: flex;
      align-items: center;
      gap: 1.25rem;
      padding: 1.5rem;
      background: #fff;
      border: 2px solid #e2e8f0;
      border-radius: 14px;
      text-decoration: none;
      transition: all 0.3s ease;
      animation: fadeInUp 0.5s ease forwards;
      opacity: 0;
      
      &:hover {
        border-color: #229443;
        transform: translateX(6px);
        box-shadow: 0 8px 24px rgba(16, 79, 142, 0.1);
        
        .card-icon {
          background: #229443;
          .material-icons-outlined { color: #fff; }
        }
        
        .card-arrow { opacity: 1; transform: translateX(0); }
      }
      
      .card-icon {
        width: 56px;
        height: 56px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(34, 148, 67, 0.1);
        border-radius: 14px;
        transition: all 0.3s ease;
        flex-shrink: 0;
        
        .material-icons-outlined { font-size: 28px; color: #229443; transition: color 0.3s ease; }
      }
      
      .card-content {
        flex: 1;
        
        h3 {
          font-size: 1.15rem;
          color: #0a2540;
          margin-bottom: 0.25rem;
        }
        
        .product-count { font-size: 0.85rem; color: #718096; }
      }
      
      .card-arrow {
        opacity: 0;
        transform: translateX(-8px);
        transition: all 0.3s ease;
        
        .material-icons-outlined { font-size: 22px; color: #229443; }
      }
    }
    
    /* CTA */
    .cta-section {
      padding: 0 0 4rem;
      background: #fff;
    }
    
    .cta-card {
      text-align: center;
      padding: 3rem;
      background: #f8fafc;
      border: 2px solid #e2e8f0;
      border-radius: 16px;
      
      .cta-icon { font-size: 48px; color: #104F8E; margin-bottom: 1rem; }
      h3 { margin-bottom: 0.5rem; color: #0a2540; }
      p { color: #718096; margin-bottom: 1.5rem; max-width: 400px; margin-left: auto; margin-right: auto; }
    }
    
    .btn-green {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 14px 28px;
      background: linear-gradient(135deg, #229443, #2ecc71);
      color: #fff;
      font-size: 1rem;
      font-weight: 700;
      text-decoration: none;
      border-radius: 10px;
      transition: all 0.3s ease;
      
      .material-icons-outlined { font-size: 20px; }
      
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
export class SupplierDetailComponent implements OnInit {
  private api = inject(ApiService);
  private route = inject(ActivatedRoute);
  
  supplier: any = null;
  categories: SupplierCategory[] = [];
  supplierSlug = '';
  isEnglish = false;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.supplierSlug = params['supplier'];
      this.loadSupplier();
    });
  }

  loadSupplier() {
    this.api.getSupplierBySlug(this.supplierSlug).subscribe(supplier => {
      this.supplier = supplier;
    });

    this.api.getSupplierCategories(this.supplierSlug).subscribe(categories => {
      this.categories = categories;
    });
  }

  getCategorySlug(category: SupplierCategory): string {
    return category.file.replace('.json', '').toLowerCase().replace(/\s+/g, '-');
  }
}
