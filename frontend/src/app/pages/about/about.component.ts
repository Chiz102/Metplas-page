import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- Hero -->
    <section class="page-hero">
      <div class="container">
        <span class="hero-label animate-fade-in-up">
          <span class="material-icons-outlined">business</span>
          Nuestra Empresa
        </span>
        <h1 class="animate-fade-in-up delay-1">Somos <span class="text-gradient">Metplastech</span></h1>
        <p class="hero-description animate-fade-in-up delay-2">
          Una empresa chilena dedicada a proporcionar soluciones tecnológicas e industriales 
          de la más alta calidad.
        </p>
      </div>
    </section>

    <!-- About Content -->
    <section class="section">
      <div class="container">
        <div class="about-grid">
          <div class="about-content">
            <h2>Nuestra Historia</h2>
            <p>
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
                <span class="value-icon">
                  <span class="material-icons-outlined">verified</span>
                </span>
                <h4>Calidad</h4>
                <p>Productos certificados que cumplen con los más altos estándares.</p>
              </div>
              
              <div class="value-card">
                <span class="value-icon">
                  <span class="material-icons-outlined">handshake</span>
                </span>
                <h4>Confianza</h4>
                <p>Relaciones duraderas basadas en la transparencia y honestidad.</p>
              </div>
              
              <div class="value-card">
                <span class="value-icon">
                  <span class="material-icons-outlined">rocket_launch</span>
                </span>
                <h4>Innovación</h4>
                <p>Constantemente buscando nuevas soluciones para tu industria.</p>
              </div>
              
              <div class="value-card">
                <span class="value-icon">
                  <span class="material-icons-outlined">groups</span>
                </span>
                <h4>Servicio</h4>
                <p>Atención personalizada y soporte técnico especializado.</p>
              </div>
            </div>
          </div>
          
          <div class="about-visual">
            <div class="visual-wrapper">
              <div class="visual-card main">
                <span class="material-icons-outlined">hub</span>
                <span>METPLASTECH</span>
              </div>
              <div class="visual-card accent">
                <span class="material-icons-outlined">precision_manufacturing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="section mission-section">
      <div class="container">
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
    <section class="section">
      <div class="container">
        <div class="cta-banner">
          <h2>¿Quieres conocer más sobre nuestros productos?</h2>
          <p>Explora nuestro catálogo completo o contáctanos para una asesoría personalizada.</p>
          <div class="cta-actions">
            <a routerLink="/catalogo" class="btn btn-primary btn-lg">
              <span class="material-icons-outlined">grid_view</span>
              Ver Catálogo
            </a>
            <a routerLink="/contacto" class="btn btn-secondary btn-lg">
              <span class="material-icons-outlined">mail</span>
              Contactar
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .page-hero {
      padding: calc(80px + var(--space-4xl)) 0 var(--space-4xl);
      text-align: center;
      background: 
        linear-gradient(135deg, #0c4a6e 0%, #0369a1 40%, #059669 100%);
      position: relative;
      
      &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: 
          radial-gradient(ellipse 100% 60% at 80% 0%, rgba(56, 189, 248, 0.3) 0%, transparent 50%),
          radial-gradient(ellipse 80% 50% at 20% 100%, rgba(52, 211, 153, 0.25) 0%, transparent 40%);
        pointer-events: none;
      }
    }
    
    .hero-label {
      display: inline-flex;
      align-items: center;
      gap: var(--space-sm);
      padding: var(--space-sm) var(--space-lg);
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: var(--radius-full);
      font-size: 0.875rem;
      font-weight: 600;
      color: #ffffff;
      margin-bottom: var(--space-lg);
      position: relative;
      
      .material-icons-outlined {
        font-size: 18px;
        color: #34d399;
      }
    }
    
    h1 {
      margin-bottom: var(--space-lg);
      color: #ffffff;
      
      .text-gradient {
        background: linear-gradient(135deg, #38bdf8 0%, #34d399 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    }
    
    .hero-description {
      font-size: 1.25rem;
      color: rgba(255, 255, 255, 0.9);
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.7;
    }
    
    .about-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--space-4xl);
      align-items: start;
      
      @media (max-width: 1024px) {
        grid-template-columns: 1fr;
      }
    }
    
    .about-content {
      h2 {
        margin-bottom: var(--space-xl);
        color: var(--color-blue-dark);
      }
      
      > p {
        font-size: 1.1rem;
        line-height: 1.8;
        margin-bottom: var(--space-lg);
        color: var(--color-text-secondary);
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
      background: linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%);
      border: 2px solid rgba(3, 105, 161, 0.2);
      border-radius: var(--radius-lg);
      transition: all var(--transition-base);
      box-shadow: 0 4px 15px rgba(3, 105, 161, 0.1);
      
      &:hover {
        border-color: var(--color-accent);
        background: linear-gradient(135deg, #ecfdf5 0%, #f0f9ff 100%);
        transform: translateY(-6px);
        box-shadow: 0 12px 30px rgba(5, 150, 105, 0.2);
        
        .value-icon {
          transform: scale(1.1) rotate(5deg);
        }
        
        h4 {
          color: var(--color-accent);
        }
      }
      
      .value-icon {
        width: 56px;
        height: 56px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, #0369a1 0%, #059669 100%);
        border-radius: var(--radius-md);
        margin-bottom: var(--space-md);
        transition: all var(--transition-base);
        box-shadow: 0 6px 20px rgba(3, 105, 161, 0.3);
        
        .material-icons-outlined {
          font-size: 28px;
          color: #ffffff;
        }
      }
      
      h4 {
        font-size: 1.15rem;
        font-weight: 700;
        color: var(--color-blue-dark);
        margin-bottom: var(--space-sm);
        transition: color var(--transition-base);
      }
      
      p {
        font-size: 0.9rem;
        color: var(--color-text-secondary);
        margin: 0;
        line-height: 1.6;
      }
    }
    
    .about-visual {
      @media (max-width: 1024px) {
        display: none;
      }
    }
    
    .visual-wrapper {
      position: relative;
      height: 500px;
    }
    
    .visual-card {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: var(--space-md);
      border-radius: var(--radius-xl);
      
      &.main {
        top: 0;
        right: 0;
        width: 300px;
        height: 300px;
        background: linear-gradient(135deg, #0c4a6e 0%, #0369a1 50%, #059669 100%);
        border: none;
        box-shadow: 0 20px 60px rgba(3, 105, 161, 0.4);
        
        .material-icons-outlined {
          font-size: 80px;
          color: #ffffff;
          filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.2));
        }
        
        span:last-child {
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: #ffffff;
        }
      }
      
      &.accent {
        bottom: 50px;
        left: 0;
        width: 150px;
        height: 150px;
        background: linear-gradient(135deg, #059669 0%, #10b981 100%);
        border: none;
        box-shadow: 0 15px 40px rgba(5, 150, 105, 0.4);
        
        .material-icons-outlined {
          font-size: 60px;
          color: #ffffff;
        }
      }
    }
    
    .mission-section {
      background: linear-gradient(180deg, #f0f9ff 0%, #ecfdf5 50%, #f0f9ff 100%);
      position: relative;
      
      &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: 
          radial-gradient(ellipse 80% 60% at 20% 0%, rgba(5, 150, 105, 0.1) 0%, transparent 50%),
          radial-gradient(ellipse 60% 50% at 80% 100%, rgba(3, 105, 161, 0.1) 0%, transparent 40%);
        pointer-events: none;
      }
    }
    
    .mission-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: var(--space-xl);
      position: relative;
      
      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }
    }
    
    .mission-card {
      padding: var(--space-2xl);
      background: #ffffff;
      border: 2px solid rgba(3, 105, 161, 0.15);
      border-radius: var(--radius-xl);
      box-shadow: 0 8px 30px rgba(3, 105, 161, 0.1);
      transition: all var(--transition-base);
      position: relative;
      
      &:hover {
        transform: translateY(-6px);
        box-shadow: 0 15px 40px rgba(3, 105, 161, 0.2);
        border-color: var(--color-blue);
        
        .mission-icon {
          transform: scale(1.1);
        }
      }
      
      .mission-icon {
        width: 72px;
        height: 72px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, #059669 0%, #0369a1 100%);
        border-radius: var(--radius-lg);
        margin-bottom: var(--space-lg);
        box-shadow: 0 8px 25px rgba(5, 150, 105, 0.35);
        transition: all var(--transition-base);
        
        .material-icons-outlined {
          font-size: 36px;
          color: #ffffff;
        }
      }
      
      h3 {
        font-size: 1.6rem;
        margin-bottom: var(--space-md);
        color: var(--color-blue-dark);
        font-weight: 700;
      }
      
      p {
        font-size: 1.05rem;
        line-height: 1.8;
        margin: 0;
        color: var(--color-text-secondary);
      }
    }
    
    .cta-banner {
      text-align: center;
      padding: var(--space-3xl);
      background: linear-gradient(135deg, #0c4a6e 0%, #0369a1 50%, #059669 100%);
      border-radius: var(--radius-xl);
      box-shadow: 0 20px 60px rgba(3, 105, 161, 0.35);
      position: relative;
      overflow: hidden;
      
      &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: 
          radial-gradient(ellipse 80% 60% at 80% 20%, rgba(52, 211, 153, 0.25) 0%, transparent 50%),
          radial-gradient(ellipse 60% 50% at 20% 80%, rgba(56, 189, 248, 0.25) 0%, transparent 40%);
        pointer-events: none;
      }
      
      h2 {
        margin-bottom: var(--space-md);
        color: #ffffff;
        position: relative;
        font-size: 2rem;
      }
      
      p {
        font-size: 1.15rem;
        max-width: 550px;
        margin: 0 auto var(--space-xl);
        color: rgba(255, 255, 255, 0.9);
        position: relative;
      }
    }
    
    .cta-actions {
      display: flex;
      justify-content: center;
      gap: var(--space-md);
      flex-wrap: wrap;
      position: relative;
      
      .btn-primary {
        background: #ffffff;
        color: #0369a1;
        border: none;
        
        &:hover {
          background: #f0f9ff;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(255, 255, 255, 0.3);
        }
      }
      
      .btn-secondary {
        background: transparent;
        color: #ffffff;
        border: 2px solid rgba(255, 255, 255, 0.5);
        
        &:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: #ffffff;
        }
      }
    }
  `]
})
export class AboutComponent {}
