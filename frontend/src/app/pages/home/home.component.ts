import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../core/services/api.service';
import { Category } from '../../core/models/catalog.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-bg">
        <div class="hero-gradient"></div>
        <div class="hero-pattern"></div>
        <div class="hero-glow"></div>
      </div>
      
      <div class="container hero-content">
        <div class="hero-text">
          <span class="hero-badge animate-fade-in-up">
            <span class="material-icons-outlined">verified</span>
            Soluciones Industriales Premium
          </span>
          
          <h1 class="animate-fade-in-up delay-1">
            Tecnología e<br>
            <span class="text-gradient">Innovación</span><br>
            Industrial
          </h1>
          
          <p class="hero-description animate-fade-in-up delay-2">
            Equipos de alta precisión, insumos de calidad y servicios especializados 
            para impulsar la productividad de tu industria.
          </p>
          
          <div class="hero-actions animate-fade-in-up delay-3">
            <a routerLink="/catalogo" class="btn btn-primary btn-lg">
              <span class="material-icons-outlined">grid_view</span>
              Ver Catálogo
            </a>
            <a routerLink="/contacto" class="btn btn-secondary btn-lg">
              <span class="material-icons-outlined">send</span>
              Contáctanos
            </a>
          </div>
          
          <div class="hero-stats animate-fade-in-up delay-4">
            <div class="stat">
              <span class="stat-value">10+</span>
              <span class="stat-label">Años de experiencia</span>
            </div>
            <div class="stat">
              <span class="stat-value">500+</span>
              <span class="stat-label">Clientes satisfechos</span>
            </div>
            <div class="stat">
              <span class="stat-value">100%</span>
              <span class="stat-label">Calidad garantizada</span>
            </div>
          </div>
        </div>
        
        <div class="hero-visual animate-fade-in delay-2">
          <div class="hero-card">
            <div class="card-inner">
              <span class="material-icons-outlined">precision_manufacturing</span>
              <span>Precisión Industrial</span>
            </div>
          </div>
          <div class="floating-elements">
            <div class="float-element float-1">
              <span class="material-icons-outlined">settings</span>
            </div>
            <div class="float-element float-2">
              <span class="material-icons-outlined">engineering</span>
            </div>
            <div class="float-element float-3">
              <span class="material-icons-outlined">lightbulb</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="scroll-indicator">
        <span class="material-icons-outlined">expand_more</span>
      </div>
    </section>

    <!-- Categories Section -->
    <section class="section categories-section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Nuestras Soluciones</span>
          <h2 class="section-title">Catálogo Completo</h2>
          <p class="section-description">
            Descubre nuestra amplia gama de productos y servicios diseñados para optimizar tu operación industrial.
          </p>
        </div>

        <div class="categories-grid">
          @for (category of categories; track category.id; let i = $index) {
            <a [routerLink]="['/catalogo', category.slug]" class="category-card" [style.animation-delay]="i * 100 + 'ms'">
              <div class="category-icon">
                <span class="material-icons-outlined">{{ category.icon || 'category' }}</span>
              </div>
              <h3>{{ category.name }}</h3>
              <p>{{ category.description }}</p>
              <span class="category-link">
                Explorar
                <span class="material-icons-outlined">arrow_forward</span>
              </span>
            </a>
          }
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="section features-section">
      <div class="container">
        <div class="features-grid">
          <div class="feature-content">
            <span class="section-label">¿Por qué elegirnos?</span>
            <h2>Compromiso con la <span class="text-gradient">Excelencia</span></h2>
            <p>
              En Metplastech Technologies nos dedicamos a proporcionar soluciones 
              industriales de la más alta calidad, respaldadas por años de experiencia 
              y un equipo altamente capacitado.
            </p>
            
            <div class="features-list">
              <div class="feature-item">
                <span class="feature-icon">
                  <span class="material-icons-outlined">verified</span>
                </span>
                <div>
                  <h4>Calidad Certificada</h4>
                  <p>Productos que cumplen con los más altos estándares de la industria.</p>
                </div>
              </div>
              
              <div class="feature-item">
                <span class="feature-icon">
                  <span class="material-icons-outlined">support_agent</span>
                </span>
                <div>
                  <h4>Soporte Técnico</h4>
                  <p>Asesoría especializada y soporte post-venta permanente.</p>
                </div>
              </div>
              
              <div class="feature-item">
                <span class="feature-icon">
                  <span class="material-icons-outlined">local_shipping</span>
                </span>
                <div>
                  <h4>Entrega Nacional</h4>
                  <p>Despacho a todo Chile con tiempos de entrega competitivos.</p>
                </div>
              </div>
            </div>
            
            <a routerLink="/somos" class="btn btn-secondary">
              Conocer más
              <span class="material-icons-outlined">arrow_forward</span>
            </a>
          </div>
          
          <div class="feature-visual">
            <div class="visual-card">
              <div class="visual-bg"></div>
              <div class="visual-content">
                <span class="material-icons-outlined">hub</span>
                <span class="visual-text">METPLASTECH</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section cta-section">
      <div class="container">
        <div class="cta-card">
          <div class="cta-content">
            <h2>¿Listo para optimizar tu operación?</h2>
            <p>
              Contáctanos hoy y descubre cómo nuestras soluciones pueden 
              transformar tu industria.
            </p>
            <div class="cta-actions">
              <a routerLink="/contacto" class="btn btn-cta btn-lg">
                <span class="material-icons-outlined">chat</span>
                Solicitar Cotización
              </a>
              <a href="tel:+56996154315" class="btn btn-secondary btn-lg">
                <span class="material-icons-outlined">phone</span>
                +569 9615 4315
              </a>
            </div>
          </div>
          <div class="cta-decoration">
            <div class="decoration-circle"></div>
            <div class="decoration-circle"></div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    // Hero Section
    .hero {
      position: relative;
      min-height: 100vh;
      display: flex;
      align-items: center;
      padding: var(--space-4xl) 0;
      overflow: hidden;
    }
    
    .hero-bg {
      position: absolute;
      inset: 0;
      z-index: -1;
    }
    
    .hero-gradient {
      position: absolute;
      inset: 0;
      background: 
        radial-gradient(ellipse 100% 80% at 70% 20%, rgba(0, 212, 255, 0.12) 0%, transparent 50%),
        radial-gradient(ellipse 80% 60% at 20% 80%, rgba(0, 255, 157, 0.08) 0%, transparent 40%);
    }
    
    .hero-pattern {
      position: absolute;
      inset: 0;
      background-image: 
        linear-gradient(rgba(0, 212, 255, 0.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 212, 255, 0.05) 1px, transparent 1px);
      background-size: 80px 80px;
      mask-image: radial-gradient(ellipse 80% 70% at 50% 30%, black 30%, transparent 70%);
    }
    
    .hero-glow {
      position: absolute;
      top: 20%;
      right: 10%;
      width: 500px;
      height: 500px;
      background: radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, transparent 60%);
      filter: blur(60px);
      animation: pulse-glow 4s ease-in-out infinite;
    }
    
    .hero-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--space-4xl);
      align-items: center;
      
      @media (max-width: 1024px) {
        grid-template-columns: 1fr;
        text-align: center;
      }
    }
    
    .hero-text {
      @media (max-width: 1024px) {
        order: 1;
      }
    }
    
    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: var(--space-sm);
      padding: var(--space-sm) var(--space-md);
      background: rgba(0, 212, 255, 0.1);
      border: 1px solid var(--color-border-strong);
      border-radius: var(--radius-full);
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--color-accent);
      margin-bottom: var(--space-xl);
      
      .material-icons-outlined {
        font-size: 16px;
      }
    }
    
    h1 {
      margin-bottom: var(--space-xl);
      
      .text-gradient {
        background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-secondary) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    }
    
    .hero-description {
      font-size: 1.25rem;
      color: var(--color-text-secondary);
      margin-bottom: var(--space-2xl);
      max-width: 500px;
      
      @media (max-width: 1024px) {
        margin: 0 auto var(--space-2xl);
      }
    }
    
    .hero-actions {
      display: flex;
      gap: var(--space-md);
      margin-bottom: var(--space-3xl);
      
      @media (max-width: 1024px) {
        justify-content: center;
      }
      
      @media (max-width: 480px) {
        flex-direction: column;
      }
    }
    
    .hero-stats {
      display: flex;
      gap: var(--space-2xl);
      
      @media (max-width: 1024px) {
        justify-content: center;
      }
      
      @media (max-width: 480px) {
        flex-direction: column;
        gap: var(--space-lg);
      }
    }
    
    .stat {
      display: flex;
      flex-direction: column;
      
      .stat-value {
        font-size: 2rem;
        font-weight: 700;
        color: var(--color-accent);
        line-height: 1;
      }
      
      .stat-label {
        font-size: 0.875rem;
        color: var(--color-text-muted);
        margin-top: var(--space-xs);
      }
    }
    
    .hero-visual {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      
      @media (max-width: 1024px) {
        display: none;
      }
    }
    
    .hero-card {
      width: 350px;
      height: 350px;
      background: linear-gradient(135deg, var(--color-surface) 0%, var(--color-surface-elevated) 100%);
      border: 1px solid var(--color-border-strong);
      border-radius: var(--radius-xl);
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: var(--shadow-elevated);
      
      .card-inner {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--space-md);
        
        .material-icons-outlined {
          font-size: 80px;
          color: var(--color-accent);
        }
        
        span:last-child {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--color-text-primary);
        }
      }
    }
    
    .floating-elements {
      position: absolute;
      inset: -40px;
    }
    
    .float-element {
      position: absolute;
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--color-surface);
      border: 1px solid var(--color-border-strong);
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-card);
      animation: float 3s ease-in-out infinite;
      
      .material-icons-outlined {
        font-size: 28px;
        color: var(--color-accent);
      }
      
      &.float-1 {
        top: 10%;
        left: -10%;
        animation-delay: 0s;
      }
      
      &.float-2 {
        top: 50%;
        right: -15%;
        animation-delay: 1s;
      }
      
      &.float-3 {
        bottom: 5%;
        left: 10%;
        animation-delay: 2s;
      }
    }
    
    .scroll-indicator {
      position: absolute;
      bottom: var(--space-xl);
      left: 50%;
      transform: translateX(-50%);
      animation: bounce 2s infinite;
      
      .material-icons-outlined {
        font-size: 32px;
        color: var(--color-text-muted);
      }
    }
    
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
      40% { transform: translateX(-50%) translateY(-10px); }
      60% { transform: translateX(-50%) translateY(-5px); }
    }
    
    // Categories Section
    .categories-section {
      background: linear-gradient(180deg, transparent 0%, rgba(0, 212, 255, 0.03) 50%, transparent 100%);
    }
    
    .categories-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: var(--space-xl);
      
      @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
      }
      
      @media (max-width: 640px) {
        grid-template-columns: 1fr;
      }
    }
    
    .category-card {
      display: flex;
      flex-direction: column;
      padding: var(--space-xl);
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-lg);
      text-decoration: none;
      transition: all var(--transition-base);
      animation: fadeInUp 0.6s ease forwards;
      opacity: 0;
      
      &:hover {
        border-color: var(--color-accent);
        transform: translateY(-8px);
        box-shadow: var(--shadow-glow);
        
        .category-icon {
          background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-secondary) 100%);
          
          .material-icons-outlined {
            color: var(--color-primary);
          }
        }
        
        .category-link {
          color: var(--color-accent);
          gap: var(--space-md);
        }
      }
    }
    
    .category-icon {
      width: 64px;
      height: 64px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0, 212, 255, 0.1);
      border-radius: var(--radius-lg);
      margin-bottom: var(--space-lg);
      transition: all var(--transition-base);
      
      .material-icons-outlined {
        font-size: 32px;
        color: var(--color-accent);
        transition: color var(--transition-base);
      }
    }
    
    .category-card h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--color-text-primary);
      margin-bottom: var(--space-sm);
    }
    
    .category-card p {
      font-size: 0.95rem;
      color: var(--color-text-muted);
      flex: 1;
      margin-bottom: var(--space-lg);
    }
    
    .category-link {
      display: flex;
      align-items: center;
      gap: var(--space-sm);
      font-size: 0.95rem;
      font-weight: 500;
      color: var(--color-text-secondary);
      transition: all var(--transition-fast);
      
      .material-icons-outlined {
        font-size: 18px;
      }
    }
    
    // Features Section
    .features-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--space-4xl);
      align-items: center;
      
      @media (max-width: 1024px) {
        grid-template-columns: 1fr;
      }
    }
    
    .feature-content {
      h2 {
        margin-bottom: var(--space-lg);
        
        .text-gradient {
          background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-secondary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      }
      
      > p {
        font-size: 1.125rem;
        margin-bottom: var(--space-2xl);
      }
    }
    
    .features-list {
      display: flex;
      flex-direction: column;
      gap: var(--space-xl);
      margin-bottom: var(--space-2xl);
    }
    
    .feature-item {
      display: flex;
      gap: var(--space-lg);
      
      .feature-icon {
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0, 212, 255, 0.1);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
        flex-shrink: 0;
        
        .material-icons-outlined {
          font-size: 24px;
          color: var(--color-accent);
        }
      }
      
      h4 {
        font-size: 1.1rem;
        font-weight: 600;
        color: var(--color-text-primary);
        margin-bottom: var(--space-xs);
      }
      
      p {
        font-size: 0.95rem;
        color: var(--color-text-muted);
        margin: 0;
      }
    }
    
    .feature-visual {
      display: flex;
      justify-content: center;
      
      @media (max-width: 1024px) {
        display: none;
      }
    }
    
    .visual-card {
      position: relative;
      width: 400px;
      height: 400px;
      display: flex;
      align-items: center;
      justify-content: center;
      
      .visual-bg {
        position: absolute;
        inset: 0;
        background: linear-gradient(135deg, var(--color-surface) 0%, var(--color-surface-elevated) 100%);
        border: 1px solid var(--color-border-strong);
        border-radius: var(--radius-xl);
        transform: rotate(-5deg);
      }
      
      .visual-content {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--space-md);
        padding: var(--space-3xl);
        background: var(--color-surface);
        border: 1px solid var(--color-border-strong);
        border-radius: var(--radius-xl);
        
        .material-icons-outlined {
          font-size: 100px;
          color: var(--color-accent);
        }
        
        .visual-text {
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--color-text-primary);
        }
      }
    }
    
    // CTA Section
    .cta-section {
      padding-bottom: 0;
    }
    
    .cta-card {
      position: relative;
      padding: var(--space-4xl);
      background: linear-gradient(135deg, var(--color-surface) 0%, var(--color-surface-elevated) 100%);
      border: 1px solid var(--color-border-strong);
      border-radius: var(--radius-xl);
      overflow: hidden;
      
      @media (max-width: 768px) {
        padding: var(--space-2xl);
      }
    }
    
    .cta-content {
      position: relative;
      z-index: 1;
      max-width: 600px;
      
      h2 {
        margin-bottom: var(--space-md);
      }
      
      p {
        font-size: 1.125rem;
        margin-bottom: var(--space-2xl);
      }
    }
    
    .cta-actions {
      display: flex;
      gap: var(--space-md);
      flex-wrap: wrap;
    }
    
    .cta-decoration {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 50%;
      pointer-events: none;
      
      .decoration-circle {
        position: absolute;
        border-radius: 50%;
        border: 1px solid var(--color-border);
        
        &:first-child {
          width: 400px;
          height: 400px;
          right: -100px;
          top: -100px;
        }
        
        &:last-child {
          width: 300px;
          height: 300px;
          right: 50px;
          bottom: -50px;
          border-color: var(--color-accent);
          opacity: 0.2;
        }
      }
      
      @media (max-width: 768px) {
        display: none;
      }
    }
  `]
})
export class HomeComponent implements OnInit {
  private api = inject(ApiService);
  categories: Category[] = [];

  ngOnInit() {
    this.api.getCategories().subscribe(cats => {
      this.categories = cats;
    });
  }
}

