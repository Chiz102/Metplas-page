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
      margin-bottom: var(--space-lg);
      
      .text-gradient {
        background: var(--gradient-accent-full);
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
      padding: var(--space-lg);
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-lg);
      transition: all var(--transition-base);
      
      &:hover {
        border-color: var(--color-accent);
        transform: translateY(-4px);
      }
      
      .value-icon {
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--gradient-accent-full);
        border-radius: var(--radius-md);
        margin-bottom: var(--space-md);
        
        .material-icons-outlined {
          font-size: 24px;
          color: var(--color-primary);
        }
      }
      
      h4 {
        font-size: 1.1rem;
        color: var(--color-text-primary);
        margin-bottom: var(--space-sm);
      }
      
      p {
        font-size: 0.9rem;
        color: var(--color-text-muted);
        margin: 0;
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
      background: var(--color-surface);
      border: 1px solid var(--color-border-strong);
      border-radius: var(--radius-xl);
      
      &.main {
        top: 0;
        right: 0;
        width: 300px;
        height: 300px;
        
        .material-icons-outlined {
          font-size: 80px;
          color: var(--color-accent);
        }
        
        span:last-child {
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: 0.1em;
        }
      }
      
      &.accent {
        bottom: 50px;
        left: 0;
        width: 150px;
        height: 150px;
        background: var(--gradient-accent-full);
        
        .material-icons-outlined {
          font-size: 60px;
          color: var(--color-primary);
        }
      }
    }
    
    .mission-section {
      background: linear-gradient(180deg, var(--color-accent-light) 0%, transparent 100%);
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
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-xl);
      
      .mission-icon {
        width: 64px;
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--gradient-accent-full);
        border-radius: var(--radius-lg);
        margin-bottom: var(--space-lg);
        
        .material-icons-outlined {
          font-size: 32px;
          color: var(--color-primary);
        }
      }
      
      h3 {
        font-size: 1.5rem;
        margin-bottom: var(--space-md);
      }
      
      p {
        font-size: 1rem;
        line-height: 1.7;
        margin: 0;
      }
    }
    
    .cta-banner {
      text-align: center;
      padding: var(--space-3xl);
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-xl);
      
      h2 {
        margin-bottom: var(--space-md);
      }
      
      p {
        font-size: 1.1rem;
        max-width: 500px;
        margin: 0 auto var(--space-xl);
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

