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
        linear-gradient(180deg, var(--color-surface-blue) 0%, #ffffff 100%);
      position: relative;
      
      &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: 
          radial-gradient(ellipse 100% 60% at 80% 0%, rgba(14, 165, 233, 0.1) 0%, transparent 50%),
          radial-gradient(ellipse 80% 50% at 20% 100%, rgba(5, 150, 105, 0.08) 0%, transparent 40%);
        pointer-events: none;
      }
    }
    
    .hero-label {
      display: inline-flex;
      align-items: center;
      gap: var(--space-sm);
      padding: var(--space-sm) var(--space-lg);
      background: #ffffff;
      border: 2px solid var(--color-border-blue);
      border-radius: var(--radius-full);
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--color-blue);
      margin-bottom: var(--space-lg);
      box-shadow: var(--shadow-md);
      position: relative;
      
      .material-icons-outlined {
        font-size: 18px;
        color: var(--color-accent);
      }
    }
    
    h1 {
      margin-bottom: var(--space-lg);
      
      .text-gradient {
        background: linear-gradient(135deg, var(--color-blue) 0%, var(--color-accent) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    }
    
    .hero-description {
      font-size: 1.25rem;
      color: var(--color-text-secondary);
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
      }
      
      > p {
        font-size: 1.1rem;
        line-height: 1.8;
        margin-bottom: var(--space-lg);
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
      border-radius: var(--radius-lg);
      transition: all var(--transition-base);
      box-shadow: var(--shadow-sm);
      
      &:hover {
        border-color: var(--color-accent);
        transform: translateY(-4px);
        box-shadow: var(--shadow-green);
        
        .value-icon {
          transform: scale(1.1);
        }
      }
      
      .value-icon {
        width: 52px;
        height: 52px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, var(--color-blue) 0%, var(--color-accent) 100%);
        border-radius: var(--radius-md);
        margin-bottom: var(--space-md);
        transition: all var(--transition-base);
        box-shadow: 0 4px 12px rgba(3, 105, 161, 0.25);
        
        .material-icons-outlined {
          font-size: 26px;
          color: #ffffff;
        }
      }
      
      h4 {
        font-size: 1.1rem;
        font-weight: 600;
        color: var(--color-text-primary);
        margin-bottom: var(--space-sm);
      }
      
      p {
        font-size: 0.9rem;
        color: var(--color-text-muted);
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
      background: #ffffff;
      border: 2px solid var(--color-border-blue);
      border-radius: var(--radius-xl);
      box-shadow: var(--shadow-lg);
      
      &.main {
        top: 0;
        right: 0;
        width: 300px;
        height: 300px;
        background: linear-gradient(135deg, #ffffff 0%, var(--color-surface-blue) 100%);
        
        .material-icons-outlined {
          font-size: 80px;
          background: linear-gradient(135deg, var(--color-blue) 0%, var(--color-accent) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        span:last-child {
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          background: linear-gradient(135deg, var(--color-blue) 0%, var(--color-accent) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      }
      
      &.accent {
        bottom: 50px;
        left: 0;
        width: 150px;
        height: 150px;
        background: linear-gradient(135deg, var(--color-blue) 0%, var(--color-accent) 100%);
        border-color: transparent;
        box-shadow: var(--shadow-glow);
        
        .material-icons-outlined {
          font-size: 60px;
          color: #ffffff;
        }
      }
    }
    
    .mission-section {
      background: linear-gradient(180deg, var(--color-surface-green) 0%, #ffffff 50%, var(--color-surface-blue) 100%);
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
      border-radius: var(--radius-xl);
      box-shadow: var(--shadow-md);
      transition: all var(--transition-base);
      
      &:hover {
        transform: translateY(-4px);
        box-shadow: var(--shadow-lg);
        border-color: var(--color-blue);
      }
      
      .mission-icon {
        width: 68px;
        height: 68px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-blue) 100%);
        border-radius: var(--radius-lg);
        margin-bottom: var(--space-lg);
        box-shadow: 0 4px 16px rgba(5, 150, 105, 0.3);
        
        .material-icons-outlined {
          font-size: 34px;
          color: #ffffff;
        }
      }
      
      h3 {
        font-size: 1.5rem;
        margin-bottom: var(--space-md);
        color: var(--color-text-primary);
      }
      
      p {
        font-size: 1rem;
        line-height: 1.8;
        margin: 0;
        color: var(--color-text-secondary);
      }
    }
    
    .cta-banner {
      text-align: center;
      padding: var(--space-3xl);
      background: linear-gradient(135deg, var(--color-blue-darker) 0%, var(--color-blue) 50%, var(--color-accent) 100%);
      border-radius: var(--radius-xl);
      box-shadow: var(--shadow-xl);
      position: relative;
      overflow: hidden;
      
      &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: 
          radial-gradient(ellipse 80% 60% at 80% 20%, rgba(52, 211, 153, 0.2) 0%, transparent 50%),
          radial-gradient(ellipse 60% 50% at 20% 80%, rgba(56, 189, 248, 0.2) 0%, transparent 40%);
        pointer-events: none;
      }
      
      h2 {
        margin-bottom: var(--space-md);
        color: #ffffff;
        position: relative;
      }
      
      p {
        font-size: 1.1rem;
        max-width: 500px;
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
    }
  `]
})
export class AboutComponent {}

