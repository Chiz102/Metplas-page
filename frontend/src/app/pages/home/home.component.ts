import { Component, OnInit, inject } from '@angular/core';
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
            {{ 'home.badge' | translate }}
          </span>
          
          <h1 class="animate-fade-in-up delay-1">
            {{ 'home.title' | translate }}<br>
            <span class="text-gradient">{{ 'home.titleHighlight' | translate }}</span><br>
            {{ 'home.titleEnd' | translate }}
          </h1>
          
          <p class="hero-description animate-fade-in-up delay-2">
            {{ 'home.description' | translate }}
          </p>
          
          <div class="hero-actions animate-fade-in-up delay-3">
            <a routerLink="/catalogo" class="btn btn-primary btn-lg">
              <span class="material-icons-outlined">grid_view</span>
              {{ 'home.viewCatalog' | translate }}
            </a>
            <a routerLink="/contacto" class="btn btn-secondary btn-lg">
              <span class="material-icons-outlined">send</span>
              {{ 'home.contactUs' | translate }}
            </a>
          </div>
          
          <div class="hero-stats animate-fade-in-up delay-4">
            <div class="stat">
              <span class="stat-value">10+</span>
              <span class="stat-label">{{ 'home.yearsExperience' | translate }}</span>
            </div>
            <div class="stat">
              <span class="stat-value">500+</span>
              <span class="stat-label">{{ 'home.satisfiedClients' | translate }}</span>
            </div>
            <div class="stat">
              <span class="stat-value">100%</span>
              <span class="stat-label">{{ 'home.guaranteedQuality' | translate }}</span>
            </div>
          </div>
        </div>
        
        <div class="hero-visual animate-fade-in delay-2">
          <div class="hero-card">
            <div class="card-inner">
              <span class="material-icons-outlined">precision_manufacturing</span>
              <span>{{ 'home.industrialPrecision' | translate }}</span>
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

    <!-- Carousel Section -->
    <app-carousel [items]="carouselItems" [itemsVisible]="3"></app-carousel>

    <!-- Categories Section -->
    <section class="section section-blue categories-section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">{{ 'home.solutions' | translate }}</span>
          <h2 class="section-title">{{ 'home.fullCatalog' | translate }}</h2>
          <p class="section-description">
            {{ 'home.catalogDescription' | translate }}
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
                {{ 'home.explore' | translate }}
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
            <span class="section-label">{{ 'home.whyChooseUs' | translate }}</span>
            <h2>{{ 'home.excellenceCommitment' | translate }} <span class="text-gradient">{{ 'home.excellence' | translate }}</span></h2>
            <p>
              {{ 'home.excellenceDescription' | translate }}
            </p>
            
            <div class="features-list">
              <div class="feature-item">
                <span class="feature-icon">
                  <span class="material-icons-outlined">verified</span>
                </span>
                <div>
                  <h4>{{ 'home.certifiedQuality' | translate }}</h4>
                  <p>{{ 'home.certifiedQualityDesc' | translate }}</p>
                </div>
              </div>
              
              <div class="feature-item">
                <span class="feature-icon">
                  <span class="material-icons-outlined">support_agent</span>
                </span>
                <div>
                  <h4>{{ 'home.technicalSupport' | translate }}</h4>
                  <p>{{ 'home.technicalSupportDesc' | translate }}</p>
                </div>
              </div>
              
              <div class="feature-item">
                <span class="feature-icon">
                  <span class="material-icons-outlined">local_shipping</span>
                </span>
                <div>
                  <h4>{{ 'home.nationalDelivery' | translate }}</h4>
                  <p>{{ 'home.nationalDeliveryDesc' | translate }}</p>
                </div>
              </div>
            </div>
            
            <a routerLink="/somos" class="btn btn-secondary">
              {{ 'home.learnMore' | translate }}
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
            <h2>{{ 'home.readyToOptimize' | translate }}</h2>
            <p>
              {{ 'home.readyDescription' | translate }}
            </p>
            <div class="cta-actions">
              <a routerLink="/contacto" class="btn btn-cta btn-lg">
                <span class="material-icons-outlined">chat</span>
                {{ 'home.requestQuote' | translate }}
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
      background: linear-gradient(135deg, #0a3d8f 0%, #1565c0 25%, #0d47a1 50%, #00695c 75%, #00897b 100%);
    }
    
    .hero-bg {
      position: absolute;
      inset: 0;
      z-index: 0;
    }
    
    .hero-gradient {
      position: absolute;
      inset: 0;
      background: 
        radial-gradient(ellipse 120% 80% at 80% 0%, rgba(100, 181, 246, 0.35) 0%, transparent 50%),
        radial-gradient(ellipse 100% 70% at 0% 100%, rgba(38, 166, 154, 0.4) 0%, transparent 50%),
        radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255, 255, 255, 0.08) 0%, transparent 60%);
    }
    
    .hero-pattern {
      position: absolute;
      inset: 0;
      background-image: 
        linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, transparent 1px);
      background-size: 60px 60px;
      mask-image: radial-gradient(ellipse 90% 80% at 50% 30%, black 20%, transparent 70%);
    }
    
    .hero-glow {
      position: absolute;
      top: 15%;
      right: 5%;
      width: 600px;
      height: 600px;
      background: radial-gradient(circle, rgba(38, 166, 154, 0.3) 0%, rgba(0, 137, 123, 0.15) 40%, transparent 60%);
      filter: blur(80px);
      animation: pulse-glow 5s ease-in-out infinite;
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
      padding: var(--space-sm) var(--space-lg);
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.25);
      border-radius: var(--radius-full);
      font-size: 0.875rem;
      font-weight: 600;
      color: #ffffff;
      margin-bottom: var(--space-xl);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
      letter-spacing: 0.03em;
      
      .material-icons-outlined {
        font-size: 16px;
        color: var(--color-accent-bright);
      }
    }
    
    h1 {
      margin-bottom: var(--space-xl);
      color: #ffffff;
      text-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
      
      .text-gradient {
        background: linear-gradient(135deg, #4db6ac 0%, #64b5f6 50%, #26a69a 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        filter: drop-shadow(0 2px 10px rgba(77, 182, 172, 0.4));
      }
    }
    
    .hero-description {
      font-size: 1.25rem;
      color: rgba(255, 255, 255, 0.92);
      margin-bottom: var(--space-2xl);
      max-width: 520px;
      line-height: 1.8;
      
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
      
      .btn-secondary {
        background: transparent;
        color: #ffffff;
        border: 2px solid #ffffff;
        font-weight: 600;
        
        &:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: #ffffff;
          color: #ffffff;
          backdrop-filter: blur(10px);
        }
        
        .material-icons-outlined {
          color: #ffffff;
        }
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
      padding: var(--space-md) var(--space-lg);
      background: rgba(255, 255, 255, 0.12);
      border-radius: var(--radius-md);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.18);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
      
      .stat-value {
        font-size: 2.25rem;
        font-weight: 700;
        color: #4db6ac;
        line-height: 1;
        text-shadow: 0 2px 12px rgba(77, 182, 172, 0.5);
      }
      
      .stat-label {
        font-size: 0.875rem;
        color: rgba(255, 255, 255, 0.9);
        margin-top: var(--space-xs);
        font-weight: 500;
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
      width: 360px;
      height: 360px;
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(20px);
      border: 2px solid rgba(255, 255, 255, 0.25);
      border-radius: var(--radius-xl);
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 
        0 20px 60px rgba(0, 0, 0, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
      position: relative;
      
      &::before {
        content: '';
        position: absolute;
        inset: -3px;
        border-radius: var(--radius-xl);
        background: linear-gradient(135deg, rgba(77, 182, 172, 0.5) 0%, rgba(100, 181, 246, 0.5) 100%);
        z-index: -1;
        opacity: 0.7;
      }
      
      .card-inner {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--space-md);
        
        .material-icons-outlined {
          font-size: 90px;
          color: #4db6ac;
          filter: drop-shadow(0 4px 16px rgba(77, 182, 172, 0.5));
        }
        
        span:last-child {
          font-size: 1.25rem;
          font-weight: 700;
          color: #ffffff;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
          letter-spacing: 0.05em;
        }
      }
    }
    
    .floating-elements {
      position: absolute;
      inset: -50px;
    }
    
    .float-element {
      position: absolute;
      width: 64px;
      height: 64px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.18);
      backdrop-filter: blur(12px);
      border: 2px solid rgba(255, 255, 255, 0.25);
      border-radius: var(--radius-lg);
      box-shadow: 0 8px 28px rgba(0, 0, 0, 0.25);
      animation: float 3s ease-in-out infinite;
      
      .material-icons-outlined {
        font-size: 28px;
        color: #4db6ac;
      }
      
      &.float-1 {
        top: 8%;
        left: -12%;
        animation-delay: 0s;
        background: rgba(77, 182, 172, 0.25);
        border-color: rgba(77, 182, 172, 0.35);
      }
      
      &.float-2 {
        top: 45%;
        right: -18%;
        animation-delay: 1s;
        background: rgba(100, 181, 246, 0.25);
        border-color: rgba(100, 181, 246, 0.35);
        
        .material-icons-outlined {
          color: #64b5f6;
        }
      }
      
      &.float-3 {
        bottom: 8%;
        left: 8%;
        animation-delay: 2s;
        background: rgba(38, 166, 154, 0.28);
        border-color: rgba(38, 166, 154, 0.4);
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
      background: 
        linear-gradient(180deg, 
          #f8fbff 0%, 
          rgba(227, 242, 253, 0.9) 20%, 
          rgba(224, 242, 241, 0.85) 50%, 
          rgba(241, 248, 254, 0.9) 80%, 
          #f8fbff 100%
        );
      position: relative;
      
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 5px;
        background: linear-gradient(90deg, 
          transparent 0%, 
          #00897b 15%, 
          #1565c0 50%, 
          #26a69a 85%, 
          transparent 100%
        );
      }
      
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 5px;
        background: linear-gradient(90deg, 
          transparent 0%, 
          #2196f3 15%, 
          #00897b 50%, 
          #1565c0 85%, 
          transparent 100%
        );
      }
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
      background: linear-gradient(145deg, #ffffff 0%, #f8fbff 100%);
      border: 2px solid rgba(21, 101, 192, 0.15);
      border-radius: var(--radius-lg);
      text-decoration: none;
      transition: all var(--transition-base);
      animation: fadeInUp 0.6s ease forwards;
      box-shadow: 
        0 4px 20px rgba(21, 101, 192, 0.1),
        0 2px 8px rgba(0, 137, 123, 0.08);
      position: relative;
      overflow: hidden;
      opacity: 0;
      
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, #00897b 0%, #1565c0 50%, #26a69a 100%);
        transform: scaleX(0);
        transform-origin: left;
        transition: transform var(--transition-base);
      }
      
      &:hover {
        border-color: var(--color-accent);
        transform: translateY(-8px);
        box-shadow: 
          0 12px 35px rgba(0, 137, 123, 0.2),
          0 6px 16px rgba(21, 101, 192, 0.15);
        
        &::before {
          transform: scaleX(1);
        }
        
        .category-icon {
          background: linear-gradient(135deg, #00897b 0%, #1565c0 100%);
          transform: scale(1.08);
          border-color: transparent;
          
          .material-icons-outlined {
            color: #ffffff;
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
      background: linear-gradient(145deg, #e0f2f1 0%, #e3f2fd 100%);
      border: 2px solid rgba(0, 137, 123, 0.2);
      border-radius: var(--radius-lg);
      margin-bottom: var(--space-lg);
      transition: all var(--transition-base);
      box-shadow: 0 2px 8px rgba(0, 137, 123, 0.1);
      
      .material-icons-outlined {
        font-size: 32px;
        color: #00897b;
        transition: all var(--transition-base);
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
      line-height: 1.6;
    }
    
    .category-link {
      display: flex;
      align-items: center;
      gap: var(--space-sm);
      font-size: 0.95rem;
      font-weight: 600;
      color: var(--color-blue);
      transition: all var(--transition-fast);
      
      .material-icons-outlined {
        font-size: 18px;
        transition: transform var(--transition-fast);
      }
      
      &:hover .material-icons-outlined {
        transform: translateX(4px);
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
          background: var(--gradient-accent-full);
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
      padding: var(--space-md);
      border-radius: var(--radius-md);
      transition: all var(--transition-fast);
      border: 2px solid transparent;
      
      &:hover {
        background: linear-gradient(145deg, rgba(224, 242, 241, 0.8) 0%, rgba(227, 242, 253, 0.6) 100%);
        border-color: rgba(0, 137, 123, 0.2);
        
        .feature-icon {
          background: linear-gradient(135deg, #00897b 0%, #1565c0 100%);
          border-color: transparent;
          box-shadow: 0 4px 16px rgba(0, 137, 123, 0.35);
          
          .material-icons-outlined {
            color: #ffffff;
          }
        }
      }
      
      .feature-icon {
        width: 52px;
        height: 52px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(145deg, #e0f2f1 0%, #e3f2fd 100%);
        border: 2px solid rgba(0, 137, 123, 0.2);
        border-radius: var(--radius-md);
        flex-shrink: 0;
        transition: all var(--transition-base);
        box-shadow: 0 2px 8px rgba(0, 137, 123, 0.1);
        
        .material-icons-outlined {
          font-size: 26px;
          color: #00897b;
          transition: color var(--transition-base);
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
        line-height: 1.6;
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
        background: linear-gradient(135deg, rgba(227, 242, 253, 0.9) 0%, rgba(224, 242, 241, 0.85) 100%);
        border: 2px solid rgba(21, 101, 192, 0.2);
        border-radius: var(--radius-xl);
        transform: rotate(-5deg);
        box-shadow: 
          0 8px 30px rgba(21, 101, 192, 0.15),
          0 4px 12px rgba(0, 137, 123, 0.1);
      }
      
      .visual-content {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--space-lg);
        padding: var(--space-3xl);
        background: linear-gradient(145deg, #ffffff 0%, #e0f2f1 50%, #e3f2fd 100%);
        border: 2px solid rgba(0, 137, 123, 0.25);
        border-radius: var(--radius-xl);
        box-shadow: 
          0 8px 30px rgba(0, 137, 123, 0.15),
          0 4px 12px rgba(21, 101, 192, 0.1),
          inset 0 1px 0 rgba(255, 255, 255, 0.8);
        
        .material-icons-outlined {
          font-size: 100px;
          background: linear-gradient(135deg, #00695c 0%, #00897b 50%, #26a69a 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 4px 12px rgba(0, 137, 123, 0.35));
        }
        
        .visual-text {
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          background: linear-gradient(135deg, #1565c0 0%, #2196f3 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      }
    }
    
    // CTA Section
    .cta-section {
      padding-bottom: 0;
      background: linear-gradient(135deg, #0a3d8f 0%, #1565c0 30%, #00695c 70%, #00897b 100%);
      color: #ffffff;
      position: relative;
      overflow: hidden;
      
      &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: 
          radial-gradient(ellipse 120% 80% at 80% 20%, rgba(77, 182, 172, 0.3) 0%, transparent 50%),
          radial-gradient(ellipse 100% 70% at 0% 80%, rgba(100, 181, 246, 0.25) 0%, transparent 40%),
          radial-gradient(ellipse 60% 40% at 50% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
        pointer-events: none;
      }
      
      h2, p {
        color: #ffffff;
      }
    }
    
    .cta-card {
      position: relative;
      padding: var(--space-4xl);
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(20px);
      border: 2px solid rgba(255, 255, 255, 0.25);
      border-radius: var(--radius-xl);
      overflow: hidden;
      box-shadow: 
        0 16px 48px rgba(0, 0, 0, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
      
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
        font-weight: 700;
      }
      
      p {
        font-size: 1.125rem;
        margin-bottom: var(--space-2xl);
        color: rgba(255, 255, 255, 0.9);
        line-height: 1.7;
      }
    }
    
    .cta-actions {
      display: flex;
      gap: var(--space-md);
      flex-wrap: wrap;
      
      .btn-cta {
        background: #ffffff;
        color: #0a3d8f;
        font-weight: 700;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
        
        &:hover {
          background: linear-gradient(135deg, #4db6ac 0%, #26a69a 100%);
          color: #ffffff;
          transform: translateY(-3px);
          box-shadow: 0 8px 28px rgba(77, 182, 172, 0.5);
        }
      }
      
      .btn-secondary {
        background: rgba(255, 255, 255, 0.1);
        color: #ffffff;
        border: 2px solid rgba(255, 255, 255, 0.4);
        
        &:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: #ffffff;
          color: #ffffff;
          box-shadow: 0 4px 16px rgba(255, 255, 255, 0.15);
        }
      }
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
        border: 2px solid rgba(255, 255, 255, 0.2);
        
        &:first-child {
          width: 450px;
          height: 450px;
          right: -120px;
          top: -120px;
          background: radial-gradient(circle, rgba(77, 182, 172, 0.15) 0%, transparent 70%);
          border-color: rgba(77, 182, 172, 0.25);
        }
        
        &:last-child {
          width: 320px;
          height: 320px;
          right: 40px;
          bottom: -60px;
          border-color: rgba(100, 181, 246, 0.35);
          background: radial-gradient(circle, rgba(100, 181, 246, 0.12) 0%, transparent 70%);
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
  
  carouselItems: CarouselItem[] = [
    {
      id: 1,
      icon: 'precision_manufacturing',
      title: 'Equipos Trimmer',
      description: 'Maquinaria de corte de precisión para aplicaciones industriales complejas.',
      price: 'Consultar'
    },
    {
      id: 2,
      icon: 'bolt',
      title: 'Rectificadores Industrial',
      description: 'Equipos de rectificación de alta potencia para procesos de manufactura.',
      price: 'Consultar'
    },
    {
      id: 3,
      icon: 'inventory_2',
      title: 'Insumos Industriales',
      description: 'Repuestos y consumibles de calidad para mantenimiento continuo.',
      price: 'Desde $5.000'
    },
    {
      id: 4,
      icon: 'shield_admin',
      title: 'Equipos de Protección',
      description: 'EPP certificados y equipos de seguridad para ambientes industriales.',
      price: 'Desde $2.500'
    },
    {
      id: 5,
      icon: 'engineering',
      title: 'Servicios Técnicos',
      description: 'Instalación, mantenimiento y asesoría técnica especializada.',
      price: 'Según servicio'
    },
    {
      id: 6,
      icon: 'lightbulb',
      title: 'Soluciones Personalizadas',
      description: 'Diseño y desarrollo de soluciones a medida para tu operación.',
      price: 'Presupuesto'
    }
  ];

  ngOnInit() {
    this.api.getCategories().subscribe(cats => {
      this.categories = cats;
    });
  }
}

