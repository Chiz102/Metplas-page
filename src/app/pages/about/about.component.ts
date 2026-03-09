import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- Hero Section -->
    <section class="page-hero">
      <div class="hero-deco-tl"></div>
      <div class="hero-deco-br"></div>
      
      <div class="container hero-inner">
        <div class="hero-badge animate-in">
          <span class="badge-dot"></span>
          <span>Nuestra Empresa</span>
        </div>
        
        <h1 class="animate-in d1">
          <span class="h1-line">SOMOS</span>
          <span class="h1-big">METPLASTECH</span>
        </h1>
        
        <p class="hero-desc animate-in d2">
          Una empresa chilena dedicada a proporcionar soluciones tecnológicas e industriales 
          de la más alta calidad.
        </p>
      </div>
    </section>
    
    <!-- Decorative Bar -->
    <div class="deco-bar"></div>

    <!-- About Content -->
    <section class="about-section">
      <div class="container about-grid">
        <div class="about-content">
          <div class="section-badge">
            <span class="material-icons-outlined">lightbulb</span>
            ¿Por qué Elegirnos?
          </div>
          
          <h2>MÁS DE <span class="accent">15 AÑOS</span> DE<br>EXPERIENCIA</h2>
          
          <p class="about-intro">
            Metplastech Technologies SPA nace de la necesidad de ofrecer al mercado chileno 
            equipos e insumos industriales de alta calidad, respaldados por un servicio 
            técnico especializado y una atención personalizada.
          </p>
          <p>
            Ubicados en Curicó, Región del Maule, hemos construido una sólida reputación 
            basada en la confianza, la innovación y el compromiso con nuestros clientes.
          </p>
        </div>
        
        <div class="about-visual">
          <div class="diamond-frame">
            <img src="assets/images/logo.png" alt="Metplastech">
          </div>
        </div>
      </div>
    </section>
    
    <!-- Decorative Bar Angular -->
    <div class="deco-bar-angle"></div>
    
    <!-- Values Section -->
    <section class="values-section">
      <div class="container">
        <div class="values-grid">
          <div class="value-card">
            <div class="value-icon green">
              <span class="material-icons-outlined">verified</span>
            </div>
            <h4>Calidad</h4>
            <p>Productos certificados con los más altos estándares internacionales.</p>
          </div>
          
          <div class="value-card">
            <div class="value-icon blue">
              <span class="material-icons-outlined">rocket_launch</span>
            </div>
            <h4>Innovación</h4>
            <p>Constantemente buscando nuevas soluciones para tu industria.</p>
          </div>
          
          <div class="value-card">
            <div class="value-icon green">
              <span class="material-icons-outlined">handshake</span>
            </div>
            <h4>Confianza</h4>
            <p>Relaciones duraderas basadas en transparencia y honestidad.</p>
          </div>
          
          <div class="value-card">
            <div class="value-icon blue">
              <span class="material-icons-outlined">groups</span>
            </div>
            <h4>Servicio</h4>
            <p>Atención personalizada y soporte técnico especializado.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="mission-section">
      <div class="container">
        <div class="section-header">
          <div class="section-badge-center">
            <span>NUESTRO PROPÓSITO</span>
          </div>
        </div>
        
        <div class="mission-grid">
          <div class="mission-card">
            <div class="mission-icon">
              <span class="material-icons-outlined">flag</span>
            </div>
            <h3>MISIÓN</h3>
            <p>
              Proveer a la industria chilena equipos, insumos y servicios de la más alta 
              calidad, contribuyendo al desarrollo y la eficiencia operacional de nuestros 
              clientes mediante soluciones innovadoras y un servicio de excelencia.
            </p>
          </div>
          
          <div class="mission-card">
            <div class="mission-icon">
              <span class="material-icons-outlined">visibility</span>
            </div>
            <h3>VISIÓN</h3>
            <p>
              Ser reconocidos como el principal referente en soluciones tecnológicas e 
              industriales en Chile, destacando por nuestra innovación, calidad y 
              compromiso con el éxito de nuestros clientes.
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Decorative Bar Angular -->
    <div class="deco-bar-angle"></div>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container cta-inner">
        <span class="cta-tag">¿LISTO PARA COMENZAR?</span>
        <h2>CONOCE NUESTROS<br><span class="cta-accent">PRODUCTOS</span></h2>
        <p>Explora nuestro catálogo completo o contáctanos para una asesoría personalizada.</p>
        <div class="cta-buttons">
          <a routerLink="/catalogo" class="btn-cta-green">
            <span class="material-icons-outlined">grid_view</span>
            VER CATÁLOGO
          </a>
          <a routerLink="/contacto" class="btn-cta-white">
            <span class="material-icons-outlined">mail</span>
            CONTÁCTANOS
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host { display: block; }
    
    .deco-bar {
      height: 12px;
      background: linear-gradient(to bottom,
        #4FAD47 0%, #4FAD47 25%,
        #2667A9 25%, #2667A9 75%,
        #4FAD47 75%, #4FAD47 100%
      );
    }
    
    .deco-bar-angle {
      height: 50px;
      position: relative;
      overflow: hidden;
      
      &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(to bottom,
          #4FAD47 0%, #4FAD47 25%,
          #2667A9 25%, #2667A9 75%,
          #4FAD47 75%, #4FAD47 100%
        );
        clip-path: polygon(4% 0%, 96% 0%, 100% 100%, 0% 100%);
      }
    }

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
      gap: 10px;
      padding: 10px 24px;
      background: #f0f9ff;
      border: 2px solid #2667A9;
      border-radius: 100px;
      margin-bottom: 1.5rem;
      
      .badge-dot {
        width: 8px; height: 8px;
        background: #4FAD47;
        border-radius: 50%;
      }
      
      span:last-child {
        font-size: 0.85rem;
        font-weight: 700;
        color: #2667A9;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }
    }
    
    .page-hero h1 {
      margin-bottom: 1.5rem;
      
      span { display: block; }
      
      .h1-line {
        font-size: clamp(1.8rem, 4vw, 2.8rem);
        color: #2667A9;
        font-weight: 900;
        text-transform: uppercase;
      }
      
      .h1-big {
        font-size: clamp(2.5rem, 6vw, 4.5rem);
        color: #204C81;
        font-weight: 900;
        text-transform: uppercase;
      }
    }
    
    .hero-desc {
      font-size: 1.1rem;
      color: #4a5568;
      font-style: italic;
      max-width: 550px;
      margin: 0 auto;
      line-height: 1.7;
    }
    
    /* ===== ABOUT SECTION ===== */
    .about-section {
      padding: 4rem 0;
      background: linear-gradient(180deg, #204C81 0%, #0d3562 50%, #204C81 100%);
    }
    
    .about-grid {
      display: grid;
      grid-template-columns: 1.2fr 1fr;
      gap: 4rem;
      align-items: center;
      
      @media (max-width: 1024px) {
        grid-template-columns: 1fr;
      }
    }
    
    .section-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 18px;
      background: rgba(249, 115, 22, 0.15);
      border: 2px solid #f97316;
      border-radius: 100px;
      font-size: 0.85rem;
      font-weight: 700;
      color: #f97316;
      letter-spacing: 0.05em;
      margin-bottom: 1.5rem;
      
      .material-icons-outlined { font-size: 18px; }
    }
    
    .about-content {
      h2 {
        color: #fff;
        font-size: clamp(1.8rem, 4vw, 2.5rem);
        font-weight: 900;
        text-transform: uppercase;
        margin-bottom: 1.5rem;
        font-style: italic;
        
        .accent { color: #4FAD47; }
      }
      
      .about-intro {
        font-size: 1.05rem;
        color: rgba(255, 255, 255, 0.85);
        font-style: italic;
        margin-bottom: 1rem;
        line-height: 1.7;
        max-width: 100%;
      }
      
      > p {
        font-size: 1rem;
        color: rgba(255, 255, 255, 0.7);
        font-style: italic;
        line-height: 1.7;
        max-width: 100%;
      }
    }
    
    .about-visual {
      display: flex;
      justify-content: center;
      
      @media (max-width: 1024px) { display: none; }
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
        border: 4px solid #4FAD47;
        transform: rotate(45deg);
        border-radius: 20px;
      }
      
      &::after {
        content: '';
        position: absolute;
        inset: 10px;
        border: 4px solid #2667A9;
        transform: rotate(45deg);
        border-radius: 16px;
      }
      
      img {
        width: 55%;
        height: auto;
        object-fit: contain;
        z-index: 1;
      }
    }
    
    /* ===== VALUES ===== */
    .values-section {
      padding: 4rem 0;
      background: #fff;
    }
    
    .values-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
      max-width: 900px;
      margin: 0 auto;
      
      @media (max-width: 640px) {
        grid-template-columns: 1fr;
      }
    }
    
    .value-card {
      padding: 1.5rem;
      background: #f8fafc;
      border: 2px solid #e2e8f0;
      border-radius: 16px;
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      transition: all 0.3s ease;
      
      &:hover {
        border-color: #4FAD47;
        transform: translateY(-4px);
        box-shadow: 0 10px 25px rgba(34, 148, 67, 0.1);
      }
      
      h4 {
        font-size: 1rem;
        font-weight: 700;
        color: #4FAD47;
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
    
    .value-icon {
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 14px;
      flex-shrink: 0;
      
      .material-icons-outlined { font-size: 24px; color: #fff; }
      
      &.green { background: linear-gradient(135deg, #4FAD47, #2ecc71); }
      &.blue { background: linear-gradient(135deg, #2667A9, #1a6bc4); }
    }
    
    /* ===== MISSION ===== */
    .mission-section {
      padding: 4rem 0;
      background: #f8fafc;
    }
    
    .section-header {
      text-align: center;
      margin-bottom: 3rem;
    }
    
    .section-badge-center {
      display: inline-block;
      padding: 10px 28px;
      background: #fff;
      border: 2px solid #204C81;
      border-radius: 8px;
      font-size: 0.85rem;
      font-weight: 700;
      color: #204C81;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    
    .mission-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
      
      @media (max-width: 768px) { grid-template-columns: 1fr; }
    }
    
    .mission-card {
      text-align: center;
      
      h3 {
        font-size: 2rem;
        font-weight: 900;
        color: #204C81;
        margin-bottom: 1rem;
        text-transform: uppercase;
        
        &:first-of-type { color: #4FAD47; }
      }
      
      p {
        font-size: 0.95rem;
        color: #4a5568;
        font-style: italic;
        line-height: 1.7;
        max-width: 100%;
        padding: 1rem;
        background: rgba(16, 79, 142, 0.05);
        border: 1px solid rgba(16, 79, 142, 0.15);
        border-radius: 12px;
      }
    }
    
    .mission-icon {
      width: 56px;
      height: 56px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #4FAD47, #2667A9);
      border-radius: 14px;
      margin: 0 auto 1rem;
      
      .material-icons-outlined { font-size: 28px; color: #fff; }
    }
    
    .mission-card:first-child h3 { color: #4FAD47; }
    .mission-card:last-child h3 { color: #2667A9; }
    
    /* ===== CTA ===== */
    .cta-section {
      padding: 4rem 0;
      background: linear-gradient(180deg, #204C81 0%, #0d3562 50%, #204C81 100%);
      text-align: center;
    }
    
    .cta-inner { max-width: 700px; margin: 0 auto; }
    
    .cta-tag {
      display: inline-block;
      padding: 8px 24px;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 100px;
      font-size: 0.85rem;
      font-weight: 700;
      color: rgba(255, 255, 255, 0.8);
      letter-spacing: 0.1em;
      margin-bottom: 2rem;
    }
    
    .cta-section h2 {
      color: #fff;
      font-size: clamp(1.8rem, 4vw, 2.5rem);
      font-weight: 900;
      text-transform: uppercase;
      margin-bottom: 1rem;
      
      .cta-accent { color: #4FAD47; }
    }
    
    .cta-section p,
    .cta-inner > p {
      color: rgba(255, 255, 255, 0.7);
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
      background: linear-gradient(135deg, #4FAD47, #2ecc71);
      color: #fff;
      font-size: 1rem;
      font-weight: 700;
      text-decoration: none;
      border-radius: 12px;
      text-transform: uppercase;
      transition: all 0.3s ease;
      box-shadow: 0 6px 20px rgba(34, 148, 67, 0.3);
      
      .material-icons-outlined { font-size: 20px; }
      &:hover { transform: translateY(-3px); color: #fff; }
    }
    
    .btn-cta-white {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 16px 28px;
      background: #fff;
      color: #204C81;
      font-size: 1rem;
      font-weight: 700;
      text-decoration: none;
      border-radius: 12px;
      text-transform: uppercase;
      transition: all 0.3s ease;
      
      .material-icons-outlined { font-size: 20px; }
      &:hover { transform: translateY(-3px); }
    }
    
    /* Animations */
    .animate-in {
      animation: slideUp 0.7s ease forwards;
      opacity: 0;
      transform: translateY(25px);
    }
    .d1 { animation-delay: 0.1s; }
    .d2 { animation-delay: 0.2s; }
    
    @keyframes slideUp {
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class AboutComponent {}
