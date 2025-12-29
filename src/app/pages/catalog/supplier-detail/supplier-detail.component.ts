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
    <section class="supplier-hero" [style.--supplier-color]="supplier?.color">
      <div class="container">
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
            @if (supplier?.country) {
              <div class="origin">
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
    </section>

    <!-- Categories Grid -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2>{{ 'catalog.productCategories' | translate }}</h2>
          <p>{{ 'catalog.selectCategory' | translate }}</p>
        </div>

        <div class="categories-grid">
          @for (category of categories; track category.file; let i = $index) {
            <a [routerLink]="['/catalogo', supplierSlug, getCategorySlug(category)]" 
               class="category-card" 
               [style.animation-delay]="i * 80 + 'ms'"
               [style.--supplier-color]="supplier?.color">
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
    <section class="section cta-section">
      <div class="container">
        <div class="cta-card" [style.--supplier-color]="supplier?.color">
          <span class="material-icons-outlined cta-icon">support_agent</span>
          <h3>{{ 'catalog.needHelp' | translate }}</h3>
          <p>{{ 'catalog.needHelpDesc' | translate }}</p>
          <a routerLink="/contacto" class="btn btn-primary">
            <span class="material-icons-outlined">chat</span>
            {{ 'catalog.contactUs' | translate }}
          </a>
        </div>
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
    
    .supplier-hero {
      padding: var(--space-3xl) 0;
      background: linear-gradient(135deg, 
        color-mix(in srgb, var(--supplier-color, var(--color-accent)) 15%, transparent) 0%,
        transparent 60%);
      border-bottom: 1px solid var(--color-border);
      
      .hero-content {
        display: flex;
        align-items: center;
        gap: var(--space-2xl);
        
        @media (max-width: 768px) {
          flex-direction: column;
          text-align: center;
        }
      }
      
      .supplier-logo {
        width: 120px;
        height: 120px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: white;
        border-radius: var(--radius-xl);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        flex-shrink: 0;
        
        img {
          width: 80%;
          height: 80%;
          object-fit: contain;
        }
        
        .material-icons-outlined {
          font-size: 56px;
          color: var(--supplier-color, var(--color-accent));
        }
      }
      
      .supplier-info {
        flex: 1;
        
        h1 {
          color: var(--color-header-primary);
          font-size: 2.5rem;
          margin-bottom: var(--space-md);
          background: none;
          -webkit-background-clip: unset;
          -webkit-text-fill-color: unset;
          background-clip: unset;
        }
        
        .description {
          font-size: 1.125rem;
          color: var(--color-text-secondary);
          margin-bottom: var(--space-lg);
          max-width: 600px;
        }
        
        .origin {
          display: inline-flex;
          align-items: center;
          gap: var(--space-sm);
          padding: var(--space-sm) var(--space-md);
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-full);
          font-size: 0.9rem;
          color: var(--color-text-secondary);
          margin-right: var(--space-md);
          
          .material-icons-outlined {
            font-size: 18px;
            color: var(--supplier-color, var(--color-accent));
          }
        }
        
        .website-link {
          display: inline-flex;
          align-items: center;
          gap: var(--space-sm);
          padding: var(--space-sm) var(--space-md);
          color: var(--supplier-color, var(--color-accent));
          text-decoration: none;
          font-size: 0.9rem;
          
          &:hover {
            text-decoration: underline;
          }
          
          .material-icons-outlined {
            font-size: 18px;
          }
        }
      }
    }
    
    .section-header {
      text-align: center;
      margin-bottom: var(--space-3xl);
      color: var(--color-header-primary);
      
      h2 {
        margin-bottom: var(--space-sm);
        color: inherit;
      }
      
      p {
        color: var(--color-text-muted);
        font-size: 1.1rem;
      }
    }
    
    .categories-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: var(--space-lg);
      
      @media (max-width: 900px) {
        grid-template-columns: 1fr;
      }
    }
    
    .category-card {
      display: flex;
      align-items: center;
      gap: var(--space-lg);
      padding: var(--space-xl);
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-xl);
      text-decoration: none;
      transition: all var(--transition-base);
      animation: fadeInUp 0.5s ease forwards;
      opacity: 0;
      
      &:hover {
        border-color: var(--supplier-color, var(--color-accent));
        transform: translateX(8px);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
        
        .card-icon {
          background: var(--supplier-color, var(--color-accent));
          
          .material-icons-outlined {
            color: white;
          }
        }
        
        .card-arrow {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      .card-icon {
        width: 64px;
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: color-mix(in srgb, var(--supplier-color, var(--color-accent)) 15%, transparent);
        border-radius: var(--radius-lg);
        transition: all var(--transition-base);
        flex-shrink: 0;
        
        .material-icons-outlined {
          font-size: 32px;
          color: var(--supplier-color, var(--color-accent));
          transition: color var(--transition-base);
        }
      }
      
      .card-content {
        flex: 1;
        
        h3 {
          font-size: 1.25rem;
          color: var(--color-text-primary);
          margin-bottom: var(--space-xs);
        }
        
        .product-count {
          font-size: 0.875rem;
          color: var(--color-text-muted);
        }
      }
      
      .card-arrow {
        opacity: 0;
        transform: translateX(-10px);
        transition: all var(--transition-base);
        
        .material-icons-outlined {
          font-size: 24px;
          color: var(--supplier-color, var(--color-accent));
        }
      }
    }
    
    .cta-section {
      padding-bottom: var(--space-4xl);
    }
    
    .cta-card {
      text-align: center;
      padding: var(--space-3xl);
      background: linear-gradient(135deg, var(--color-surface) 0%, var(--color-surface-elevated) 100%);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-xl);
      
      .cta-icon {
        font-size: 48px;
        color: var(--supplier-color, var(--color-accent));
        margin-bottom: var(--space-lg);
      }
      
      h3 {
        margin-bottom: var(--space-sm);
      }
      
      p {
        color: var(--color-text-muted);
        margin-bottom: var(--space-xl);
        max-width: 400px;
        margin-left: auto;
        margin-right: auto;
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
    // Cargar metadata del proveedor
    this.api.getSupplierBySlug(this.supplierSlug).subscribe(supplier => {
      this.supplier = supplier;
    });

    // Cargar categorías desde el metadata específico del proveedor
    this.api.getSupplierCategories(this.supplierSlug).subscribe(categories => {
      this.categories = categories;
    });
  }

  getCategorySlug(category: SupplierCategory): string {
    // Usar el nombre del archivo sin la extensión como slug, reemplazando espacios con guiones
    return category.file.replace('.json', '').toLowerCase().replace(/\s+/g, '-');
  }
}



