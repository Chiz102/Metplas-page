import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../core/services/api.service';
import { Category } from '../../core/models/catalog.model';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- Hero -->
    <section class="page-hero">
      <div class="container">
        <span class="hero-label animate-fade-in-up">
          <span class="material-icons-outlined">inventory_2</span>
          {{ currentCategory ? currentCategory.name : 'Nuestros Productos' }}
        </span>
        <h1 class="animate-fade-in-up delay-1">
          {{ currentCategory ? currentCategory.name : 'Catálogo' }}
        </h1>
        <p class="hero-description animate-fade-in-up delay-2">
          {{ currentCategory?.description || 'Explora nuestra completa gama de equipos, insumos y servicios para tu industria.' }}
        </p>
      </div>
    </section>

    <!-- Category Filter -->
    <section class="filter-section">
      <div class="container">
        <div class="filter-tabs">
          <a 
            routerLink="/catalogo" 
            class="filter-tab"
            [class.active]="!currentCategory">
            <span class="material-icons-outlined">grid_view</span>
            Todos
          </a>
          @for (cat of categories; track cat.id) {
            <a 
              [routerLink]="['/catalogo', cat.slug]" 
              class="filter-tab"
              [class.active]="currentCategory?.slug === cat.slug">
              <span class="material-icons-outlined">{{ cat.icon || 'category' }}</span>
              {{ cat.name }}
            </a>
          }
        </div>
      </div>
    </section>

    <!-- Catalog Grid -->
    <section class="section">
      <div class="container">
        @if (currentCategory) {
          <!-- Single Category View -->
          <div class="category-detail">
            <div class="category-header">
              <div class="category-icon">
                <span class="material-icons-outlined">{{ currentCategory.icon || 'category' }}</span>
              </div>
              <div>
                <h2>{{ currentCategory.name }}</h2>
                <p>{{ currentCategory.description }}</p>
              </div>
            </div>

            @if (currentCategory.subcategories && currentCategory.subcategories.length > 0) {
              <div class="subcategories-grid">
                @for (sub of currentCategory.subcategories; track sub.id; let i = $index) {
                  <div class="subcategory-card" [style.animation-delay]="i * 100 + 'ms'">
                    <div class="subcategory-image">
                      @if (sub.image) {
                        <img [src]="sub.image" [alt]="sub.name">
                      } @else {
                        <span class="material-icons-outlined">{{ currentCategory.icon || 'category' }}</span>
                      }
                    </div>
                    <div class="subcategory-content">
                      <h3>{{ sub.name }}</h3>
                      <p>{{ sub.description || 'Productos de alta calidad' }}</p>
                      <span class="product-count">
                        {{ sub.products_count || 0 }} productos disponibles
                      </span>
                    </div>
                  </div>
                }
              </div>
            } @else {
              <div class="empty-state">
                <span class="material-icons-outlined">inventory_2</span>
                <h3>Próximamente</h3>
                <p>Estamos preparando el catálogo de productos. Contáctanos para más información.</p>
                <a routerLink="/contacto" class="btn btn-primary">
                  <span class="material-icons-outlined">mail</span>
                  Contactar
                </a>
              </div>
            }
          </div>
        } @else {
          <!-- All Categories Grid -->
          <div class="categories-overview">
            @for (cat of categories; track cat.id; let i = $index) {
              <a [routerLink]="['/catalogo', cat.slug]" class="category-overview-card" [style.animation-delay]="i * 100 + 'ms'">
                <div class="card-header">
                  <div class="card-icon">
                    <span class="material-icons-outlined">{{ cat.icon || 'category' }}</span>
                  </div>
                  <span class="card-badge">{{ cat.subcategories_count || 0 }} subcategorías</span>
                </div>
                <h3>{{ cat.name }}</h3>
                <p>{{ cat.description }}</p>
                
                @if (cat.slug === 'equipos') {
                  <div class="subcategory-preview">
                    <span><span class="material-icons-outlined">chevron_right</span> Equipos Trimmer</span>
                    <span><span class="material-icons-outlined">chevron_right</span> Rectificadores</span>
                  </div>
                } @else if (cat.slug === 'insumos') {
                  <div class="subcategory-preview">
                    <span><span class="material-icons-outlined">chevron_right</span> Agujas Inyectoras</span>
                    <span><span class="material-icons-outlined">chevron_right</span> EPP</span>
                    <span><span class="material-icons-outlined">chevron_right</span> Cuchillos de Empuñadura</span>
                  </div>
                }
                
                <span class="card-link">
                  Ver categoría
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
          <h2>¿No encuentras lo que buscas?</h2>
          <p>
            Nuestro equipo está listo para ayudarte a encontrar la solución perfecta para tu industria.
          </p>
          <div class="cta-actions">
            <a routerLink="/contacto" class="btn btn-primary btn-lg">
              <span class="material-icons-outlined">chat</span>
              Solicitar Asesoría
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
        border-color: var(--color-accent);
        color: var(--color-accent);
      }
      
      &.active {
        background: var(--gradient-accent);
        border-color: var(--color-accent);
        color: var(--color-primary);
      }
    }
    
    .category-detail {
      .category-header {
        display: flex;
        align-items: center;
        gap: var(--space-xl);
        margin-bottom: var(--space-3xl);
        padding-bottom: var(--space-xl);
        border-bottom: 1px solid var(--color-border);
        
        .category-icon {
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--gradient-accent-full);
          border-radius: var(--radius-xl);
          
          .material-icons-outlined {
            font-size: 40px;
            color: var(--color-primary);
          }
        }
        
        h2 {
          margin-bottom: var(--space-sm);
        }
        
        p {
          font-size: 1.1rem;
          margin: 0;
        }
        
        @media (max-width: 640px) {
          flex-direction: column;
          text-align: center;
        }
      }
    }
    
    .subcategories-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--space-xl);
      
      @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
      }
      
      @media (max-width: 640px) {
        grid-template-columns: 1fr;
      }
    }
    
    .subcategory-card {
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-lg);
      overflow: hidden;
      transition: all var(--transition-base);
      animation: fadeInUp 0.6s ease forwards;
      opacity: 0;
      
      &:hover {
        border-color: var(--color-accent);
        transform: translateY(-4px);
        box-shadow: var(--shadow-glow);
      }
      
      .subcategory-image {
        height: 160px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, var(--color-surface-elevated) 0%, var(--color-surface) 100%);
        border-bottom: 1px solid var(--color-border);
        
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .material-icons-outlined {
          font-size: 64px;
          color: var(--color-accent);
          opacity: 0.5;
        }
      }
      
      .subcategory-content {
        padding: var(--space-xl);
        
        h3 {
          font-size: 1.25rem;
          margin-bottom: var(--space-sm);
        }
        
        p {
          font-size: 0.95rem;
          color: var(--color-text-muted);
          margin-bottom: var(--space-md);
        }
        
        .product-count {
          font-size: 0.85rem;
          color: var(--color-accent);
          font-weight: 500;
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
    
    .categories-overview {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: var(--space-xl);
      
      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }
    }
    
    .category-overview-card {
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
      
      &:hover {
        border-color: var(--color-accent);
        transform: translateY(-8px);
        box-shadow: var(--shadow-glow);
        
        .card-icon {
          background: var(--gradient-accent-full);
          
          .material-icons-outlined {
            color: var(--color-primary);
          }
        }
        
        .card-link {
          color: var(--color-accent);
          gap: var(--space-md);
        }
      }
      
      .card-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: var(--space-lg);
      }
      
      .card-icon {
        width: 64px;
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--color-accent-light);
        border-radius: var(--radius-lg);
        transition: all var(--transition-base);
        
        .material-icons-outlined {
          font-size: 32px;
          color: var(--color-accent);
          transition: color var(--transition-base);
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
        color: var(--color-text-primary);
        margin-bottom: var(--space-sm);
      }
      
      > p {
        color: var(--color-text-muted);
        margin-bottom: var(--space-lg);
      }
      
      .subcategory-preview {
        display: flex;
        flex-direction: column;
        gap: var(--space-sm);
        margin-bottom: var(--space-lg);
        padding: var(--space-md);
        background: var(--color-surface-elevated);
        border-radius: var(--radius-md);
        
        span {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
          font-size: 0.9rem;
          color: var(--color-text-secondary);
          
          .material-icons-outlined {
            font-size: 16px;
            color: var(--color-accent);
          }
        }
      }
      
      .card-link {
        display: flex;
        align-items: center;
        gap: var(--space-sm);
        font-size: 0.95rem;
        font-weight: 500;
        color: var(--color-text-secondary);
        margin-top: auto;
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
  `]
})
export class CatalogComponent implements OnInit {
  private api = inject(ApiService);
  private route = inject(ActivatedRoute);
  
  categories: Category[] = [];
  currentCategory: Category | null = null;

  ngOnInit() {
    this.api.getCategories().subscribe(cats => {
      this.categories = cats;
    });

    this.route.params.subscribe(params => {
      const categorySlug = params['category'];
      if (categorySlug) {
        this.api.getCategoryBySlug(categorySlug).subscribe({
          next: cat => this.currentCategory = cat,
          error: () => this.currentCategory = null
        });
      } else {
        this.currentCategory = null;
      }
    });
  }
}

