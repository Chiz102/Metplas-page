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
      <div class="hero-deco-tl"></div>
      <div class="hero-deco-br"></div>
      
      <div class="container hero-inner">
        <div class="hero-badge animate-in">
          <span class="material-icons-outlined">storefront</span>
          {{ 'catalog.ourSuppliers' | translate }}
        </div>
        
        <h1 class="animate-in d1">
          CATÁLOGO DE <span class="accent">PROVEEDORES</span>
        </h1>
        
        <p class="hero-desc animate-in d2">
          {{ 'catalog.catalogDescription' | translate }}
        </p>
        
        <!-- Stats -->
        <div class="hero-stats animate-in d3">
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
    
    <!-- Decorative Bar -->
    <div class="deco-bar"></div>

    <!-- Suppliers Grid -->
    <section class="suppliers-section">
      <div class="container">
        <div class="suppliers-grid">
          @for (supplier of suppliers; track supplier.slug; let i = $index) {
            <a [routerLink]="['/catalogo', supplier.slug]" 
               class="supplier-card" 
               [style.animation-delay]="i * 80 + 'ms'">
              
              <div class="card-top-accent"></div>
              
              <div class="card-inner">
                <div class="card-header">
                  <div class="logo-wrapper">
                    @if (supplier.logo) {
                      <img [src]="supplier.logo" [alt]="supplier.name">
                    } @else {
                      <span class="material-icons-outlined">{{ supplier.icon || 'business' }}</span>
                    }
                  </div>
                  @if (supplier.country) {
                    <span class="country-badge">
                      <span class="material-icons-outlined">public</span>
                      {{ supplier.country }}
                    </span>
                  }
                </div>
                
                <div class="card-body">
                  <h3>{{ supplier.name }}</h3>
                  <p>{{ supplier.description }}</p>
                  
                  <div class="tags-wrapper">
                    @for (cat of getSupplierCategories(supplier).slice(0, 3); track cat) {
                      <span class="tag">{{ cat }}</span>
                    }
                    @if (getSupplierCategories(supplier).length > 3) {
                      <span class="tag tag-more">+{{ getSupplierCategories(supplier).length - 3 }}</span>
                    }
                  </div>
                </div>
                
                <div class="card-footer">
                  <span class="products-count">
                    <span class="material-icons-outlined">inventory_2</span>
                    {{ supplier.products_count || '10' }} productos
                  </span>
                  <span class="view-btn">
                    Ver catálogo
                    <span class="material-icons-outlined">arrow_forward</span>
                  </span>
                </div>
              </div>
            </a>
          }
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-card">
          <div class="cta-icon-wrapper">
            <span class="material-icons-outlined">support_agent</span>
          </div>
          <div class="cta-content">
            <h2>¿Necesitas asesoría personalizada?</h2>
            <p>Nuestro equipo de expertos está listo para ayudarte a encontrar la solución perfecta.</p>
          </div>
          <div class="cta-buttons">
            <a routerLink="/contacto" class="btn-green">
              <span class="material-icons-outlined">chat</span>
              Solicitar Asesoría
            </a>
            <!-- <a href="https://wa.me/56996154315" target="_blank" class="btn-whatsapp">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a> -->
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host { display: block; }
    
    /* ===== HERO ===== */
    .page-hero {
      position: relative;
      padding: calc(100px + 3rem) 0 3rem;
      text-align: center;
      background: #fff;
      overflow: hidden;
    }
    
    .hero-deco-tl {
      position: absolute;
      top: 0; left: 0;
      width: 180px; height: 100%;
      background: linear-gradient(135deg, #4FAD47 0%, #4FAD47 8%, #2667A9 8%, #2667A9 16%, transparent 16%);
      pointer-events: none;
      @media (max-width: 768px) { display: none; }
    }
    
    .hero-deco-br {
      position: absolute;
      bottom: 0; right: 0;
      width: 180px; height: 100%;
      background: linear-gradient(-45deg, #4FAD47 0%, #4FAD47 8%, #2667A9 8%, #2667A9 16%, transparent 16%);
      pointer-events: none;
      @media (max-width: 768px) { display: none; }
    }
    
    .hero-inner { position: relative; z-index: 1; }
    
    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 10px 24px;
      background: #f0f9ff;
      border: 2px solid #2667A9;
      border-radius: 100px;
      font-size: 0.85rem;
      font-weight: 700;
      color: #2667A9;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 1.5rem;
      
      .material-icons-outlined { font-size: 18px; color: #4FAD47; }
    }
    
    h1 {
      color: #204C81;
      margin-bottom: 1rem;
      
      .accent { color: #4FAD47; }
    }
    
    .hero-desc {
      font-size: 1.1rem;
      color: #4a5568;
      font-style: italic;
      max-width: 550px;
      margin: 0 auto 2rem;
      line-height: 1.7;
    }
    
    .hero-stats {
      display: inline-flex;
      align-items: center;
      gap: 2rem;
      padding: 1.25rem 2.5rem;
      background: #f8fafc;
      border: 2px solid #4FAD47;
      border-radius: 16px;
      
      .stat-item { text-align: center; }
      
      .stat-value {
        display: block;
        font-family: var(--font-display);
        font-size: 2rem;
        font-weight: 800;
        color: #2667A9;
        line-height: 1;
      }
      
      .stat-label {
        font-size: 0.8rem;
        color: #718096;
        text-transform: uppercase;
        letter-spacing: 0.1em;
      }
      
      .stat-divider {
        width: 1px;
        height: 40px;
        background: #e2e8f0;
      }
      
      @media (max-width: 640px) {
        flex-direction: column;
        gap: 1rem;
        padding: 1.25rem;
        
        .stat-divider { width: 60px; height: 1px; }
      }
    }
    
    /* ===== SUPPLIERS SECTION ===== */
    .suppliers-section {
      padding: 4rem 0;
      background: #fff;
    }
    
    .suppliers-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 2rem;
      
      @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }

      @media (max-width: 350px) {
        grid-template-columns: minmax(0, 1fr);
      }
    }
    
    .supplier-card {
      position: relative;
      text-decoration: none;
      border-radius: 16px;
      overflow: hidden;
      background: #fff;
      border: 2px solid #e2e8f0;
      animation: fadeInUp 0.6s ease forwards;
      opacity: 0;
      transition: all 0.3s ease;
      
      .card-top-accent {
        height: 4px;
        background: linear-gradient(90deg, #4FAD47 0%, #2667A9 100%);
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.4s ease;
      }
      
      &:hover {
        border-color: #4FAD47;
        box-shadow: 0 12px 40px rgba(16, 79, 142, 0.12);
        transform: translateY(-4px);
        
        .card-top-accent { transform: scaleX(1); }
        
        .logo-wrapper {
          transform: scale(1.05);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
        }
        
        .view-btn {
          color: #4FAD47;
          .material-icons-outlined { transform: translateX(4px); }
        }
      }
    }
    
    .card-inner {
      padding: 1.5rem;
    }
    
    .card-header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin-bottom: 1.25rem;
    }
    
    .logo-wrapper {
      width: 68px;
      height: 68px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #fff;
      border: 2px solid #e2e8f0;
      border-radius: 14px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
      transition: all 0.3s ease;
      
      img { width: 55%; height: 55%; object-fit: contain; }
      .material-icons-outlined { font-size: 32px; color: #2667A9; }
    }
    
    .country-badge {
      display: flex;
      align-items: center;
      gap: 5px;
      padding: 6px 12px;
      background: #f0f9ff;
      border: 1px solid #e2e8f0;
      border-radius: 100px;
      font-size: 0.8rem;
      font-weight: 600;
      color: #2667A9;
      
      .material-icons-outlined { font-size: 14px; }
    }
    
    .card-body {
      margin-bottom: 1.25rem;
      
      h3 {
        font-size: 1.4rem;
        font-weight: 700;
        color: #204C81;
        margin-bottom: 0.5rem;
        text-transform: none;
        letter-spacing: 0;
      }
      
      p {
        font-size: 0.9rem;
        color: #718096;
        line-height: 1.6;
        margin-bottom: 0.75rem;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        max-width: 100%;
      }
    }
    
    .tags-wrapper {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      
      .tag {
        padding: 4px 10px;
        background: #f8fafc;
        border: 1px solid #e2e8f0;
        border-radius: 100px;
        font-size: 0.75rem;
        font-weight: 600;
        color: #4a5568;
        
        &-more {
          background: rgba(34, 148, 67, 0.1);
          border-color: #4FAD47;
          color: #4FAD47;
        }
      }
    }
    
    .card-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 1.25rem;
      border-top: 1px solid #e2e8f0;
      
      .products-count {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 0.85rem;
        font-weight: 500;
        color: #718096;
        
        .material-icons-outlined { font-size: 16px; color: #4FAD47; }
      }
      
      .view-btn {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 0.85rem;
        font-weight: 700;
        color: #2667A9;
        transition: all 0.3s ease;
        
        .material-icons-outlined { font-size: 16px; transition: transform 0.3s ease; }
      }
    }
    
    /* ===== CTA SECTION ===== */
    .cta-section {
      padding: 3rem 0 4rem;
      background: #f8fafc;
    }
    
    .cta-card {
      display: flex;
      align-items: center;
      gap: 2rem;
      padding: 2.5rem;
      background: #fff;
      border: 2px solid #4FAD47;
      border-radius: 16px;
      box-shadow: 0 8px 30px rgba(16, 79, 142, 0.08);
      
      @media (max-width: 900px) {
        flex-direction: column;
        text-align: center;
      }
    }
    
    .cta-icon-wrapper {
      width: 72px;
      height: 72px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #4FAD47, #2667A9);
      border-radius: 16px;
      flex-shrink: 0;
      
      .material-icons-outlined { font-size: 36px; color: white; }
    }
    
    .cta-content {
      flex: 1;
      
      h2 {
        font-size: 1.5rem;
        color: #204C81;
        margin-bottom: 0.5rem;
      }
      
      p {
        color: #718096;
        margin: 0;
        max-width: 100%;
      }
    }
    
    .cta-buttons {
      display: flex;
      gap: 1rem;
      flex-shrink: 0;
      
      @media (max-width: 600px) {
        flex-direction: column;
        width: 100%;
      }
    }
    
    .btn-green {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 14px 24px;
      background: linear-gradient(135deg, #4FAD47, #2ecc71);
      color: #fff;
      font-size: 0.95rem;
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
    
    .btn-whatsapp {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 14px 20px;
      background: transparent;
      color: #25D366;
      font-size: 0.95rem;
      font-weight: 700;
      text-decoration: none;
      border: 2px solid #25D366;
      border-radius: 10px;
      transition: all 0.3s ease;
      
      svg { width: 20px; height: 20px; }
      
      &:hover {
        background: #25D366;
        color: white;
        transform: translateY(-2px);
      }
    }
    
    /* Animations */
    .animate-in {
      animation: slideUp 0.7s ease forwards;
      opacity: 0;
      transform: translateY(25px);
    }
    .d1 { animation-delay: 0.1s; }
    .d2 { animation-delay: 0.2s; }
    .d3 { animation-delay: 0.3s; }
    
    @keyframes slideUp {
      to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
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
