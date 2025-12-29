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
      <div class="hero-bg">
        <div class="hero-gradient"></div>
        <div class="hero-mesh"></div>
        <div class="hero-orb orb-1"></div>
        <div class="hero-orb orb-2"></div>
      </div>
      
      <div class="container hero-content">
        <div class="hero-badge animate-slide-in">
          <span class="badge-dot"></span>
          <span>Nuestra Empresa</span>
        </div>
        
        <h1 class="animate-slide-in delay-1">
          <span class="line-1">Somos</span>
          <span class="line-2 text-gradient">Metplastech</span>
        </h1>
        
        <p class="hero-description animate-slide-in delay-2">
          Una empresa chilena dedicada a proporcionar soluciones tecnológicas e industriales 
          de la más alta calidad.
        </p>
      </div>
    </section>

    <!-- About Content -->
    <section class="section about-section">
      <div class="container">
        <div class="about-grid">
          <div class="about-content">
            <div class="section-tag">
              <span class="material-icons-outlined">history</span>
              Nuestra Historia
            </div>
            
            <h2>Más de <span class="text-gradient">15 años</span> de experiencia</h2>
            
            <p class="about-intro">
              Metplastech Technologies SPA nace de la necesidad de ofrecer al mercado chileno 
              equipos e insumos industriales de alta calidad, respaldados por un servicio 
              técnico especializado y una atención personalizada.
            </p>
            <p>
              Ubicados en Curicó, Región del Maule, hemos construido una sólida reputación 
              basada en la confianza, la innovación y el compromiso con nuestros clientes.
            </p>
            
            <div class="values-grid">
              <div class="value-card">
                <div class="value-icon">
                  <span class="material-icons-outlined">verified</span>
                </div>
                <h4>Calidad</h4>
                <p>Productos certificados con los más altos estándares internacionales.</p>
              </div>
              
              <div class="value-card">
                <div class="value-icon">
                  <span class="material-icons-outlined">handshake</span>
                </div>
                <h4>Confianza</h4>
                <p>Relaciones duraderas basadas en transparencia y honestidad.</p>
              </div>
              
              <div class="value-card">
                <div class="value-icon">
                  <span class="material-icons-outlined">rocket_launch</span>
                </div>
                <h4>Innovación</h4>
                <p>Constantemente buscando nuevas soluciones para tu industria.</p>
              </div>
              
              <div class="value-card">
                <div class="value-icon">
                  <span class="material-icons-outlined">groups</span>
                </div>
                <h4>Servicio</h4>
                <p>Atención personalizada y soporte técnico especializado.</p>
              </div>
            </div>
          </div>
          
          <div class="about-visual">
            <div class="visual-stack">
              <div class="vcard vcard-main">
                <img src="assets/images/logo.png" alt="Metplastech" class="vcard-logo">
              </div>
              <div class="vcard vcard-accent">
                <span class="material-icons-outlined">precision_manufacturing</span>
              </div>
              <div class="vcard vcard-small">
                <span class="material-icons-outlined">engineering</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="section mission-section">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">
            <span class="material-icons-outlined">flag</span>
            Nuestro Propósito
          </div>
          <h2>Misión y <span class="text-gradient">Visión</span></h2>
        </div>
        
        <div class="mission-grid">
          <div class="mission-card">
            <div class="mission-icon">
              <span class="material-icons-outlined">flag</span>
            </div>
            <h3>Misión</h3>
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
            <h3>Visión</h3>
            <p>
              Ser reconocidos como el principal referente en soluciones tecnológicas e 
              industriales en Chile, destacando por nuestra innovación, calidad y 
              compromiso con el éxito de nuestros clientes.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="cta-bg">
        <div class="cta-pattern"></div>
      </div>
      <div class="container">
        <div class="cta-content">
          <span class="cta-tag">¿Listo para comenzar?</span>
          <h2>Conoce nuestros <span class="text-white">productos</span></h2>
          <p>Explora nuestro catálogo completo o contáctanos para una asesoría personalizada.</p>
          <div class="cta-buttons">
            <a routerLink="/catalogo" class="btn-cta-primary">
              <span class="material-icons-outlined">grid_view</span>
              Ver Catálogo
            </a>
            <a routerLink="/contacto" class="btn-cta-secondary">
              <span class="material-icons-outlined">mail</span>
              Contactar
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
        radial-gradient(ellipse 80% 50% at 50% 20%, rgba(20, 184, 166, 0.25) 0%, transparent 50%),
        radial-gradient(ellipse 60% 40% at 80% 80%, rgba(59, 130, 246, 0.2) 0%, transparent 40%);
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
        width: 400px;
        height: 400px;
        top: -100px;
        left: 10%;
        background: radial-gradient(circle, rgba(52, 211, 153, 0.25) 0%, transparent 70%);
      }
      
      &.orb-2 {
        width: 350px;
        height: 350px;
        bottom: -80px;
        right: 10%;
        background: radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%);
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
      margin: 0 auto;
      line-height: 1.7;
    }
    
    /* ===== ABOUT SECTION ===== */
    .about-section {
      background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
    }
    
    .about-grid {
      display: grid;
      grid-template-columns: 1.2fr 1fr;
      gap: var(--space-4xl);
      align-items: start;
      
      @media (max-width: 1024px) {
        grid-template-columns: 1fr;
      }
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
    
    .about-content {
      h2 {
        margin-bottom: var(--space-xl);
        
        .text-gradient {
          background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-blue) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      }
      
      .about-intro {
        font-size: 1.15rem;
        margin-bottom: var(--space-lg);
      }
      
      > p {
        font-size: 1.05rem;
        line-height: 1.8;
        margin-bottom: var(--space-lg);
        color: var(--color-text-secondary);
        max-width: 100%;
      }
    }
    
    .values-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: var(--space-lg);
      margin-top: var(--space-2xl);
      
      @media (max-width: 640px) {
        grid-template-columns: 1fr;
      }
    }
    
    .value-card {
      padding: var(--space-xl);
      background: #ffffff;
      border: 2px solid var(--color-border-light);
      border-radius: 20px;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      
      &:hover {
        border-color: var(--color-accent);
        transform: translateY(-6px);
        box-shadow: 0 20px 50px rgba(5, 150, 105, 0.15);
        
        .value-icon {
          transform: scale(1.1) rotate(5deg);
          background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-blue) 100%);
          
          .material-icons-outlined {
            color: #ffffff;
          }
        }
      }
    }
    
    .value-icon {
      width: 56px;
      height: 56px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, rgba(5, 150, 105, 0.12) 0%, rgba(59, 130, 246, 0.1) 100%);
      border-radius: 14px;
      margin-bottom: var(--space-md);
      transition: all 0.4s ease;
      
      .material-icons-outlined {
        font-size: 26px;
        color: var(--color-accent);
        transition: color 0.3s ease;
      }
    }
    
    .value-card h4 {
      font-size: 1.15rem;
      font-weight: 700;
      color: var(--color-text-primary);
      margin-bottom: var(--space-sm);
      text-transform: none;
      letter-spacing: 0;
    }
    
    .value-card p {
      font-size: 0.9rem;
      color: var(--color-text-muted);
      margin: 0;
      line-height: 1.6;
      max-width: 100%;
    }
    
    .about-visual {
      @media (max-width: 1024px) {
        display: none;
      }
    }
    
    .visual-stack {
      position: relative;
      height: 500px;
    }
    
    .vcard {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: var(--space-md);
      border-radius: 24px;
      box-shadow: 0 25px 60px rgba(0, 0, 0, 0.2);
      
      &.vcard-main {
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
      
      &.vcard-accent {
        top: 0;
        right: 50%;
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
      
      &.vcard-small {
        bottom: 15%;
        right: 55%;
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
      50% { transform: translateY(-12px); }
    }
    
    /* ===== MISSION SECTION ===== */
    .mission-section {
      background: linear-gradient(180deg, #f0f9ff 0%, #ecfdf5 50%, #f8fafc 100%);
    }
    
    .section-header {
      text-align: center;
      margin-bottom: var(--space-3xl);
      
      h2 {
        margin-bottom: 0;
        
        .text-gradient {
          background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-blue) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      }
    }
    
    .mission-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: var(--space-xl);
      
      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }
    }
    
    .mission-card {
      padding: var(--space-2xl);
      background: #ffffff;
      border: 2px solid var(--color-border-light);
      border-radius: 24px;
      transition: all 0.4s ease;
      
      &:hover {
        transform: translateY(-6px);
        box-shadow: 0 25px 60px rgba(5, 150, 105, 0.15);
        border-color: var(--color-accent);
        
        .mission-icon {
          transform: scale(1.1);
        }
      }
    }
    
    .mission-icon {
      width: 72px;
      height: 72px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-blue) 100%);
      border-radius: 18px;
      margin-bottom: var(--space-lg);
      box-shadow: 0 12px 30px rgba(5, 150, 105, 0.3);
      transition: transform 0.4s ease;
      
      .material-icons-outlined {
        font-size: 36px;
        color: #ffffff;
      }
    }
    
    .mission-card h3 {
      font-size: 1.5rem;
      margin-bottom: var(--space-md);
      color: var(--color-text-primary);
      text-transform: none;
      letter-spacing: 0;
    }
    
    .mission-card p {
      font-size: 1.05rem;
      line-height: 1.8;
      margin: 0;
      color: var(--color-text-secondary);
      max-width: 100%;
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
      background: linear-gradient(135deg, #041e35 0%, #0a3358 40%, #0d4278 70%, #0f5a4a 100%);
    }
    
    .cta-pattern {
      position: absolute;
      inset: 0;
      background: 
        radial-gradient(circle at 30% 50%, rgba(52, 211, 153, 0.15) 0%, transparent 40%),
        radial-gradient(circle at 70% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 30%);
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
    
    .cta-section > .container > .cta-content > p {
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
  `]
})
export class AboutComponent {}
