import { Component, OnInit, inject, AfterViewInit, HostListener } from '@angular/core';
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
    <!-- Hero Section - White Background with Angular Decorations -->
    <section class="hero">
      <div class="hero-deco-tl"></div>
      <div class="hero-deco-br"></div>
      
      <div class="container hero-content">
        <div class="hero-text">
          <div class="hero-badge animate-in">
            <span class="badge-dot"></span>
            <span>{{ 'home.badge' | translate }}</span>
          </div>
          
          <h1 class="animate-in d1">
            <span class="line-1">{{ 'home.title' | translate }}</span>
            <span class="line-2">{{ 'home.titleHighlight' | translate }}</span>
            <span class="line-3">{{ 'home.titleEnd' | translate }}</span>
          </h1>
          
          <p class="hero-desc animate-in d2">
            {{ 'home.description' | translate }}
          </p>
          
          <div class="hero-actions animate-in d3">
            <a routerLink="/catalogo" class="btn-primary-green">
              <span>{{ 'home.viewCatalog' | translate }}</span>
              <span class="material-icons-outlined">arrow_forward</span>
            </a>
            <a routerLink="/contacto" class="btn-outline-dark">
              <span class="material-icons-outlined">chat_bubble_outline</span>
              <span>{{ 'home.contactUs' | translate }}</span>
            </a>
          </div>
        </div>
        
        <div class="hero-visual animate-in d2">
          <div class="showcase">
            <div class="ring ring-1"></div>
            <div class="ring ring-2"></div>
            <div class="ring ring-3"></div>
            <div class="ring-center">
              <img src="assets/images/logo.png" alt="Metplastech" class="showcase-logo">
            </div>
            <div class="float-badge fb-1">
              <span class="material-icons-outlined">verified</span>
              <span>Certificado</span>
            </div>
            <div class="float-badge fb-2">
              <span class="material-icons-outlined">local_shipping</span>
              <span>Envío Nacional</span>
            </div>
            <div class="float-badge fb-3">
              <span class="material-icons-outlined">support_agent</span>
              <span>Soporte 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Decorative Bar -->
    <div class="deco-bar"></div>
    
    <!-- Stats Section -->
    <section class="stats-section">
      <div class="container">
        <div class="stats-frame">
          <div class="stat-item">
            <span class="stat-num">7+</span>
            <span class="stat-txt">MARCAS ALIADAS</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-num">100+</span>
            <span class="stat-txt">PRODUCTOS</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-num">15+</span>
            <span class="stat-txt">AÑOS DE EXPERIENCIA</span>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Logo Divider -->
    <div class="logo-divider">
      <img src="assets/images/logo.png" alt="Metplas Technologies">
    </div>
    
    <!-- Decorative Bar -->
    <div class="deco-bar"></div>
    
    <!-- Clients & Solutions Section -->
    <section class="clients-solutions">
      <div class="container cs-grid">
        <div class="cs-left">
          <div class="cs-header-box">
            <span class="cs-small">EMPRESAS QUE</span>
            <strong>CONFÍAN EN NOSOTROS</strong>
          </div>
          <div class="trust-circle">
            <div class="trust-bg">
              <span class="material-icons-outlined trust-icon">handshake</span>
              <span class="material-icons-outlined check-icon">check_circle</span>
            </div>
            @for (client of clients; track client.name; let i = $index) {
              <div class="orbit-item" [class]="'pos-' + i">
                <img [src]="client.logo" [alt]="client.name">
              </div>
            }
          </div>
        </div>
        
        <div class="cs-right">
          <div class="cs-header-box right">
            <span class="cs-small">PRODUCTOS DESTACADOS</span>
            <strong>NUESTRAS SOLUCIONES</strong>
          </div>
          <app-carousel [items]="carouselItems" [itemsVisible]="1"></app-carousel>
        </div>
      </div>
    </section>
    
    <!-- Suppliers Section -->
    <section class="suppliers-section">
      <div class="container sup-layout">
        <div class="sup-left">
          <div class="globe-wrap">
            <div class="globe-circle">
              <span class="material-icons-outlined">public</span>
            </div>
          </div>
          <h2 class="sup-title">MARCAS LÍDERES<br><strong>MUNDIALES</strong></h2>
          <p class="sup-desc">Trabajamos con los fabricantes más reconocidos de la industria para garantizar productos de la más alta calidad.</p>
        </div>
        
        <div class="sup-right">
          <div class="sup-badge">
            <span class="badge-dot"></span>
            NUESTROS PROVEEDORES
          </div>
          <div class="sup-carousel">
            <button class="nav-arrow nav-prev sup-nav" (click)="prevSupplier()">
              <span class="material-icons-outlined">chevron_left</span>
            </button>
            <div class="sup-grid">
              @for (supplier of visibleSuppliers; track supplier.slug) {
                <a [routerLink]="['/catalogo', supplier.slug]" class="sup-card">
                  <div class="sup-logo">
                    @if (supplier.logo) {
                      <img [src]="supplier.logo" [alt]="supplier.name">
                    } @else {
                      <span class="material-icons-outlined">business</span>
                    }
                  </div>
                  @if (supplier.country) {
                    <span class="sup-country">
                      <span class="material-icons-outlined">public</span>
                      {{ supplier.country }}
                    </span>
                  }
                </a>
              }
            </div>
            <button class="nav-arrow nav-next sup-nav" (click)="nextSupplier()">
              <span class="material-icons-outlined">chevron_right</span>
            </button>
          </div>
          <div class="sup-footer">
            <div class="pagination-dots">
              @for (dot of supplierPages; track $index) {
                <span class="dot" [class.active]="$index === supplierPage" (click)="goToSupplierPage($index)"></span>
              }
            </div>
            <a routerLink="/catalogo" class="btn-outline-dark">
              VER CATÁLOGO COMPLETO
              <span class="material-icons-outlined">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Decorative Bar -->
    <div class="deco-bar"></div>
    
    <!-- Featured Products - Dark Navy Section -->
    <section class="featured-section">
      <div class="featured-logo">
        <img src="assets/images/logo.png" alt="Metplas Technologies">
      </div>
      
      <div class="container">
        <div class="feat-badge">
          <span class="material-icons-outlined">star</span>
          PRODUCTOS DESTACADOS
        </div>
        <h2 class="feat-title">EQUIPOS DE<br><strong>ALTA CALIDAD</strong></h2>
        <div class="feat-bar"></div>
        <div class="feat-desc-pill">
          <p class="feat-desc">Descubre nuestra selección de productos industriales premium de marcas líderes mundiales.</p>
        </div>
        
        <div class="products-carousel">
          <button class="nav-arrow nav-prev" (click)="prevFeatured()">
            <span class="material-icons-outlined">chevron_left</span>
          </button>
          <div class="products-row">
            @for (product of visibleProducts; track product.name; let i = $index) {
              <a [routerLink]="['/catalogo', product.supplierSlug]" class="prod-card" [class.center]="i === 1">
                <div class="prod-img">
                  <img [src]="product.image" [alt]="product.name" loading="lazy">
                </div>
                <div class="prod-info">
                  <h4>{{ product.name }}</h4>
                  <span class="prod-brand">{{ product.supplier }}</span>
                </div>
              </a>
            }
          </div>
          <button class="nav-arrow nav-next" (click)="nextFeatured()">
            <span class="material-icons-outlined">chevron_right</span>
          </button>
        </div>
        
        <div class="pagination-dots">
          @for (dot of featuredPages; track $index) {
            <span class="dot" [class.active]="$index === featuredPage" (click)="goToFeaturedPage($index)"></span>
          }
        </div>
        
        <div class="feat-cta">
          <a routerLink="/catalogo" class="btn-outline-white">
            VER TODOS LOS PRODUCTOS
            <span class="material-icons-outlined">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
    
    <!-- Decorative Bar -->
    <div class="deco-bar"></div>
    
    <!-- Why Choose Us -->
    <section class="why-section">
      <div class="container why-layout">
        <div class="why-content">
          <div class="why-badge">
            <span class="material-icons-outlined">lightbulb</span>
            ¿Por qué Elegirnos?
          </div>
          <h2><em>Compromiso con la</em><br><strong>EXCELENCIA</strong></h2>
          <p class="why-intro">MÁS DE 15 AÑOS PROPORCIONANDO SOLUCIONES DE ALTA CALIDAD A EMPRESAS LÍDERES EN CHILE.</p>
          
          <div class="why-features">
            <div class="wf-item">
              <div class="wf-icon green">
                <span class="material-icons-outlined">verified</span>
              </div>
              <div>
                <h4>Calidad Certificada</h4>
                <p>Productos con certificaciones internacionales que garantizan los más altos estándares.</p>
              </div>
            </div>
            <div class="wf-item">
              <div class="wf-icon blue">
                <span class="material-icons-outlined">support_agent</span>
              </div>
              <div>
                <h4>Soporte Especializado</h4>
                <p>Equipo técnico capacitado para asesorarte en cada etapa de tu proyecto.</p>
              </div>
            </div>
            <div class="wf-item">
              <div class="wf-icon green">
                <span class="material-icons-outlined">local_shipping</span>
              </div>
              <div>
                <h4>Distribución Nacional</h4>
                <p>Entrega a todo Chile con tiempos optimizados y seguimiento en tiempo real.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="why-visual">
          <div class="diamond-frame">
            <img src="assets/images/logo.png" alt="Metplastech">
          </div>
          <a routerLink="/somos" class="btn-outline-dark why-link">
            CONOCE MÁS SOBRE NOSOTROS
            <span class="material-icons-outlined">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
    
    <!-- Pre-CTA: Logo + Ready Badge -->
    <section class="pre-cta">
      <div class="container pre-cta-inner">
        <img src="assets/images/logo.png" alt="Metplas Technologies" class="pre-cta-logo">
        <div class="pre-cta-badge">
          <span>¿LISTO PARA COMENZAR?</span>
        </div>
      </div>
    </section>
    
    <!-- Decorative Bar Angular -->
    <div class="deco-bar-angle"></div>
    
    <!-- CTA Section - Dark Navy -->
    <section class="cta-section">
      <div class="container cta-inner">
        <h2>OPTIMIZA TU OPERACIÓN<br><span>CON LOS MEJORES EQUIPOS</span></h2>
        <p>Contáctanos hoy y descubre cómo podemos ayudarte a mejorar la eficiencia de tu negocio</p>
        <div class="cta-buttons">
          <a routerLink="/contacto" class="btn-cta-green">
            <span class="material-icons-outlined">chat</span>
            Solicitar Cotización
          </a>
          <a href="tel:+56996154315" class="btn-cta-white">
            <span class="material-icons-outlined">phone</span>
            +569 9615 4315
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* ===== DECORATIVE BAR ===== */
    :host { display: block; }
    
    .deco-bar {
      height: 14px;
      background: linear-gradient(to bottom,
        #229443 0%, #229443 22%,
        #104F8E 22%, #104F8E 78%,
        #229443 78%, #229443 100%
      );
      position: relative;
      z-index: 5;
      box-shadow: 0 2px 8px rgba(16, 79, 142, 0.2);
    }
    
    .deco-bar-angle {
      height: 50px;
      position: relative;
      z-index: 5;
      overflow: hidden;
      
      &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(to bottom,
          #229443 0%, #229443 22%,
          #104F8E 22%, #104F8E 78%,
          #229443 78%, #229443 100%
        );
        clip-path: polygon(4% 0%, 96% 0%, 100% 100%, 0% 100%);
      }
    }

    /* ===== HERO ===== */
    .hero {
      position: relative;
      min-height: 85vh;
      display: flex;
      align-items: center;
      padding: 100px 0 60px;
      background: #ffffff;
      overflow: hidden;
    }
    
    .hero-deco-tl {
      position: absolute;
      top: 0;
      left: 0;
      width: 200px;
      height: 100%;
      background: linear-gradient(135deg, #229443 0%, #229443 8%, #104F8E 8%, #104F8E 16%, transparent 16%);
      pointer-events: none;
      
      @media (max-width: 768px) { display: none; }
    }
    
    .hero-deco-br {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 200px;
      height: 100%;
      background: linear-gradient(-45deg, #229443 0%, #229443 8%, #104F8E 8%, #104F8E 16%, transparent 16%);
      pointer-events: none;
      
      @media (max-width: 768px) { display: none; }
    }
    
    .hero-content {
      position: relative;
      z-index: 1;
      display: grid;
      grid-template-columns: 1.2fr 1fr;
      gap: 4rem;
      align-items: center;
      
      @media (max-width: 1024px) {
        grid-template-columns: 1fr;
        text-align: center;
      }
    }
    
    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 10px 20px;
      background: #f0f9ff;
      border: 2px solid #104F8E;
      border-radius: 100px;
      margin-bottom: 1.5rem;
      
      .badge-dot {
        width: 8px;
        height: 8px;
        background: #229443;
        border-radius: 50%;
        animation: pulse 2s infinite;
      }
      
      span:last-child {
        font-size: 0.85rem;
        font-weight: 700;
        color: #104F8E;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }
    }
    
    @keyframes pulse {
      0%, 100% { box-shadow: 0 0 0 0 rgba(34, 148, 67, 0.5); }
      50% { box-shadow: 0 0 0 6px rgba(34, 148, 67, 0); }
    }
    
    .hero h1 {
      margin-bottom: 1.5rem;
      
      span { display: block; }
      
      .line-1, .line-3 {
        color: #0a2540;
        font-size: clamp(2.5rem, 6vw, 4.2rem);
        font-weight: 900;
        text-transform: uppercase;
        letter-spacing: -0.02em;
      }
      
      .line-2 {
        color: #104F8E;
        font-size: clamp(2.5rem, 6vw, 4.2rem);
        font-weight: 900;
        text-transform: uppercase;
        letter-spacing: -0.02em;
      }
    }
    
    .hero-desc {
      font-size: 1.15rem;
      color: #4a5568;
      font-style: italic;
      line-height: 1.7;
      max-width: 520px;
      margin-bottom: 2rem;
      
      @media (max-width: 1024px) { margin: 0 auto 2rem; }
    }
    
    .hero-actions {
      display: flex;
      gap: 1rem;
      
      @media (max-width: 1024px) { justify-content: center; }
      @media (max-width: 480px) { flex-direction: column; }
    }
    
    .btn-primary-green {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 16px 28px;
      background: linear-gradient(135deg, #104F8E 0%, #1a6bc4 100%);
      color: #fff;
      font-size: 1rem;
      font-weight: 700;
      text-decoration: none;
      border-radius: 12px;
      text-transform: uppercase;
      letter-spacing: 0.03em;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(16, 79, 142, 0.3);
      
      .material-icons-outlined { font-size: 20px; }
      
      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 25px rgba(16, 79, 142, 0.4);
        color: #fff;
      }
    }
    
    .btn-outline-dark {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 16px 28px;
      background: transparent;
      border: 2px solid #0a2540;
      color: #0a2540;
      font-size: 1rem;
      font-weight: 700;
      text-decoration: none;
      border-radius: 12px;
      text-transform: uppercase;
      letter-spacing: 0.03em;
      transition: all 0.3s ease;
      
      .material-icons-outlined { font-size: 20px; }
      
      &:hover {
        background: #0a2540;
        color: #fff;
        transform: translateY(-2px);
      }
    }
    
    /* Hero Visual - Logo Circles */
    .hero-visual {
      @media (max-width: 1024px) { display: none; }
    }
    
    .showcase {
      position: relative;
      width: 380px;
      height: 380px;
      margin: 0 auto;
    }
    
    .ring {
      position: absolute;
      border-radius: 50%;
      border: 2px solid;
      
      &.ring-1 {
        inset: 0;
        border-color: rgba(16, 79, 142, 0.15);
        background: rgba(16, 79, 142, 0.03);
      }
      &.ring-2 {
        inset: 35px;
        border-color: rgba(16, 79, 142, 0.12);
        background: rgba(16, 79, 142, 0.05);
      }
      &.ring-3 {
        inset: 70px;
        border-color: rgba(16, 79, 142, 0.1);
        background: rgba(16, 79, 142, 0.07);
      }
    }
    
    .ring-center {
      position: absolute;
      inset: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #fff;
      border-radius: 50%;
      border: 3px solid rgba(16, 79, 142, 0.2);
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
      
      .showcase-logo {
        width: 75%;
        height: auto;
        object-fit: contain;
      }
    }
    
    .float-badge {
      position: absolute;
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 8px 14px;
      background: #fff;
      border: 1px solid #e2e8f0;
      border-radius: 50px;
      font-size: 0.75rem;
      font-weight: 600;
      color: #0a2540;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
      animation: floatBadge 4s ease-in-out infinite;
      
      .material-icons-outlined {
        font-size: 16px;
        color: #229443;
      }
      
      &.fb-1 { top: 10%; left: -15%; animation-delay: 0s; }
      &.fb-2 { top: 55%; right: -20%; animation-delay: 1.3s; }
      &.fb-3 { bottom: 5%; left: -5%; animation-delay: 2.6s; }
    }
    
    @keyframes floatBadge {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-8px); }
    }

    /* ===== STATS ===== */
    .stats-section {
      padding: 3rem 0;
      background: #fff;
    }
    
    .stats-frame {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 3rem;
      padding: 2rem 0;
      max-width: 800px;
      margin: 0 auto;
      
      @media (max-width: 768px) {
        flex-direction: column;
        gap: 1.5rem;
        padding: 1.5rem;
      }
    }
    
    .stat-divider {
      width: 1px;
      height: 50px;
      background: #cbd5e0;
      
      @media (max-width: 768px) {
        width: 60px;
        height: 1px;
        background: #cbd5e0;
      }
    }
    
    .stat-item {
      text-align: center;
    }
    
    .stat-num {
      display: block;
      font-family: var(--font-display);
      font-size: 3.5rem;
      font-weight: 900;
      color: #229443;
      line-height: 1;
      font-style: italic;
    }
    
    .stat-txt {
      font-size: 0.85rem;
      font-weight: 700;
      color: #4a5568;
      letter-spacing: 0.12em;
    }

    /* ===== LOGO DIVIDER ===== */
    .logo-divider {
      padding: 3rem 0;
      text-align: center;
      background: #fff;
      
      img {
        height: 80px;
        width: auto;
      }
    }

    /* ===== CLIENTS & SOLUTIONS ===== */
    .clients-solutions {
      padding: 4rem 0;
      background: #fff;
    }
    
    .cs-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      align-items: start;
      
      @media (max-width: 1024px) {
        grid-template-columns: 1fr;
      }
    }
    
    .cs-header-box {
      display: inline-block;
      padding: 14px 32px;
      background: linear-gradient(135deg, #0a2540 0%, #104F8E 100%);
      border: none;
      border-radius: 12px;
      margin-bottom: 2rem;
      text-align: center;
      box-shadow: 0 4px 15px rgba(10, 37, 64, 0.2);
      
      .cs-small {
        display: block;
        font-size: 0.8rem;
        font-weight: 600;
        color: #81d4a2;
        letter-spacing: 0.08em;
      }
      
      strong {
        font-size: 1.1rem;
        color: #fff;
        letter-spacing: 0.05em;
      }
      
      &.right {
        background: linear-gradient(135deg, #0a2540 0%, #0d3562 100%);
        
        .cs-small { color: #7dd3a0; }
        strong { color: #fff; }
      }
    }
    
    /* Trust Circle */
    .trust-circle {
      position: relative;
      width: 300px;
      height: 300px;
      margin: 0 auto;
    }
    
    .trust-bg {
      position: absolute;
      inset: 20px;
      background: radial-gradient(circle, #a5d6a7 0%, #66bb6a 40%, #43a047 70%, #2e7d32 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 8px 30px rgba(34, 148, 67, 0.25);
      
      .trust-icon {
        font-size: 80px;
        color: #fff;
        opacity: 0.4;
      }
      
      .check-icon {
        position: absolute;
        font-size: 48px;
        color: #fff;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
      }
    }
    
    .orbit-item {
      position: absolute;
      width: 60px;
      height: 60px;
      background: #fff;
      border-radius: 50%;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.12);
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid #e2e8f0;
      z-index: 2;
      animation: orbitFloat 4s ease-in-out infinite;
      
      img {
        width: 70%;
        height: 70%;
        object-fit: contain;
      }
      
      &.pos-0 { top: -5%; right: 10%; animation-delay: 0s; }
      &.pos-1 { left: -8%; top: 50%; animation-delay: 1.3s; }
      &.pos-2 { bottom: 0; right: 2%; animation-delay: 2.6s; }
    }
    
    @keyframes orbitFloat {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-6px); }
    }
    
    .cs-right {
      min-height: 300px;
      display: flex;
      flex-direction: column;
      
      app-carousel {
        flex: 1;
      }
    }

    /* ===== SUPPLIERS ===== */
    .suppliers-section {
      padding: 4rem 0;
      background: linear-gradient(180deg, #f8fafc 0%, #fff 100%);
    }
    
    .sup-layout {
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      gap: 3rem;
      align-items: start;
      
      @media (max-width: 1024px) {
        grid-template-columns: 1fr;
      }
    }
    
    .globe-wrap {
      display: flex;
      justify-content: center;
      margin-bottom: 2rem;
    }
    
    .globe-circle {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      background: radial-gradient(circle at 40% 40%, #a5d6a7 0%, #66bb6a 30%, #43a047 60%, #2e7d32 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      border: 5px solid #229443;
      box-shadow: 0 8px 30px rgba(34, 148, 67, 0.25);
      position: relative;
      overflow: hidden;
      
      &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: 
          radial-gradient(ellipse 35% 45% at 35% 40%, rgba(255,255,255,0.2) 0%, transparent 100%),
          radial-gradient(ellipse 25% 30% at 70% 65%, rgba(255,255,255,0.1) 0%, transparent 100%);
      }
      
      .material-icons-outlined {
        font-size: 100px;
        color: #fff;
        opacity: 0.5;
        position: relative;
        z-index: 1;
      }
    }
    
    .sup-title {
      text-align: center;
      font-size: 1.8rem;
      color: #0a2540;
      margin-bottom: 1rem;
      text-transform: uppercase;
      letter-spacing: 0.02em;
      
      strong { 
        color: #104F8E; 
        font-size: 2.2rem;
        display: block;
      }
    }
    
    .sup-desc {
      text-align: center;
      font-size: 0.95rem;
      color: #4a5568;
      font-style: italic;
      line-height: 1.6;
      max-width: 350px;
      margin: 0 auto;
    }
    
    .sup-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 10px 22px;
      background: linear-gradient(135deg, #0a2540 0%, #104F8E 100%);
      border: none;
      border-radius: 100px;
      font-size: 0.8rem;
      font-weight: 700;
      color: #fff;
      letter-spacing: 0.1em;
      margin-bottom: 1.5rem;
      box-shadow: 0 4px 12px rgba(10, 37, 64, 0.2);
      
      .badge-dot {
        width: 8px;
        height: 8px;
        background: #229443;
        border-radius: 50%;
      }
    }
    
    .sup-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
      flex: 1;
      
      @media (max-width: 640px) {
        grid-template-columns: 1fr;
      }
    }
    
    .sup-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      padding: 1.5rem;
      background: #fff;
      border: 2px solid #e2e8f0;
      border-radius: 16px;
      text-decoration: none;
      transition: all 0.3s ease;
      
      &:hover {
        border-color: #104F8E;
        transform: translateY(-4px);
        box-shadow: 0 12px 30px rgba(16, 79, 142, 0.12);
        background: #f0f9ff;
      }
    }
    
    .sup-logo {
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      
      img {
        max-height: 50px;
        max-width: 140px;
        object-fit: contain;
      }
      
      .material-icons-outlined {
        font-size: 36px;
        color: #104F8E;
      }
    }
    
    .sup-country {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 0.75rem;
      color: #718096;
      
      .material-icons-outlined { font-size: 14px; }
    }
    
    .sup-carousel {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 1.5rem;
    }
    
    .sup-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    /* ===== FEATURED PRODUCTS (Dark Navy) ===== */
    .featured-section {
      padding: 4rem 0;
      background: linear-gradient(180deg, #0a2540 0%, #0d3562 50%, #0a2540 100%);
      text-align: center;
      position: relative;
    }
    
    .featured-logo {
      text-align: center;
      padding: 2rem 0 1rem;
      
      img {
        height: 50px;
        width: auto;
        filter: brightness(0) invert(1) brightness(1.2);
        opacity: 0.3;
      }
    }
    
    .feat-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 10px 24px;
      background: rgba(255, 255, 255, 0.15);
      border: 1px solid rgba(255, 255, 255, 0.25);
      border-radius: 100px;
      font-size: 0.85rem;
      font-weight: 700;
      color: #fff;
      letter-spacing: 0.1em;
      margin-bottom: 1.5rem;
      
      .material-icons-outlined {
        font-size: 18px;
        color: #81d4a2;
      }
    }
    
    .feat-title {
      color: #fff;
      font-size: clamp(2rem, 4vw, 3rem);
      font-style: italic;
      margin-bottom: 1rem;
      text-transform: uppercase;
      
      strong {
        font-size: clamp(2.5rem, 5vw, 4rem);
        display: block;
      }
    }
    
    .feat-bar {
      width: 400px;
      max-width: 80%;
      height: 6px;
      background: linear-gradient(90deg, #229443 0%, #104F8E 50%, #229443 100%);
      border-radius: 3px;
      margin: 0 auto 1.5rem;
    }
    
    .feat-desc-pill {
      display: inline-block;
      padding: 10px 30px;
      background: rgba(34, 148, 67, 0.15);
      border: 1px solid rgba(34, 148, 67, 0.35);
      border-radius: 100px;
      margin-bottom: 3rem;
    }
    
    .feat-desc {
      color: rgba(255, 255, 255, 0.85);
      font-size: 0.95rem;
      font-style: italic;
      margin: 0;
    }
    
    .products-carousel {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1.5rem;
      
      @media (max-width: 768px) {
        flex-direction: column;
      }
    }
    
    .nav-arrow {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: none;
      background: transparent;
      cursor: pointer;
      transition: all 0.3s ease;
      flex-shrink: 0;
      
      .material-icons-outlined {
        font-size: 44px;
        color: #229443;
        transition: all 0.3s ease;
        filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
      }
      
      &:hover {
        .material-icons-outlined {
          color: #2ecc71;
          transform: scale(1.15);
        }
      }
      
      &.sup-nav .material-icons-outlined {
        font-size: 36px;
        color: #718096;
        filter: none;
      }
      
      &.sup-nav:hover {
        background: rgba(16, 79, 142, 0.08);
        
        .material-icons-outlined {
          color: #104F8E;
        }
      }
      
      @media (max-width: 768px) {
        display: none;
      }
    }
    
    .pagination-dots {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      
      .dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        cursor: pointer;
        transition: all 0.3s ease;
        
        &.active {
          background: #229443;
          width: 12px;
          height: 12px;
        }
      }
    }
    
    .sup-footer .pagination-dots .dot {
      background: #cbd5e0;
      
      &.active { background: #104F8E; }
    }
    
    .products-row {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
      flex: 1;
      
      @media (max-width: 768px) {
        grid-template-columns: 1fr;
        max-width: 400px;
        margin: 0 auto;
      }
    }
    
    .prod-card {
      background: rgba(255, 255, 255, 0.06);
      border: 2px solid rgba(255, 255, 255, 0.12);
      border-radius: 16px;
      overflow: hidden;
      text-decoration: none;
      transition: all 0.3s ease;
      
      &.center {
        transform: scale(1.05);
        border-color: rgba(255, 255, 255, 0.25);
        background: rgba(255, 255, 255, 0.1);
      }
      
      &:hover {
        transform: translateY(-8px) scale(1.03);
        border-color: rgba(255, 255, 255, 0.4);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        background: rgba(255, 255, 255, 0.15);
      }
    }
    
    .prod-img {
      height: 200px;
      background: rgba(255, 255, 255, 0.88);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: 8px;
      }
    }
    
    .prod-info {
      padding: 0.8rem 1rem;
      text-align: left;
      background: rgba(255, 255, 255, 0.06);
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      
      h4 {
        color: #fff;
        font-size: 1rem;
        font-weight: 700;
        margin-bottom: 4px;
        text-transform: none;
        letter-spacing: 0;
      }
      
      .prod-brand {
        font-size: 0.8rem;
        font-weight: 600;
        color: #229443;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
    }
    
    .feat-cta { text-align: center; margin-top: 1rem; }
    
    .btn-outline-white {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 14px 28px;
      background: transparent;
      border: 2px solid #fff;
      color: #fff;
      font-size: 0.9rem;
      font-weight: 700;
      text-decoration: none;
      border-radius: 12px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      transition: all 0.3s ease;
      
      .material-icons-outlined { font-size: 20px; }
      
      &:hover {
        background: #fff;
        color: #0a2540;
        transform: translateY(-2px);
      }
    }

    /* ===== WHY CHOOSE US ===== */
    .why-section {
      padding: 5rem 0;
      background: #fff;
    }
    
    .why-layout {
      display: grid;
      grid-template-columns: 1.2fr 1fr;
      gap: 4rem;
      align-items: center;
      
      @media (max-width: 1024px) {
        grid-template-columns: 1fr;
      }
    }
    
    .why-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 10px 22px;
      background: linear-gradient(135deg, #0a2540 0%, #104F8E 100%);
      border: none;
      border-radius: 100px;
      font-size: 0.85rem;
      font-weight: 700;
      color: #fff;
      letter-spacing: 0.05em;
      margin-bottom: 1.5rem;
      box-shadow: 0 4px 12px rgba(10, 37, 64, 0.2);
      
      .material-icons-outlined { font-size: 18px; color: #81d4a2; }
    }
    
    .why-content {
      h2 {
        font-size: clamp(1.8rem, 4vw, 2.8rem);
        color: #0a2540;
        margin-bottom: 1rem;
        text-transform: uppercase;
        line-height: 1.1;
        
        em {
          font-style: italic;
          font-weight: 600;
        }
        
        strong {
          color: #104F8E;
          font-size: clamp(2.5rem, 5vw, 3.5rem);
        }
      }
    }
    
    .why-intro {
      font-size: 0.9rem;
      font-weight: 500;
      color: #4a5568;
      letter-spacing: 0.03em;
      line-height: 1.6;
      margin-bottom: 2rem;
      text-transform: uppercase;
    }
    
    .why-features {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    
    .wf-item {
      display: flex;
      gap: 1rem;
      padding: 1.2rem;
      background: #f8fafc;
      border: 2px solid #e2e8f0;
      border-radius: 16px;
      transition: all 0.3s ease;
      
      &:hover {
        border-color: #229443;
        transform: translateX(6px);
        box-shadow: 0 8px 20px rgba(34, 148, 67, 0.1);
      }
      
      h4 {
        font-size: 1rem;
        font-weight: 700;
        color: #0a2540;
        margin-bottom: 4px;
        text-transform: none;
        letter-spacing: 0;
      }
      
      p {
        font-size: 0.85rem;
        color: #718096;
        font-style: italic;
        margin: 0;
        line-height: 1.5;
        max-width: 100%;
      }
    }
    
    .wf-icon {
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 14px;
      flex-shrink: 0;
      
      .material-icons-outlined { font-size: 24px; color: #fff; }
      
      &.green { background: linear-gradient(135deg, #229443, #2ecc71); }
      &.blue { background: linear-gradient(135deg, #104F8E, #1a6bc4); }
    }
    
    /* Diamond Frame */
    .why-visual {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      
      @media (max-width: 1024px) { display: none; }
    }
    
    .why-link {
      font-size: 0.85rem;
      padding: 12px 24px;
    }
    
    .diamond-frame {
      width: 320px;
      height: 320px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      
      &::before {
        content: '';
        position: absolute;
        inset: 0;
        border: 3px solid #229443;
        transform: rotate(45deg);
        border-radius: 16px;
      }
      
      &::after {
        content: '';
        position: absolute;
        inset: 12px;
        border: 3px solid #104F8E;
        transform: rotate(45deg);
        border-radius: 12px;
      }
      
      img {
        width: 55%;
        height: auto;
        object-fit: contain;
        position: relative;
        z-index: 1;
        animation: subtleFloat 5s ease-in-out infinite;
      }
    }
    
    @keyframes subtleFloat {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-6px); }
    }

    /* ===== PRE-CTA ===== */
    .pre-cta {
      padding: 3rem 0;
      background: #fff;
    }
    
    .pre-cta-inner {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 3rem;
      
      @media (max-width: 768px) {
        flex-direction: column;
        gap: 1.5rem;
      }
    }
    
    .pre-cta-logo {
      height: 100px;
      width: auto;
    }
    
    .pre-cta-badge {
      padding: 18px 44px;
      background: linear-gradient(135deg, #0a2540 0%, #104F8E 100%);
      border: none;
      border-radius: 16px;
      box-shadow: 0 6px 20px rgba(10, 37, 64, 0.25);
      
      span {
        font-size: 1.5rem;
        font-weight: 800;
        color: #fff;
        letter-spacing: 0.05em;
        text-transform: uppercase;
      }
    }

    /* ===== CTA SECTION ===== */
    .cta-section {
      padding: 4rem 0;
      background: linear-gradient(180deg, #0a2540 0%, #0d3562 50%, #0a2540 100%);
      text-align: center;
    }
    
    .cta-inner {
      max-width: 700px;
      margin: 0 auto;
    }
    
    .cta-section h2 {
      color: #fff;
      font-size: clamp(1.8rem, 4vw, 2.5rem);
      font-style: italic;
      font-weight: 900;
      text-transform: uppercase;
      margin-bottom: 1rem;
      
      span { color: rgba(255, 255, 255, 0.8); }
    }
    
    .cta-section > .container > p,
    .cta-inner > p {
      color: rgba(255, 255, 255, 0.7);
      font-size: 1rem;
      font-style: italic;
      margin-bottom: 2.5rem;
      max-width: 100%;
    }
    
    .cta-buttons {
      display: flex;
      justify-content: center;
      gap: 1rem;
      flex-wrap: wrap;
    }
    
    .btn-cta-green {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 16px 28px;
      background: linear-gradient(135deg, #229443 0%, #2ecc71 100%);
      color: #fff;
      font-size: 1rem;
      font-weight: 700;
      text-decoration: none;
      border-radius: 12px;
      text-transform: uppercase;
      transition: all 0.3s ease;
      box-shadow: 0 6px 20px rgba(34, 148, 67, 0.3);
      
      .material-icons-outlined { font-size: 20px; }
      
      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 30px rgba(34, 148, 67, 0.4);
        color: #fff;
      }
    }
    
    .btn-cta-white {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 16px 28px;
      background: #fff;
      color: #0a2540;
      font-size: 1rem;
      font-weight: 700;
      text-decoration: none;
      border-radius: 12px;
      text-transform: uppercase;
      transition: all 0.3s ease;
      
      .material-icons-outlined { font-size: 20px; }
      
      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
      }
    }

    /* ===== ANIMATIONS ===== */
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
export class HomeComponent implements OnInit, AfterViewInit {
  private api = inject(ApiService);
  categories: Category[] = [];
  
  clients = [
    { name: 'Agrosuper', logo: 'assets/images/clients/agrosuper.png' },
    { name: 'Sopraval', logo: 'assets/images/clients/sopraval.png' },
    { name: 'Comafri', logo: 'assets/images/clients/Logo_Comafri-1.png' }
  ];
  
  suppliers: any[] = [];
  
  featuredProducts = [
    { 
      name: 'Trimmer Neumático IBEX', 
      image: 'assets/images/products/IBEX-Pneumatic-Trimmers-with-EBC-35-128-Heads.jpg',
      category: 'Equipos de Corte',
      supplier: 'IBEX',
      supplierSlug: 'ibex'
    },
    { 
      name: 'Guante Euroflex Standard', 
      image: 'assets/images/products/Euroflex Standard.jpg',
      category: 'Seguridad',
      supplier: 'ZIEGLER',
      supplierSlug: 'ziegler'
    },
    { 
      name: 'Afilador Profesional', 
      image: 'assets/images/products/B SHARP grinding sharpener.jpg',
      category: 'Afilado',
      supplier: 'Bobet',
      supplierSlug: 'bobet'
    },
    { 
      name: 'Desescamadora ST600', 
      image: 'assets/images/products/automatic-fish-skinner-st600v-long-model.png',
      category: 'Equipos para Pescado',
      supplier: 'STEEN',
      supplierSlug: 'steen'
    },
    { 
      name: 'Fusil Profesional Dassaud', 
      image: 'assets/images/products/dassaud-fils-fusils-D82-0A-30.png',
      category: 'Afilado',
      supplier: 'DASSAUD',
      supplierSlug: 'dassaud'
    },
    { 
      name: 'Delantal Malla Metálica', 
      image: 'assets/images/products/Ecomesh Apron.jpg',
      category: 'Protección',
      supplier: 'ZIEGLER',
      supplierSlug: 'ziegler'
    }
  ];
  
  carouselItems: CarouselItem[] = [
    {
      id: 1,
      icon: 'precision_manufacturing',
      title: 'carousel.item1.title',
      description: 'carousel.item1.description',
      image: 'assets/images/products/IBEX-Pneumatic-Trimmers-with-EBC-35-128-Heads.jpg',
      link: '/catalogo/ibex'
    },
    {
      id: 2,
      icon: 'content_cut',
      title: 'carousel.item2.title',
      description: 'carousel.item2.description',
      image: 'assets/images/products/dassaud-fils-fusils-D82-0A-30.png',
      link: '/catalogo/dassaud'
    },
    {
      id: 3,
      icon: 'security',
      title: 'carousel.item3.title',
      description: 'carousel.item3.description',
      image: 'assets/images/products/Euroflex Standard.jpg',
      link: '/catalogo/ziegler'
    },
    {
      id: 4,
      icon: 'auto_fix_high',
      title: 'carousel.item4.title',
      description: 'carousel.item4.description',
      image: 'assets/images/products/B SHARP grinding sharpener.jpg',
      link: '/catalogo/bobet'
    },
    {
      id: 5,
      icon: 'engineering',
      title: 'carousel.item5.title',
      description: 'carousel.item5.description',
      image: 'assets/images/products/automatic-fish-skinner-st600v-long-model.png',
      link: '/catalogo/steen'
    },
    {
      id: 6,
      icon: 'handyman',
      title: 'carousel.item6.title',
      description: 'carousel.item6.description',
      image: 'assets/images/products/IBEX-EBC-Modular-Trimmer-Heads-35-to-180.jpg',
      link: '/catalogo/ibex'
    }
  ];

  scrollY = 0;
  featuredPage = 0;
  supplierPage = 0;
  suppliersPerPage = 6;
  productsPerPage = 3;

  @HostListener('window:scroll')
  onScroll() {
    this.scrollY = window.scrollY;
  }

  get visibleProducts() {
    const start = this.featuredPage * this.productsPerPage;
    return this.featuredProducts.slice(start, start + this.productsPerPage);
  }

  get featuredPages() {
    return new Array(Math.ceil(this.featuredProducts.length / this.productsPerPage));
  }

  get visibleSuppliers() {
    const start = this.supplierPage * this.suppliersPerPage;
    return this.suppliers.slice(start, start + this.suppliersPerPage);
  }

  get supplierPages() {
    return new Array(Math.max(1, Math.ceil(this.suppliers.length / this.suppliersPerPage)));
  }

  prevFeatured() {
    this.featuredPage = this.featuredPage > 0 ? this.featuredPage - 1 : this.featuredPages.length - 1;
  }

  nextFeatured() {
    this.featuredPage = this.featuredPage < this.featuredPages.length - 1 ? this.featuredPage + 1 : 0;
  }

  goToFeaturedPage(idx: number) {
    this.featuredPage = idx;
  }

  prevSupplier() {
    this.supplierPage = this.supplierPage > 0 ? this.supplierPage - 1 : this.supplierPages.length - 1;
  }

  nextSupplier() {
    this.supplierPage = this.supplierPage < this.supplierPages.length - 1 ? this.supplierPage + 1 : 0;
  }

  goToSupplierPage(idx: number) {
    this.supplierPage = idx;
  }

  ngOnInit() {
    this.api.getCategories().subscribe(cats => {
      this.categories = cats;
    });
    
    this.api.getSuppliers().subscribe(suppliers => {
      this.suppliers = suppliers;
    });
  }
  
  ngAfterViewInit() {}
}
