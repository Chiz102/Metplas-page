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
      <div class="hero-bg">
        <div class="hero-gradient"></div>
        <div class="hero-mesh"></div>
        <div class="hero-orb orb-1"></div>
        <div class="hero-orb orb-2"></div>
      </div>
      
      <div class="container hero-content">
        <div class="hero-badge animate-slide-in">
          <span class="badge-dot"></span>
          <span>{{ 'catalog.ourSuppliers' | translate }}</span>
        </div>
        
        <h1 class="animate-slide-in delay-1">
          <span class="line-1">Catálogo de</span>
          <span class="line-2 text-gradient">Proveedores</span>
        </h1>
        
        <p class="hero-description animate-slide-in delay-2">
          {{ 'catalog.catalogDescription' | translate }}
        </p>
        
        <!-- Stats -->
        <div class="hero-stats animate-slide-in delay-3">
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
               [style.animation-delay]="i * 80 + 'ms'">
              
              <!-- Card Background Effect -->
              <div class="card-bg">
                <div class="card-gradient"></div>
              </div>
              
              <!-- Card Content -->
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
                  
                  <!-- Category Tags -->
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
                  <span class="products-badge">
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
      <div class="cta-bg">
        <div class="cta-pattern"></div>
      </div>
      <div class="container">
        <div class="cta-card">
          <div class="cta-icon">
            <span class="material-icons-outlined">support_agent</span>
          </div>
          <div class="cta-content">
            <h2>¿Necesitas asesoría personalizada?</h2>
            <p>Nuestro equipo de expertos está listo para ayudarte a encontrar la solución perfecta.</p>
          </div>
          <div class="cta-buttons">
            <a routerLink="/contacto" class="btn-cta-primary">
              <span class="material-icons-outlined">chat</span>
              Solicitar Asesoría
            </a>
            <a href="https://wa.me/56996154315" target="_blank" class="btn-cta-whatsapp">
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
    /* ===== HERO SECTION ===== */
    .page-hero {
      position: relative;
      padding: calc(100px + var(--space-3xl)) 0 var(--space-3xl);
      text-align: center;
      overflow: hidden;
    }
    
    .hero-bg {
      position: absolute;
      inset: 0;
      background: linear-gradient(145deg, #041e35 0%, #0a3358 30%, #0d4278 60%, #0f5a4a 100%);
    }
    
    .hero-gradient {
      position: absolute;
      inset: 0;
      background: 
        radial-gradient(ellipse 80% 50% at 70% 20%, rgba(20, 184, 166, 0.25) 0%, transparent 50%),
        radial-gradient(ellipse 60% 40% at 30% 80%, rgba(59, 130, 246, 0.2) 0%, transparent 40%);
    }
    
    .hero-mesh {
      position: absolute;
      inset: 0;
      background-image: 
        linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
      background-size: 60px 60px;
      mask-image: radial-gradient(ellipse 80% 60% at 50% 40%, black 20%, transparent 70%);
    }
    
    .hero-orb {
      position: absolute;
      border-radius: 50%;
      filter: blur(80px);
      
      &.orb-1 {
        width: 500px;
        height: 500px;
        top: -150px;
        right: -100px;
        background: radial-gradient(circle, rgba(52, 211, 153, 0.3) 0%, transparent 70%);
      }
      
      &.orb-2 {
        width: 350px;
        height: 350px;
        bottom: -100px;
        left: -50px;
        background: radial-gradient(circle, rgba(59, 130, 246, 0.25) 0%, transparent 70%);
      }
    }
    
    .hero-content {
      position: relative;
      z-index: 1;
    }
    
    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      padding: 10px 24px;
      background: rgba(255, 255, 255, 0.08);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 100px;
      margin-bottom: var(--space-lg);
      
      .badge-dot {
        width: 8px;
        height: 8px;
        background: #34d399;
        border-radius: 50%;
        animation: dotPulse 2s ease-in-out infinite;
      }
      
      span:last-child {
        font-size: 0.9rem;
        font-weight: 600;
        color: rgba(255, 255, 255, 0.9);
        letter-spacing: 0.05em;
      }
    }
    
    @keyframes dotPulse {
      0%, 100% { box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.5); }
      50% { box-shadow: 0 0 0 8px rgba(52, 211, 153, 0); }
    }
    
    .page-hero h1 {
      margin-bottom: var(--space-lg);
      
      span {
        display: block;
      }
      
      .line-1 {
        color: #ffffff;
        text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
      }
      
      .line-2.text-gradient {
        background: linear-gradient(135deg, #34d399 0%, #60a5fa 50%, #a78bfa 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        filter: drop-shadow(0 4px 20px rgba(52, 211, 153, 0.4));
      }
    }
    
    .hero-description {
      font-size: 1.2rem;
      color: rgba(255, 255, 255, 0.8);
      max-width: 600px;
      margin: 0 auto var(--space-2xl);
      line-height: 1.7;
    }
    
    .hero-stats {
      display: inline-flex;
      align-items: center;
      gap: var(--space-xl);
      padding: var(--space-lg) var(--space-2xl);
      background: rgba(255, 255, 255, 0.08);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 20px;
      
      .stat-item {
        text-align: center;
        
        .stat-value {
          display: block;
          font-family: var(--font-display);
          font-size: 2.25rem;
          font-weight: 800;
          color: #34d399;
          line-height: 1;
        }
        
        .stat-label {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.7);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
      }
      
      .stat-divider {
        width: 1px;
        height: 40px;
        background: rgba(255, 255, 255, 0.2);
      }
      
      @media (max-width: 640px) {
        flex-direction: column;
        gap: var(--space-md);
        padding: var(--space-lg);
        
        .stat-divider {
          width: 60px;
          height: 1px;
        }
      }
    }
    
    /* ===== SUPPLIERS SECTION ===== */
    .suppliers-section {
      background: linear-gradient(180deg, #f8fafc 0%, #ffffff 30%, #f0f9ff 70%, #ecfdf5 100%);
      position: relative;
      
      &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: 
          radial-gradient(ellipse 50% 30% at 10% 20%, rgba(5, 150, 105, 0.06) 0%, transparent 50%),
          radial-gradient(ellipse 40% 25% at 90% 80%, rgba(59, 130, 246, 0.05) 0%, transparent 40%);
        pointer-events: none;
      }
    }
    
    .suppliers-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
      gap: var(--space-xl);
      
      @media (max-width: 500px) {
        grid-template-columns: 1fr;
      }
    }
    
    .supplier-card {
      position: relative;
      text-decoration: none;
      border-radius: 24px;
      overflow: hidden;
      animation: fadeInUp 0.6s ease forwards;
      opacity: 0;
      
      .card-bg {
        position: absolute;
        inset: 0;
        background: #ffffff;
        border: 2px solid var(--color-border-light);
        border-radius: 24px;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        
        .card-gradient {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--color-accent) 0%, var(--color-blue) 100%);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }
      }
      
      &:hover {
        .card-bg {
          border-color: var(--color-blue);
          box-shadow: 0 25px 60px rgba(3, 105, 161, 0.2);
          
          .card-gradient {
            transform: scaleX(1);
          }
        }
        
        .card-inner {
          transform: translateY(-4px);
        }
        
        .logo-wrapper {
          transform: scale(1.08);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
        }
        
        .view-btn {
          color: var(--color-blue);
          
          .material-icons-outlined {
            transform: translateX(4px);
          }
        }
      }
    }
    
    .card-inner {
      position: relative;
      padding: var(--space-xl);
      transition: transform 0.4s ease;
    }
    
    .card-header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin-bottom: var(--space-lg);
    }
    
    .logo-wrapper {
      width: 72px;
      height: 72px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #ffffff;
      border: 2px solid var(--color-border-light);
      border-radius: 16px;
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
      transition: all 0.3s ease;
      
      img {
        width: 55%;
        height: 55%;
        object-fit: contain;
      }
      
      .material-icons-outlined {
        font-size: 32px;
        color: var(--color-blue);
      }
    }
    
    .country-badge {
      display: flex;
      align-items: center;
      gap: 5px;
      padding: 8px 14px;
      background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(5, 150, 105, 0.08) 100%);
      border-radius: 100px;
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--color-blue);
      
      .material-icons-outlined {
        font-size: 14px;
      }
    }
    
    .card-body {
      margin-bottom: var(--space-lg);
      
      h3 {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--color-text-primary);
        margin-bottom: var(--space-sm);
        text-transform: none;
        letter-spacing: 0;
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
        max-width: 100%;
      }
    }
    
    .tags-wrapper {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      
      .tag {
        padding: 5px 12px;
        background: var(--color-surface-elevated);
        border: 1px solid var(--color-border-light);
        border-radius: 100px;
        font-size: 0.75rem;
        font-weight: 600;
        color: var(--color-text-secondary);
        
        &-more {
          background: linear-gradient(135deg, rgba(5, 150, 105, 0.12) 0%, rgba(59, 130, 246, 0.1) 100%);
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
      border-top: 1px solid var(--color-border-light);
      
      .products-badge {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 0.9rem;
        font-weight: 500;
        color: var(--color-text-muted);
        
        .material-icons-outlined {
          font-size: 18px;
          color: var(--color-accent);
        }
      }
      
      .view-btn {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 0.9rem;
        font-weight: 700;
        color: var(--color-text-secondary);
        transition: all 0.3s ease;
        
        .material-icons-outlined {
          font-size: 18px;
          transition: transform 0.3s ease;
        }
      }
    }
    
    /* ===== CTA SECTION ===== */
    .cta-section {
      position: relative;
      padding: var(--space-3xl) 0;
      overflow: hidden;
    }
    
    .cta-bg {
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, #041e35 0%, #0a3358 50%, #0d4278 100%);
    }
    
    .cta-pattern {
      position: absolute;
      inset: 0;
      background: 
        radial-gradient(circle at 20% 50%, rgba(52, 211, 153, 0.15) 0%, transparent 40%),
        radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 30%);
    }
    
    .cta-card {
      position: relative;
      z-index: 1;
      display: flex;
      align-items: center;
      gap: var(--space-2xl);
      padding: var(--space-2xl);
      background: rgba(255, 255, 255, 0.98);
      border-radius: 24px;
      box-shadow: 0 25px 60px rgba(0, 0, 0, 0.3);
      
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
      background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-blue) 100%);
      border-radius: 20px;
      flex-shrink: 0;
      box-shadow: 0 12px 30px rgba(5, 150, 105, 0.3);
      
      .material-icons-outlined {
        font-size: 40px;
        color: white;
      }
    }
    
    .cta-content {
      flex: 1;
      
      h2 {
        font-size: 1.6rem;
        color: var(--color-text-primary);
        margin-bottom: var(--space-sm);
      }
      
      p {
        color: var(--color-text-secondary);
        margin: 0;
        max-width: 100%;
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
    }
    
    .btn-cta-primary {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 16px 28px;
      background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-blue) 100%);
      color: #ffffff;
      font-size: 1rem;
      font-weight: 700;
      text-decoration: none;
      border-radius: 14px;
      transition: all 0.3s ease;
      box-shadow: 0 8px 25px rgba(5, 150, 105, 0.3);
      
      .material-icons-outlined {
        font-size: 20px;
      }
      
      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 12px 35px rgba(5, 150, 105, 0.4);
      }
    }
    
    .btn-cta-whatsapp {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 16px 24px;
      background: transparent;
      color: #25D366;
      font-size: 1rem;
      font-weight: 700;
      text-decoration: none;
      border: 2px solid #25D366;
      border-radius: 14px;
      transition: all 0.3s ease;
      
      svg {
        width: 20px;
        height: 20px;
      }
      
      &:hover {
        background: #25D366;
        color: white;
        transform: translateY(-2px);
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
    
    .animate-slide-in {
      animation: slideIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
      opacity: 0;
      transform: translateY(30px);
    }
    
    @keyframes slideIn {
      to {
        opacity: 1;
        transform: translateY(0);
      }
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


