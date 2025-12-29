import { Component, OnInit, inject, AfterViewInit, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ApiService } from '../../core/services/api.service';
import { Category } from '../../core/models/catalog.model';
import { CarouselComponent, CarouselItem } from '../../components/carousel/carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule, CarouselComponent],
  template: `
    <!-- Hero Section - Full Impact with Parallax -->
    <section class="hero" #heroSection>
      <div class="hero-bg" [style.transform]="'translateY(' + (scrollY * 0.3) + 'px)'">
        <div class="hero-gradient"></div>
        <div class="hero-mesh"></div>
        <div class="hero-particles">
          @for (i of [1,2,3,4,5,6,7,8,9,10,11,12]; track i) {
            <div class="particle" [style.--delay]="i * 0.4 + 's'" [style.--x]="(i * 8) + '%'"></div>
          }
        </div>
        <div class="hero-glow-orb orb-1" [style.transform]="'translate(' + (scrollY * 0.1) + 'px, ' + (scrollY * 0.15) + 'px)'"></div>
        <div class="hero-glow-orb orb-2" [style.transform]="'translate(' + (-scrollY * 0.08) + 'px, ' + (scrollY * 0.12) + 'px)'"></div>
      </div>
      
      <div class="container hero-content">
        <div class="hero-text">
          <div class="hero-badge animate-slide-in">
            <span class="badge-dot"></span>
            <span>{{ 'home.badge' | translate }}</span>
          </div>
          
          <h1 class="animate-slide-in delay-1">
            <span class="line-1">{{ 'home.title' | translate }}</span>
            <span class="line-2 text-gradient">{{ 'home.titleHighlight' | translate }}</span>
            <span class="line-3">{{ 'home.titleEnd' | translate }}</span>
          </h1>
          
          <p class="hero-description animate-slide-in delay-2">
            {{ 'home.description' | translate }}
          </p>
          
          <div class="hero-actions animate-slide-in delay-3">
            <a routerLink="/catalogo" class="btn-hero-primary">
              <span>{{ 'home.viewCatalog' | translate }}</span>
              <span class="btn-icon">
                <span class="material-icons-outlined">arrow_forward</span>
              </span>
            </a>
            <a routerLink="/contacto" class="btn-hero-secondary">
              <span class="material-icons-outlined">chat_bubble_outline</span>
              <span>{{ 'home.contactUs' | translate }}</span>
            </a>
          </div>
          
          <!-- Hero Stats -->
          <div class="hero-stats animate-slide-in delay-4">
            <div class="stat">
              <span class="stat-value" data-count="7">7+</span>
              <span class="stat-label">Marcas Aliadas</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat">
              <span class="stat-value" data-count="100">100+</span>
              <span class="stat-label">Productos</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat">
              <span class="stat-value" data-count="15">15+</span>
              <span class="stat-label">Años de Experiencia</span>
            </div>
          </div>
        </div>
        
        <div class="hero-visual animate-fade-in delay-2">
          <div class="visual-showcase">
            <div class="showcase-ring ring-1"></div>
            <div class="showcase-ring ring-2"></div>
            <div class="showcase-ring ring-3"></div>
            <div class="showcase-center">
              <img src="assets/images/logo.png" alt="Metplastech" class="showcase-logo">
            </div>
            <div class="floating-badge badge-1">
              <span class="material-icons-outlined">verified</span>
              <span>Certificado</span>
            </div>
            <div class="floating-badge badge-2">
              <span class="material-icons-outlined">local_shipping</span>
              <span>Envío Nacional</span>
            </div>
            <div class="floating-badge badge-3">
              <span class="material-icons-outlined">support_agent</span>
              <span>Soporte 24/7</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Scroll Indicator -->
      <div class="scroll-indicator">
        <div class="scroll-line"></div>
        <span>Scroll</span>
      </div>
    </section>

    <!-- Clients Trust Section -->
    <section class="clients-trust-section">
      <div class="container">
        <div class="trust-header">
          <span class="trust-label">EMPRESAS QUE CONFÍAN EN NOSOTROS</span>
        </div>
        <div class="clients-logos">
          @for (client of clients; track client.name) {
            <div class="client-logo-wrapper">
              <img [src]="client.logo" [alt]="client.name" />
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Carousel Section -->
    <app-carousel [items]="carouselItems" [itemsVisible]="3"></app-carousel>

    <!-- Suppliers Section - Premium Grid -->
    <section class="suppliers-showcase" [class.in-view]="suppliersInView">
      <div class="container">
        <div class="section-intro reveal-element">
          <span class="section-tag glass-tag">
            <span class="material-icons-outlined">storefront</span>
            Nuestros Proveedores
          </span>
          <h2>Marcas <span class="text-gradient">Líderes</span> Mundiales</h2>
          <p>Trabajamos con los fabricantes más reconocidos de la industria para garantizar productos de la más alta calidad.</p>
        </div>
        
        <div class="suppliers-grid">
          @for (supplier of suppliers; track supplier.slug; let i = $index) {
            <a [routerLink]="['/catalogo', supplier.slug]" 
               class="supplier-card-premium"
               [style.animation-delay]="i * 100 + 'ms'">
              <div class="card-shine"></div>
              <div class="card-content">
                <div class="supplier-logo-wrapper">
                  @if (supplier.logo) {
                    <img [src]="supplier.logo" [alt]="supplier.name">
                  } @else {
                    <span class="material-icons-outlined">{{ supplier.icon || 'business' }}</span>
                  }
                </div>
                <h4>{{ supplier.name }}</h4>
                @if (supplier.country) {
                  <span class="supplier-origin">
                    <span class="material-icons-outlined">public</span>
                    {{ supplier.country }}
                  </span>
                }
              </div>
              <div class="card-arrow">
                <span class="material-icons-outlined">arrow_forward</span>
              </div>
            </a>
          }
        </div>
        
        <div class="suppliers-cta">
          <a routerLink="/catalogo" class="btn btn-primary">
            Ver Catálogo Completo
            <span class="material-icons-outlined">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Featured Products Gallery -->
    <section class="products-gallery" [class.in-view]="galleryInView">
      <div class="container">
        <div class="section-intro reveal-element">
          <span class="section-tag glass-tag">
            <span class="material-icons-outlined">star</span>
            Productos Destacados
          </span>
          <h2>Equipos de <span class="text-gradient">Alta Calidad</span></h2>
          <p>Descubre nuestra selección de productos industriales premium de marcas líderes mundiales.</p>
        </div>
        
        <div class="gallery-grid">
          @for (product of featuredProducts; track product.name; let i = $index) {
            <div class="gallery-item glass-card" 
                 [style.animation-delay]="i * 100 + 'ms'"
                 [class.reveal-element]="true">
              <div class="gallery-image">
                <img [src]="product.image" [alt]="product.name" loading="lazy">
                <div class="gallery-overlay">
                  <span class="gallery-category">{{ product.category }}</span>
                </div>
              </div>
              <div class="gallery-info">
                <h4>{{ product.name }}</h4>
                <span class="gallery-supplier">{{ product.supplier }}</span>
              </div>
              <a [routerLink]="['/catalogo', product.supplierSlug]" class="gallery-link">
                <span class="material-icons-outlined">arrow_forward</span>
              </a>
            </div>
          }
        </div>
        
        <div class="gallery-cta reveal-element">
          <a routerLink="/catalogo" class="btn-glass">
            <span>Ver Todos los Productos</span>
            <span class="material-icons-outlined">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Features Section - Why Choose Us -->
    <section class="features-section" [class.in-view]="featuresInView">
      <div class="container">
        <div class="features-wrapper">
          <div class="features-content">
            <span class="section-tag">
              <span class="material-icons-outlined">workspace_premium</span>
              ¿Por qué elegirnos?
            </span>
            <h2>Compromiso con la <span class="text-gradient">Excelencia</span></h2>
            <p class="features-intro">
              Más de 15 años proporcionando soluciones industriales de alta calidad a empresas líderes en Chile.
            </p>
            
            <div class="features-list">
              <div class="feature-item">
                <div class="feature-icon">
                  <span class="material-icons-outlined">verified</span>
                </div>
                <div class="feature-text">
                  <h4>Calidad Certificada</h4>
                  <p>Productos con certificaciones internacionales que garantizan los más altos estándares.</p>
                </div>
              </div>
              
              <div class="feature-item">
                <div class="feature-icon">
                  <span class="material-icons-outlined">support_agent</span>
                </div>
                <div class="feature-text">
                  <h4>Soporte Especializado</h4>
                  <p>Equipo técnico capacitado para asesorarte en cada etapa de tu proyecto.</p>
                </div>
              </div>
              
              <div class="feature-item">
                <div class="feature-icon">
                  <span class="material-icons-outlined">local_shipping</span>
                </div>
                <div class="feature-text">
                  <h4>Distribución Nacional</h4>
                  <p>Entrega a todo Chile con tiempos optimizados y seguimiento en tiempo real.</p>
                </div>
              </div>
            </div>
            
            <a routerLink="/somos" class="btn-learn-more">
              Conoce más sobre nosotros
              <span class="material-icons-outlined">arrow_forward</span>
            </a>
          </div>
          
          <div class="features-visual">
            <div class="visual-card-stack">
              <div class="vcard vcard-1">
                <img src="assets/images/logo.png" alt="Metplastech" class="vcard-logo">
              </div>
              <div class="vcard vcard-2">
                <span class="material-icons-outlined">precision_manufacturing</span>
              </div>
              <div class="vcard vcard-3">
                <span class="material-icons-outlined">engineering</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-bg">
        <div class="cta-pattern"></div>
        <div class="cta-orb orb-1"></div>
        <div class="cta-orb orb-2"></div>
      </div>
      <div class="container">
        <div class="cta-content">
          <span class="cta-tag">¿Listo para comenzar?</span>
          <h2>Optimiza tu operación <span class="text-white">con los mejores equipos</span></h2>
          <p>Contáctanos hoy y descubre cómo podemos ayudarte a mejorar la eficiencia de tu negocio.</p>
          <div class="cta-buttons">
            <a routerLink="/contacto" class="btn-cta-primary">
              <span class="material-icons-outlined">chat</span>
              Solicitar Cotización
            </a>
            <a href="tel:+56996154315" class="btn-cta-secondary">
              <span class="material-icons-outlined">phone</span>
              +569 9615 4315
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* ===== HERO SECTION ===== */
    .hero {
      position: relative;
      min-height: 100vh;
      display: flex;
      align-items: center;
      padding: 120px 0 80px;
      overflow: hidden;
    }
    
    .hero-bg {
      position: absolute;
      inset: 0;
      background: 
        linear-gradient(135deg, 
          #021526 0%, 
          #03346E 20%, 
          #0a4d7c 35%,
          #0c5e6f 50%,
          #0d6b5a 65%,
          #0f7b4a 80%,
          #118a3d 100%
        );
      z-index: 0;
    }
    
    .hero-gradient {
      position: absolute;
      inset: 0;
      background: 
        radial-gradient(ellipse 100% 60% at 80% 10%, rgba(6, 182, 212, 0.35) 0%, transparent 50%),
        radial-gradient(ellipse 80% 50% at 20% 90%, rgba(34, 197, 94, 0.3) 0%, transparent 45%),
        radial-gradient(ellipse 60% 40% at 50% 50%, rgba(167, 139, 250, 0.15) 0%, transparent 50%),
        radial-gradient(circle at 70% 70%, rgba(251, 191, 36, 0.1) 0%, transparent 30%);
    }
    
    .hero-mesh {
      position: absolute;
      inset: 0;
      background-image: 
        linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
      background-size: 80px 80px;
      mask-image: radial-gradient(ellipse 80% 60% at 50% 40%, black 20%, transparent 70%);
    }
    
    .hero-particles {
      position: absolute;
      inset: 0;
      overflow: hidden;
      
      .particle {
        position: absolute;
        width: 4px;
        height: 4px;
        background: rgba(52, 211, 153, 0.6);
        border-radius: 50%;
        left: var(--x);
        animation: particleFloat 8s ease-in-out infinite;
        animation-delay: var(--delay);
        
        &:nth-child(odd) {
          background: rgba(96, 165, 250, 0.5);
        }
      }
    }
    
    @keyframes particleFloat {
      0%, 100% {
        transform: translateY(100vh) scale(0);
        opacity: 0;
      }
      10% {
        opacity: 1;
        transform: translateY(80vh) scale(1);
      }
      90% {
        opacity: 1;
      }
      100% {
        transform: translateY(-10vh) scale(0.5);
        opacity: 0;
      }
    }
    
    .hero-glow-orb {
      position: absolute;
      border-radius: 50%;
      filter: blur(100px);
      
      &.orb-1 {
        width: 700px;
        height: 700px;
        top: -25%;
        right: -15%;
        background: 
          radial-gradient(circle, rgba(6, 182, 212, 0.5) 0%, rgba(34, 211, 238, 0.3) 40%, transparent 70%);
        animation: orbFloat 8s ease-in-out infinite;
      }
      
      &.orb-2 {
        width: 500px;
        height: 500px;
        bottom: -15%;
        left: -10%;
        background: 
          radial-gradient(circle, rgba(34, 197, 94, 0.45) 0%, rgba(74, 222, 128, 0.25) 40%, transparent 70%);
        animation: orbFloat 10s ease-in-out infinite reverse;
      }
    }
    
    @keyframes orbFloat {
      0%, 100% { 
        transform: scale(1) translate(0, 0); 
        opacity: 0.7; 
      }
      25% {
        transform: scale(1.1) translate(20px, -20px);
        opacity: 0.9;
      }
      50% { 
        transform: scale(1.2) translate(0, -30px); 
        opacity: 1; 
      }
      75% {
        transform: scale(1.1) translate(-20px, -10px);
        opacity: 0.85;
      }
    }
    
    .hero-content {
      position: relative;
      z-index: 1;
      display: grid;
      grid-template-columns: 1.2fr 1fr;
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
      gap: 12px;
      padding: 10px 20px;
      background: rgba(255, 255, 255, 0.08);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 100px;
      margin-bottom: var(--space-xl);
      
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
    
    .hero h1 {
      margin-bottom: var(--space-xl);
      
      span {
        display: block;
      }
      
      .line-1, .line-3 {
        color: #ffffff;
        text-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
      }
      
      .line-2.text-gradient {
        background: linear-gradient(135deg, 
          #22d3ee 0%, 
          #34d399 25%, 
          #a3e635 50%, 
          #fbbf24 75%, 
          #fb923c 100%
        );
        background-size: 200% auto;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        filter: drop-shadow(0 6px 25px rgba(52, 211, 153, 0.5));
        padding: 0.1em 0;
        animation: gradientShift 6s ease infinite;
      }
    }
    
    @keyframes gradientShift {
      0%, 100% { background-position: 0% center; }
      50% { background-position: 100% center; }
    }
    
    .hero-description {
      font-size: 1.25rem;
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.8;
      max-width: 540px;
      margin-bottom: var(--space-2xl);
      
      @media (max-width: 1024px) {
        margin: 0 auto var(--space-2xl);
      }
    }
    
    .hero-actions {
      display: flex;
      gap: var(--space-lg);
      margin-bottom: var(--space-3xl);
      
      @media (max-width: 1024px) {
        justify-content: center;
      }
      
      @media (max-width: 480px) {
        flex-direction: column;
        align-items: stretch;
      }
    }
    
    .btn-hero-primary {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      padding: 18px 32px;
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      color: #ffffff;
      font-size: 1.1rem;
      font-weight: 700;
      text-decoration: none;
      border-radius: 16px;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 8px 30px rgba(16, 185, 129, 0.4);
      
      .btn-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 8px;
        transition: all 0.3s ease;
      }
      
      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 16px 40px rgba(16, 185, 129, 0.5);
        
        .btn-icon {
          transform: translateX(4px);
        }
      }
    }
    
    .btn-hero-secondary {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 18px 28px;
      background: rgba(255, 255, 255, 0.08);
      backdrop-filter: blur(10px);
      border: 2px solid rgba(255, 255, 255, 0.25);
      color: #ffffff;
      font-size: 1rem;
      font-weight: 600;
      text-decoration: none;
      border-radius: 16px;
      transition: all 0.3s ease;
      
      .material-icons-outlined {
        font-size: 20px;
      }
      
      &:hover {
        background: rgba(255, 255, 255, 0.15);
        border-color: rgba(255, 255, 255, 0.4);
        transform: translateY(-2px);
      }
    }
    
    .hero-stats {
      display: flex;
      align-items: center;
      gap: var(--space-xl);
      
      @media (max-width: 1024px) {
        justify-content: center;
      }
      
      @media (max-width: 600px) {
        flex-direction: column;
        gap: var(--space-lg);
      }
      
      .stat {
        text-align: left;
        
        @media (max-width: 1024px) {
          text-align: center;
        }
        
        .stat-value {
          display: block;
          font-family: var(--font-display);
          font-size: 2.5rem;
          font-weight: 800;
          color: #34d399;
          line-height: 1;
        }
        
        .stat-label {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.6);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
      }
      
      .stat-divider {
        width: 1px;
        height: 40px;
        background: rgba(255, 255, 255, 0.15);
        
        @media (max-width: 600px) {
          width: 60px;
          height: 1px;
        }
      }
    }
    
    /* Hero Visual */
    .hero-visual {
      @media (max-width: 1024px) {
        display: none;
      }
    }
    
    .visual-showcase {
      position: relative;
      width: 420px;
      height: 420px;
      margin: 0 auto;
    }
    
    .showcase-ring {
      position: absolute;
      border-radius: 50%;
      border: 2px solid rgba(255, 255, 255, 0.1);
      
      &.ring-1 {
        inset: 0;
        border-color: rgba(52, 211, 153, 0.2);
        animation: ringRotate 30s linear infinite;
      }
      
      &.ring-2 {
        inset: 40px;
        border-color: rgba(96, 165, 250, 0.15);
        animation: ringRotate 25s linear infinite reverse;
      }
      
      &.ring-3 {
        inset: 80px;
        border-color: rgba(255, 255, 255, 0.1);
        animation: ringRotate 20s linear infinite;
      }
    }
    
    @keyframes ringRotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    
    .showcase-center {
      position: absolute;
      inset: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.9) 100%);
      backdrop-filter: blur(20px);
      border: 3px solid rgba(255, 255, 255, 0.4);
      border-radius: 50%;
      box-shadow: 
        0 25px 60px rgba(0, 0, 0, 0.3),
        inset 0 2px 10px rgba(255, 255, 255, 0.5);
      
      .showcase-logo {
        width: 70%;
        height: auto;
        object-fit: contain;
        filter: drop-shadow(0 4px 15px rgba(0, 0, 0, 0.1));
      }
    }
    
    .floating-badge {
      position: absolute;
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 12px 18px;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(15px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 50px;
      color: #ffffff;
      font-size: 0.85rem;
      font-weight: 600;
      animation: badgeFloat 4s ease-in-out infinite;
      
      .material-icons-outlined {
        font-size: 18px;
        color: #34d399;
      }
      
      &.badge-1 {
        top: 20%;
        left: -20%;
        animation-delay: 0s;
      }
      
      &.badge-2 {
        top: 60%;
        right: -25%;
        animation-delay: 1.3s;
      }
      
      &.badge-3 {
        bottom: 10%;
        left: 0;
        animation-delay: 2.6s;
      }
    }
    
    @keyframes badgeFloat {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    
    .scroll-indicator {
      position: absolute;
      bottom: 30px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      color: rgba(255, 255, 255, 0.5);
      font-size: 0.75rem;
      letter-spacing: 0.1em;
      
      .scroll-line {
        width: 1px;
        height: 40px;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, transparent 100%);
        animation: scrollPulse 2s ease-in-out infinite;
      }
    }
    
    @keyframes scrollPulse {
      0%, 100% { opacity: 0.5; transform: scaleY(1); }
      50% { opacity: 1; transform: scaleY(1.2); }
    }
    
    /* ===== CLIENTS TRUST SECTION ===== */
    .clients-trust-section {
      padding: var(--space-3xl) 0;
      background: 
        linear-gradient(180deg, 
          #f8fafc 0%, 
          #ffffff 30%,
          #f0f9ff 70%,
          #ffffff 100%
        );
      border-top: 4px solid transparent;
      border-image: linear-gradient(90deg, 
        transparent 0%, 
        #06b6d4 20%, 
        #22c55e 50%, 
        #0369a1 80%, 
        transparent 100%
      ) 1;
      position: relative;
    }
    
    .trust-header {
      text-align: center;
      margin-bottom: var(--space-xl);
    }
    
    .trust-label {
      display: inline-block;
      padding: 8px 24px;
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--color-blue);
      letter-spacing: 0.15em;
      background: linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(34, 197, 94, 0.08) 100%);
      border-radius: 100px;
      border: 1px solid rgba(6, 182, 212, 0.2);
    }
    
    .clients-logos {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: var(--space-3xl);
      flex-wrap: wrap;
    }
    
    .client-logo-wrapper {
      padding: var(--space-lg) var(--space-xl);
      background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
      border: 2px solid transparent;
      border-radius: 16px;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      
      &::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 16px;
        padding: 2px;
        background: linear-gradient(135deg, rgba(6, 182, 212, 0.3) 0%, rgba(34, 197, 94, 0.2) 100%);
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        opacity: 0;
        transition: opacity 0.3s ease;
      }
      
      img {
        height: 50px;
        width: auto;
        object-fit: contain;
        filter: grayscale(30%);
        opacity: 0.85;
        transition: all 0.3s ease;
      }
      
      &:hover {
        transform: translateY(-6px);
        box-shadow: 
          0 20px 40px rgba(6, 182, 212, 0.15),
          0 8px 16px rgba(34, 197, 94, 0.1);
        
        &::before {
          opacity: 1;
        }
        
        img {
          filter: grayscale(0%);
          opacity: 1;
        }
      }
    }
    
    /* ===== SUPPLIERS SHOWCASE ===== */
    .suppliers-showcase {
      padding: var(--space-4xl) 0;
      background: 
        linear-gradient(180deg, 
          #ffffff 0%, 
          #f0f9ff 20%,
          #e0f2fe 40%,
          #ccfbf1 60%,
          #ecfdf5 80%,
          #ffffff 100%
        );
      position: relative;
      
      &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: 
          radial-gradient(ellipse 80% 40% at 0% 0%, rgba(6, 182, 212, 0.12) 0%, transparent 50%),
          radial-gradient(ellipse 60% 30% at 100% 100%, rgba(34, 197, 94, 0.1) 0%, transparent 40%),
          radial-gradient(ellipse 50% 25% at 50% 50%, rgba(167, 139, 250, 0.06) 0%, transparent 50%);
        pointer-events: none;
      }
    }
    
    .section-intro {
      text-align: center;
      max-width: 700px;
      margin: 0 auto var(--space-3xl);
    }
    
    .section-tag {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 10px 20px;
      background: linear-gradient(135deg, rgba(5, 150, 105, 0.1) 0%, rgba(59, 130, 246, 0.08) 100%);
      border: 2px solid var(--color-accent);
      border-radius: 100px;
      font-size: 0.85rem;
      font-weight: 700;
      color: var(--color-accent);
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: var(--space-lg);
      
      .material-icons-outlined {
        font-size: 18px;
      }
    }
    
    .section-intro h2 {
      margin-bottom: var(--space-md);
      
      .text-gradient {
        background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-blue) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    }
    
    .section-intro > p {
      font-size: 1.15rem;
      color: var(--color-text-secondary);
      max-width: 100%;
    }
    
    .suppliers-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: var(--space-xl);
      margin-bottom: var(--space-2xl);
    }
    
    .supplier-card-premium {
      position: relative;
      display: flex;
      align-items: center;
      padding: var(--space-xl);
      background: linear-gradient(145deg, #ffffff 0%, #f8fafc 50%, #f0f9ff 100%);
      border: 2px solid transparent;
      border-radius: var(--radius-xl);
      text-decoration: none;
      overflow: hidden;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      animation: fadeInUp 0.6s ease forwards;
      opacity: 0;
      
      &::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: var(--radius-xl);
        padding: 2px;
        background: linear-gradient(135deg, rgba(6, 182, 212, 0.3) 0%, rgba(34, 197, 94, 0.2) 50%, rgba(167, 139, 250, 0.15) 100%);
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        opacity: 0;
        transition: opacity 0.4s ease;
      }
      
      .card-shine {
        position: absolute;
        top: -100%;
        left: -100%;
        width: 200%;
        height: 200%;
        background: linear-gradient(135deg, transparent 30%, rgba(6, 182, 212, 0.2) 45%, rgba(34, 197, 94, 0.15) 55%, transparent 70%);
        transition: all 0.6s ease;
      }
      
      &:hover {
        background: linear-gradient(145deg, #ecfeff 0%, #f0fdfa 50%, #ffffff 100%);
        transform: translateY(-8px);
        box-shadow: 
          0 25px 60px rgba(6, 182, 212, 0.2),
          0 10px 20px rgba(34, 197, 94, 0.1);
        
        &::before {
          opacity: 1;
        }
        
        .card-shine {
          top: -50%;
          left: -50%;
        }
        
        .card-arrow {
          opacity: 1;
          transform: translateX(0);
          background: linear-gradient(135deg, #0891b2 0%, #059669 100%);
        }
        
        .supplier-logo-wrapper {
          transform: scale(1.08);
          border-color: rgba(6, 182, 212, 0.4);
          box-shadow: 0 8px 25px rgba(6, 182, 212, 0.2);
        }
      }
    }
    
    .card-content {
      display: flex;
      align-items: center;
      gap: var(--space-lg);
      flex: 1;
    }
    
    .supplier-logo-wrapper {
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--color-surface-elevated);
      border: 2px solid var(--color-border-light);
      border-radius: var(--radius-lg);
      flex-shrink: 0;
      transition: all 0.3s ease;
      
      img {
        width: 70%;
        height: 70%;
        object-fit: contain;
      }
      
      .material-icons-outlined {
        font-size: 28px;
        color: var(--color-blue);
      }
    }
    
    .supplier-card-premium h4 {
      font-size: 1.2rem;
      font-weight: 700;
      color: var(--color-text-primary);
      margin: 0;
      text-transform: none;
      letter-spacing: 0;
    }
    
    .supplier-origin {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 0.8rem;
      color: var(--color-text-muted);
      
      .material-icons-outlined {
        font-size: 14px;
      }
    }
    
    .card-arrow {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background: var(--color-blue);
      border-radius: var(--radius-md);
      opacity: 0;
      transform: translateX(-10px);
      transition: all 0.3s ease;
      
      .material-icons-outlined {
        color: #ffffff;
        font-size: 20px;
      }
    }
    
    .suppliers-cta {
      text-align: center;
    }
    
    /* ===== FEATURES SECTION ===== */
    .features-section {
      padding: var(--space-4xl) 0;
      background: 
        linear-gradient(180deg, 
          #ffffff 0%, 
          #fafafa 20%,
          #f5f5f5 50%,
          #fafafa 80%,
          #ffffff 100%
        );
      position: relative;
      
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, 
          transparent 0%, 
          #06b6d4 20%, 
          #22c55e 40%, 
          #a855f7 60%, 
          #f59e0b 80%, 
          transparent 100%
        );
      }
    }
    
    .features-wrapper {
      display: grid;
      grid-template-columns: 1.2fr 1fr;
      gap: var(--space-4xl);
      align-items: center;
      
      @media (max-width: 1024px) {
        grid-template-columns: 1fr;
      }
    }
    
    .features-content {
      .section-tag {
        margin-bottom: var(--space-lg);
      }
      
      h2 {
        margin-bottom: var(--space-md);
        
        .text-gradient {
          background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-blue) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      }
    }
    
    .features-intro {
      font-size: 1.15rem;
      color: var(--color-text-secondary);
      margin-bottom: var(--space-2xl);
      max-width: 100%;
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
      padding: var(--space-lg);
      background: var(--color-surface-elevated);
      border: 2px solid transparent;
      border-radius: var(--radius-lg);
      transition: all 0.3s ease;
      
      &:hover {
        background: #ffffff;
        border-color: var(--color-accent);
        box-shadow: 0 8px 30px rgba(5, 150, 105, 0.12);
        
        .feature-icon {
          transform: scale(1.1);
          background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-blue) 100%);
          
          .material-icons-outlined {
            color: #ffffff;
          }
        }
      }
    }
    
    .feature-icon {
      width: 56px;
      height: 56px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, rgba(5, 150, 105, 0.1) 0%, rgba(59, 130, 246, 0.08) 100%);
      border-radius: var(--radius-lg);
      flex-shrink: 0;
      transition: all 0.3s ease;
      
      .material-icons-outlined {
        font-size: 26px;
        color: var(--color-accent);
        transition: all 0.3s ease;
      }
    }
    
    .feature-text {
      h4 {
        font-size: 1.1rem;
        font-weight: 700;
        color: var(--color-text-primary);
        margin-bottom: var(--space-xs);
        text-transform: none;
        letter-spacing: 0;
      }
      
      p {
        font-size: 0.95rem;
        color: var(--color-text-muted);
        margin: 0;
        line-height: 1.6;
        max-width: 100%;
      }
    }
    
    .btn-learn-more {
      display: inline-flex;
      align-items: center;
      gap: var(--space-sm);
      color: var(--color-blue);
      font-weight: 600;
      text-decoration: none;
      padding: var(--space-sm) 0;
      transition: all 0.3s ease;
      
      .material-icons-outlined {
        font-size: 20px;
        transition: transform 0.3s ease;
      }
      
      &:hover {
        color: var(--color-accent);
        
        .material-icons-outlined {
          transform: translateX(6px);
        }
      }
    }
    
    .features-visual {
      @media (max-width: 1024px) {
        display: none;
      }
    }
    
    .visual-card-stack {
      position: relative;
      height: 450px;
    }
    
    .vcard {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: var(--space-md);
      border-radius: var(--radius-xl);
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
      
      &.vcard-1 {
        top: 15%;
        right: 0;
        width: 300px;
        height: 300px;
        background: linear-gradient(145deg, #ffffff 0%, #f8fafc 50%, #f0f9ff 100%);
        border: 3px solid rgba(6, 182, 212, 0.3);
        z-index: 3;
        
        .vcard-logo {
          width: 70%;
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 4px 15px rgba(0, 0, 0, 0.1));
        }
      }
      
      &.vcard-2 {
        top: 5%;
        right: 40%;
        width: 120px;
        height: 120px;
        background: linear-gradient(145deg, #10b981 0%, #059669 100%);
        z-index: 2;
        animation: cardFloat 5s ease-in-out infinite;
        
        .material-icons-outlined {
          font-size: 48px;
          color: #ffffff;
        }
      }
      
      &.vcard-3 {
        bottom: 10%;
        right: 50%;
        width: 100px;
        height: 100px;
        background: linear-gradient(145deg, #3b82f6 0%, #1d4ed8 100%);
        z-index: 1;
        animation: cardFloat 6s ease-in-out infinite reverse;
        
        .material-icons-outlined {
          font-size: 40px;
          color: #ffffff;
        }
      }
    }
    
    @keyframes cardFloat {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-15px); }
    }
    
    /* ===== CTA SECTION ===== */
    .cta-section {
      position: relative;
      padding: var(--space-4xl) 0;
      overflow: hidden;
    }
    
    .cta-bg {
      position: absolute;
      inset: 0;
      background: 
        linear-gradient(135deg, 
          #021526 0%, 
          #03346E 25%, 
          #0c5e6f 50%,
          #0d6b5a 75%,
          #064e3b 100%
        );
    }
    
    .cta-pattern {
      position: absolute;
      inset: 0;
      background: 
        radial-gradient(circle at 10% 20%, rgba(6, 182, 212, 0.25) 0%, transparent 35%),
        radial-gradient(circle at 90% 80%, rgba(167, 139, 250, 0.2) 0%, transparent 30%),
        radial-gradient(circle at 50% 50%, rgba(251, 191, 36, 0.1) 0%, transparent 40%),
        radial-gradient(circle at 80% 20%, rgba(34, 197, 94, 0.15) 0%, transparent 25%);
    }
    
    .cta-orb {
      position: absolute;
      border-radius: 50%;
      filter: blur(80px);
      
      &.orb-1 {
        width: 500px;
        height: 500px;
        top: -150px;
        right: 5%;
        background: 
          radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, rgba(34, 211, 238, 0.2) 50%, transparent 70%);
        animation: ctaOrb 8s ease-in-out infinite;
      }
      
      &.orb-2 {
        width: 400px;
        height: 400px;
        bottom: -100px;
        left: 0;
        background: 
          radial-gradient(circle, rgba(34, 197, 94, 0.35) 0%, rgba(74, 222, 128, 0.15) 50%, transparent 70%);
        animation: ctaOrb 10s ease-in-out infinite reverse;
      }
    }
    
    @keyframes ctaOrb {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.15); }
    }
    
    .cta-content {
      position: relative;
      z-index: 1;
      text-align: center;
      max-width: 700px;
      margin: 0 auto;
    }
    
    .cta-tag {
      display: inline-block;
      padding: 8px 20px;
      background: rgba(52, 211, 153, 0.2);
      border: 1px solid rgba(52, 211, 153, 0.4);
      border-radius: 100px;
      font-size: 0.85rem;
      font-weight: 700;
      color: #34d399;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: var(--space-lg);
    }
    
    .cta-section h2 {
      color: #34d399;
      margin-bottom: var(--space-md);
      
      .text-white {
        color: #ffffff;
      }
    }
    
    .cta-section p {
      font-size: 1.15rem;
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: var(--space-2xl);
      max-width: 100%;
    }
    
    .cta-buttons {
      display: flex;
      justify-content: center;
      gap: var(--space-lg);
      flex-wrap: wrap;
    }
    
    .btn-cta-primary {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 18px 32px;
      background: #ffffff;
      color: #0a3358;
      font-size: 1.05rem;
      font-weight: 700;
      text-decoration: none;
      border-radius: 14px;
      transition: all 0.3s ease;
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
      
      .material-icons-outlined {
        font-size: 22px;
      }
      
      &:hover {
        background: #34d399;
        color: #ffffff;
        transform: translateY(-4px);
        box-shadow: 0 16px 40px rgba(52, 211, 153, 0.4);
      }
    }
    
    .btn-cta-secondary {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 18px 28px;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border: 2px solid rgba(255, 255, 255, 0.3);
      color: #ffffff;
      font-size: 1rem;
      font-weight: 600;
      text-decoration: none;
      border-radius: 14px;
      transition: all 0.3s ease;
      
      .material-icons-outlined {
        font-size: 20px;
      }
      
      &:hover {
        background: rgba(255, 255, 255, 0.2);
        border-color: rgba(255, 255, 255, 0.5);
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
    .delay-4 { animation-delay: 0.4s; }
    
    .animate-fade-in {
      animation: fadeIn 1s ease forwards;
      opacity: 0;
    }
    
    @keyframes fadeIn {
      to { opacity: 1; }
    }
    
    /* ===== GLASSMORPHISM COMPONENTS ===== */
    .glass-tag {
      background: rgba(255, 255, 255, 0.15) !important;
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.25) !important;
      box-shadow: 
        0 8px 32px rgba(0, 0, 0, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
    }
    
    .glass-card {
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.3);
      box-shadow: 
        0 8px 32px rgba(0, 0, 0, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.5);
    }
    
    .btn-glass {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      padding: 18px 36px;
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(20px);
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-radius: 16px;
      color: var(--color-text-primary);
      font-size: 1.05rem;
      font-weight: 700;
      text-decoration: none;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 
        0 8px 32px rgba(0, 0, 0, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
      
      .material-icons-outlined {
        font-size: 22px;
        transition: transform 0.3s ease;
      }
      
      &:hover {
        background: linear-gradient(135deg, rgba(6, 182, 212, 0.2) 0%, rgba(34, 197, 94, 0.15) 100%);
        border-color: rgba(6, 182, 212, 0.5);
        transform: translateY(-4px);
        box-shadow: 
          0 20px 50px rgba(6, 182, 212, 0.2),
          inset 0 1px 0 rgba(255, 255, 255, 0.4);
        
        .material-icons-outlined {
          transform: translateX(6px);
        }
      }
    }
    
    /* ===== PRODUCTS GALLERY ===== */
    .products-gallery {
      padding: var(--space-4xl) 0;
      background: 
        linear-gradient(180deg, 
          #ffffff 0%,
          #fafafa 20%,
          #f5f5f5 50%,
          #fafafa 80%,
          #ffffff 100%
        );
      position: relative;
      overflow: hidden;
      
      &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: 
          radial-gradient(ellipse 80% 50% at 0% 0%, rgba(6, 182, 212, 0.08) 0%, transparent 50%),
          radial-gradient(ellipse 60% 40% at 100% 100%, rgba(167, 139, 250, 0.06) 0%, transparent 40%);
        pointer-events: none;
      }
      
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, 
          transparent 0%, 
          #a855f7 20%, 
          #06b6d4 40%,
          #22c55e 60%,
          #f59e0b 80%,
          transparent 100%
        );
      }
    }
    
    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--space-xl);
      margin-bottom: var(--space-2xl);
      
      @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
      }
      
      @media (max-width: 640px) {
        grid-template-columns: 1fr;
      }
    }
    
    .gallery-item {
      position: relative;
      border-radius: 24px;
      overflow: hidden;
      transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      opacity: 0;
      transform: translateY(40px);
      
      .in-view & {
        animation: revealUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
      }
      
      &:hover {
        transform: translateY(-12px) scale(1.02);
        box-shadow: 
          0 30px 60px rgba(6, 182, 212, 0.25),
          0 15px 30px rgba(167, 139, 250, 0.15);
        
        .gallery-image img {
          transform: scale(1.1);
        }
        
        .gallery-overlay {
          opacity: 1;
        }
        
        .gallery-link {
          opacity: 1;
          transform: translateX(0);
          background: linear-gradient(135deg, #06b6d4 0%, #22c55e 100%);
        }
        
        .gallery-info h4 {
          color: #0891b2;
        }
      }
    }
    
    @keyframes revealUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .gallery-image {
      position: relative;
      height: 220px;
      overflow: hidden;
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
      }
    }
    
    .gallery-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, 
        rgba(6, 182, 212, 0.1) 0%, 
        rgba(167, 139, 250, 0.2) 100%
      );
      display: flex;
      align-items: flex-start;
      justify-content: flex-end;
      padding: var(--space-md);
      opacity: 0;
      transition: opacity 0.4s ease;
      
      .gallery-category {
        padding: 6px 14px;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        border-radius: 100px;
        font-size: 0.75rem;
        font-weight: 700;
        color: #0891b2;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
    }
    
    .gallery-info {
      padding: var(--space-lg);
      
      h4 {
        font-size: 1.15rem;
        font-weight: 700;
        color: var(--color-text-primary);
        margin-bottom: 4px;
        transition: color 0.3s ease;
        text-transform: none;
        letter-spacing: 0;
      }
      
      .gallery-supplier {
        font-size: 0.85rem;
        color: var(--color-text-muted);
        font-weight: 500;
      }
    }
    
    .gallery-link {
      position: absolute;
      bottom: var(--space-lg);
      right: var(--space-lg);
      width: 44px;
      height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(6, 182, 212, 0.1);
      border-radius: 12px;
      color: #0891b2;
      opacity: 0;
      transform: translateX(10px);
      transition: all 0.4s ease;
      
      .material-icons-outlined {
        font-size: 22px;
        color: inherit;
      }
      
      &:hover {
        color: #ffffff;
      }
    }
    
    .gallery-cta {
      text-align: center;
    }
    
    /* ===== REVEAL ANIMATIONS ===== */
    .reveal-element {
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
      
      .in-view & {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    /* ===== ENHANCED HOVER EFFECTS ===== */
    .supplier-card-premium {
      &:hover {
        .card-content {
          transform: translateX(5px);
        }
      }
      
      .card-content {
        transition: transform 0.4s ease;
      }
    }
    
    .feature-item {
      position: relative;
      overflow: hidden;
      
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.1), transparent);
        transition: left 0.6s ease;
      }
      
      &:hover::before {
        left: 100%;
      }
    }
  `]
})
export class HomeComponent implements OnInit, AfterViewInit {
  private api = inject(ApiService);
  categories: Category[] = [];
  
  // Parallax
  scrollY = 0;
  
  // Section visibility for reveal animations
  suppliersInView = false;
  galleryInView = false;
  featuresInView = false;
  
  clients = [
    { name: 'Agrosuper', logo: 'assets/images/clients/agrosuper.png' },
    { name: 'Sopraval', logo: 'assets/images/clients/sopraval.png' },
    { name: 'Comafri', logo: 'assets/images/clients/Logo_Comafri-1.png' }
  ];
  
  suppliers: any[] = [];
  
  // Featured Products Gallery
  featuredProducts = [
    { 
      name: 'Trimmer Neumático IBEX', 
      image: 'assets/images/products/IBEX-Pneumatic-Trimmers-with-EBC-35-128-Heads.jpg',
      category: 'Equipos de Corte',
      supplier: 'IBEX',
      supplierSlug: 'ibex'
    },
    { 
      name: 'Máquina Desolladora ST600', 
      image: 'assets/images/products/automatic-fish-skinner-st600v-long-model.png',
      category: 'Procesamiento',
      supplier: 'Steen',
      supplierSlug: 'steen'
    },
    { 
      name: 'Afilador Profesional', 
      image: 'assets/images/products/B SHARP grinding sharpener.jpg',
      category: 'Afilado',
      supplier: 'Bobet',
      supplierSlug: 'bobet'
    },
    { 
      name: 'Guante Euroflex Standard', 
      image: 'assets/images/products/Euroflex Standard.jpg',
      category: 'Seguridad',
      supplier: 'Ziegler',
      supplierSlug: 'ziegler'
    },
    { 
      name: 'Cuchillo Profesional', 
      image: 'assets/images/products/ganivet-carnisser-caribou.jpg',
      category: 'Cuchillería',
      supplier: 'Fabretall',
      supplierSlug: 'fabretall'
    },
    { 
      name: 'Estación de Higiene', 
      image: 'assets/images/products/0000017_hygiene-station-hc-xl.png',
      category: 'Higiene',
      supplier: 'Fabretall',
      supplierSlug: 'fabretall'
    }
  ];
  
  carouselItems: CarouselItem[] = [
    {
      id: 1,
      icon: 'precision_manufacturing',
      title: 'carousel.item1.title',
      description: 'carousel.item1.description'
    },
    {
      id: 2,
      icon: 'content_cut',
      title: 'carousel.item2.title',
      description: 'carousel.item2.description'
    },
    {
      id: 3,
      icon: 'security',
      title: 'carousel.item3.title',
      description: 'carousel.item3.description'
    },
    {
      id: 4,
      icon: 'auto_fix_high',
      title: 'carousel.item4.title',
      description: 'carousel.item4.description'
    },
    {
      id: 5,
      icon: 'engineering',
      title: 'carousel.item5.title',
      description: 'carousel.item5.description'
    },
    {
      id: 6,
      icon: 'handyman',
      title: 'carousel.item6.title',
      description: 'carousel.item6.description'
    }
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.scrollY = window.scrollY;
    this.checkSectionsInView();
  }

  ngOnInit() {
    this.api.getCategories().subscribe(cats => {
      this.categories = cats;
    });
    
    this.api.getSuppliers().subscribe(suppliers => {
      this.suppliers = suppliers;
    });
  }
  
  ngAfterViewInit() {
    setTimeout(() => this.checkSectionsInView(), 100);
  }
  
  checkSectionsInView() {
    const windowHeight = window.innerHeight;
    const triggerPoint = windowHeight * 0.8;
    
    const suppliersSection = document.querySelector('.suppliers-showcase');
    const gallerySection = document.querySelector('.products-gallery');
    const featuresSection = document.querySelector('.features-section');
    
    if (suppliersSection) {
      const rect = suppliersSection.getBoundingClientRect();
      if (rect.top < triggerPoint) this.suppliersInView = true;
    }
    
    if (gallerySection) {
      const rect = gallerySection.getBoundingClientRect();
      if (rect.top < triggerPoint) this.galleryInView = true;
    }
    
    if (featuresSection) {
      const rect = featuresSection.getBoundingClientRect();
      if (rect.top < triggerPoint) this.featuresInView = true;
    }
  }
}


