import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule],
  template: `
    <!-- Hero Section -->
    <section class="page-hero">
      <div class="hero-decoration">
        <div class="deco-circle deco-1"></div>
        <div class="deco-circle deco-2"></div>
      </div>
      <div class="container">
        <div class="hero-badge animate-fade-in-up">
          <span class="material-icons-outlined">storefront</span>
          {{ 'catalog.ourSuppliers' | translate }}
        </div>
        <h1 class="animate-fade-in-up delay-1">
          Nuestros <span class="text-gradient">Proveedores</span>
        </h1>
        <p class="hero-description animate-fade-in-up delay-2">
          {{ 'catalog.catalogDescription' | translate }}
        </p>
        
        <!-- Stats -->
        <div class="hero-stats animate-fade-in-up delay-3">
          <div class="stat-item">
            <span class="stat-value">{{ suppliers.length }}</span>
            <span class="stat-label">Marcas Aliadas</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-value">{{ getTotalProducts() }}+</span>
            <span class="stat-label">Productos</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-value">5</span>
            <span class="stat-label">Países</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Suppliers Grid -->
    <section class="section suppliers-section">
      <div class="container">
        <div class="suppliers-grid">
          @for (supplier of suppliers; track supplier.slug; let i = $index) {
            <a [routerLink]="['/catalogo', supplier.slug]" 
               class="supplier-card" 
               [style.animation-delay]="i * 80 + 'ms'"
               [style.--card-accent]="supplier.color || '#0369a1'">
              
              <!-- Top accent -->
              <div class="card-top-accent"></div>
              
              <!-- Header -->
              <div class="card-header">
                <div class="logo-container">
                  @if (supplier.logo) {
                    <img [src]="supplier.logo" [alt]="supplier.name">
                  } @else {
                    <span class="material-icons-outlined">{{ supplier.icon || 'business' }}</span>
                  }
                </div>
                @if (supplier.country) {
                  <span class="country-tag">
                    <span class="material-icons-outlined">public</span>
                    {{ supplier.country }}
                  </span>
                }
              </div>
              
              <!-- Content -->
              <div class="card-body">
                <h3>{{ supplier.name }}</h3>
                <p>{{ supplier.description }}</p>
                
                <!-- Categories Tags -->
                <div class="category-tags">
                  @for (cat of getSupplierCategories(supplier).slice(0, 3); track cat) {
                    <span class="tag">{{ cat }}</span>
                  }
                  @if (getSupplierCategories(supplier).length > 3) {
                    <span class="tag tag-more">+{{ getSupplierCategories(supplier).length - 3 }}</span>
                  }
                </div>
              </div>
              
              <!-- Footer -->
              <div class="card-footer">
                <span class="products-count">
                  <span class="material-icons-outlined">inventory_2</span>
                  {{ supplier.products_count || '10' }} productos
                </span>
                <span class="view-link">
                  Ver catálogo
                  <span class="material-icons-outlined">arrow_forward</span>
                </span>
              </div>
            </a>
          }
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-blue cta-section">
      <div class="container">
        <div class="cta-wrapper">
          <div class="cta-icon">
            <span class="material-icons-outlined">support_agent</span>
          </div>
          <div class="cta-content">
            <h2>¿Necesitas asesoría personalizada?</h2>
            <p>Nuestro equipo de expertos está listo para ayudarte a encontrar la solución perfecta.</p>
          </div>
          <div class="cta-buttons">
            <a routerLink="/contacto" class="btn btn-primary">
              <span class="material-icons-outlined">chat</span>
              Solicitar Asesoría
            </a>
            <a href="https://wa.me/56996154315" target="_blank" class="btn btn-whatsapp">
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
    /* ===== HERO ===== */
    .page-hero {
      position: relative;
      padding: calc(100px + var(--space-3xl)) 0 var(--space-3xl);
      text-align: center;
      background: linear-gradient(180deg, var(--color-blue-bg) 0%, var(--color-primary) 100%);
      overflow: hidden;
    }
    
    .hero-decoration {
      position: absolute;
      inset: 0;
      overflow: hidden;
      pointer-events: none;
      
      .deco-circle {
        position: absolute;
        border-radius: 50%;
        border: 2px solid var(--color-border-blue);
        
        &.deco-1 {
          width: 500px;
          height: 500px;
          top: -200px;
          right: -100px;
          background: radial-gradient(circle, rgba(14, 165, 233, 0.08) 0%, transparent 70%);
        }
        
        &.deco-2 {
          width: 300px;
          height: 300px;
          bottom: -100px;
          left: -50px;
          background: radial-gradient(circle, rgba(5, 150, 105, 0.08) 0%, transparent 70%);
          border-color: var(--color-border);
        }
      }
    }
    
    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: var(--space-sm);
      padding: var(--space-sm) var(--space-lg);
      background: var(--color-surface);
      border: 2px solid var(--color-blue);
      border-radius: var(--radius-full);
      font-size: 0.9rem;
      font-weight: 600;
      color: var(--color-blue);
      margin-bottom: var(--space-lg);
      box-shadow: var(--shadow-md);
      
      .material-icons-outlined {
        font-size: 18px;
        color: var(--color-accent);
      }
    }
    
    h1 {
      font-size: clamp(2.5rem, 5vw, 3.5rem);
      color: var(--color-text-primary);
      margin-bottom: var(--space-md);
      
      .text-gradient {
        background: var(--gradient-accent);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    }
    
    .hero-description {
      font-size: 1.15rem;
      color: var(--color-text-secondary);
      max-width: 600px;
      margin: 0 auto var(--space-2xl);
    }
    
    .hero-stats {
      display: inline-flex;
      align-items: center;
      gap: var(--space-xl);
      padding: var(--space-lg) var(--space-2xl);
      background: var(--color-surface);
      border: 2px solid var(--color-border);
      border-radius: var(--radius-xl);
      box-shadow: var(--shadow-lg);
      
      .stat-item {
        text-align: center;
        
        .stat-value {
          display: block;
          font-size: 2rem;
          font-weight: 700;
          color: var(--color-blue);
        }
        
        .stat-label {
          font-size: 0.85rem;
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
      }
      
      .stat-divider {
        width: 2px;
        height: 40px;
        background: var(--color-border);
        border-radius: 1px;
      }
      
      @media (max-width: 640px) {
        flex-direction: column;
        gap: var(--space-md);
        padding: var(--space-lg);
        
        .stat-divider {
          width: 60px;
          height: 2px;
        }
      }
    }
    
    /* ===== SUPPLIERS SECTION ===== */
    .suppliers-section {
      background: var(--color-primary);
    }
    
    .suppliers-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
      gap: var(--space-xl);
      
      @media (max-width: 500px) {
        grid-template-columns: 1fr;
      }
    }
    
    .supplier-card {
      position: relative;
      display: flex;
      flex-direction: column;
      background: var(--color-surface);
      border: 2px solid var(--color-border);
      border-radius: var(--radius-xl);
      padding: var(--space-xl);
      text-decoration: none;
      overflow: hidden;
      transition: all var(--transition-base);
      animation: fadeInUp 0.5s ease forwards;
      opacity: 0;
      
      .card-top-accent {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: var(--card-accent, var(--color-blue));
        transform: scaleX(0);
        transform-origin: left;
        transition: transform var(--transition-base);
      }
      
      &:hover {
        border-color: var(--card-accent, var(--color-blue));
        transform: translateY(-8px);
        box-shadow: var(--shadow-xl);
        
        .card-top-accent {
          transform: scaleX(1);
        }
        
        .logo-container {
          transform: scale(1.05);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        }
        
        .view-link {
          color: var(--card-accent, var(--color-blue));
          
          .material-icons-outlined {
            transform: translateX(4px);
          }
        }
      }
    }
    
    .card-header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin-bottom: var(--space-lg);
    }
    
    .logo-container {
      width: 72px;
      height: 72px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--color-surface);
      border: 2px solid var(--color-border);
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-md);
      transition: all var(--transition-base);
      
      img {
        width: 60%;
        height: 60%;
        object-fit: contain;
      }
      
      .material-icons-outlined {
        font-size: 36px;
        color: var(--card-accent, var(--color-blue));
      }
    }
    
    .country-tag {
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 6px 12px;
      background: var(--color-blue-bg);
      border-radius: var(--radius-full);
      font-size: 0.8rem;
      color: var(--color-blue);
      
      .material-icons-outlined {
        font-size: 14px;
      }
    }
    
    .card-body {
      flex: 1;
      margin-bottom: var(--space-lg);
      
      h3 {
        font-size: 1.5rem;
        color: var(--color-text-primary);
        margin-bottom: var(--space-sm);
      }
      
      p {
        font-size: 0.95rem;
        color: var(--color-text-muted);
        line-height: 1.6;
        margin-bottom: var(--space-md);
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
    
    .category-tags {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-xs);
      
      .tag {
        padding: 4px 10px;
        background: var(--color-surface-elevated);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-full);
        font-size: 0.75rem;
        color: var(--color-text-secondary);
        
        &-more {
          background: var(--color-accent-light);
          border-color: var(--color-accent);
          color: var(--color-accent);
        }
      }
    }
    
    .card-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: var(--space-lg);
      border-top: 1px solid var(--color-border);
      
      .products-count {
        display: flex;
        align-items: center;
        gap: var(--space-sm);
        font-size: 0.9rem;
        color: var(--color-text-muted);
        
        .material-icons-outlined {
          font-size: 18px;
          color: var(--color-accent);
        }
      }
      
      .view-link {
        display: flex;
        align-items: center;
        gap: var(--space-sm);
        font-size: 0.9rem;
        font-weight: 600;
        color: var(--color-text-secondary);
        transition: all var(--transition-fast);
        
        .material-icons-outlined {
          font-size: 18px;
          transition: transform var(--transition-fast);
        }
      }
    }
    
    /* ===== CTA SECTION ===== */
    .cta-section {
      padding: var(--space-3xl) 0;
    }
    
    .cta-wrapper {
      display: flex;
      align-items: center;
      gap: var(--space-2xl);
      padding: var(--space-2xl);
      background: var(--color-surface);
      border: 2px solid var(--color-border-blue);
      border-radius: var(--radius-xl);
      box-shadow: var(--shadow-lg);
      
      @media (max-width: 900px) {
        flex-direction: column;
        text-align: center;
      }
    }
    
    .cta-icon {
      width: 80px;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--gradient-accent);
      border-radius: var(--radius-xl);
      flex-shrink: 0;
      
      .material-icons-outlined {
        font-size: 40px;
        color: white;
      }
    }
    
    .cta-content {
      flex: 1;
      
      h2 {
        font-size: 1.5rem;
        color: var(--color-text-primary);
        margin-bottom: var(--space-sm);
      }
      
      p {
        color: var(--color-text-secondary);
        margin: 0;
      }
    }
    
    .cta-buttons {
      display: flex;
      gap: var(--space-md);
      flex-shrink: 0;
      
      @media (max-width: 600px) {
        flex-direction: column;
        width: 100%;
      }
      
      .btn-whatsapp {
        display: inline-flex;
        align-items: center;
        gap: var(--space-sm);
        padding: var(--space-md) var(--space-xl);
        background: transparent;
        color: #25D366;
        font-weight: 600;
        border: 2px solid #25D366;
        border-radius: var(--radius-md);
        text-decoration: none;
        transition: all var(--transition-base);
        
        svg {
          width: 20px;
          height: 20px;
        }
        
        &:hover {
          background: #25D366;
          color: white;
        }
      }
    }
    
    /* ===== ANIMATIONS ===== */
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .animate-fade-in-up {
      animation: fadeInUp 0.6s ease forwards;
      opacity: 0;
    }
    
    .delay-1 { animation-delay: 0.1s; }
    .delay-2 { animation-delay: 0.2s; }
    .delay-3 { animation-delay: 0.3s; }
  `]
})
export class CatalogComponent implements OnInit {
  private api = inject(ApiService);
  
  suppliers: any[] = [];

  ngOnInit() {
    this.api.getSuppliers().subscribe(suppliers => {
      this.suppliers = suppliers;
    });
  }

  getTotalProducts(): number {
    return this.suppliers.reduce((sum, s) => sum + (s.products_count || 10), 0);
  }

  getSupplierCategories(supplier: any): string[] {
    return supplier.available_categories?.esp || [];
  }
}
