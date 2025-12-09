import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ApiService } from '../../core/services/api.service';
import { CompanyInfo } from '../../core/models/catalog.model';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule],
  template: `
    <footer>
      <div class="container">
        <div class="footer-grid">
          <!-- Company Info -->
          <div class="footer-brand">
            <a routerLink="/" class="footer-logo">
              <span class="logo-icon">
                <span class="material-icons-outlined">hub</span>
              </span>
              <span class="logo-text">
                <span class="logo-name">METPLASTECH</span>
                <span class="logo-tagline">Technologies SPA</span>
              </span>
            </a>
            <p class="footer-description">
              {{ 'footer.description' | translate }}
            </p>
            <div class="social-links">
              @if (company?.facebook) {
                <a [href]="company?.facebook" target="_blank" rel="noopener" aria-label="Facebook">
                  <span class="material-icons-outlined">facebook</span>
                </a>
              }
              @if (company?.instagram) {
                <a [href]="company?.instagram" target="_blank" rel="noopener" aria-label="Instagram">
                  <span class="material-icons-outlined">photo_camera</span>
                </a>
              }
              @if (company?.linkedin) {
                <a [href]="company?.linkedin" target="_blank" rel="noopener" aria-label="LinkedIn">
                  <span class="material-icons-outlined">work</span>
                </a>
              }
            </div>
          </div>
          
          <!-- Quick Links -->
          <div class="footer-section">
            <h4>{{ 'footer.navigation' | translate }}</h4>
            <nav>
              <a routerLink="/">{{ 'nav.home' | translate }}</a>
              <a routerLink="/somos">{{ 'nav.about' | translate }}</a>
              <a routerLink="/catalogo">{{ 'nav.catalog' | translate }}</a>
              <a routerLink="/contacto">{{ 'nav.contact' | translate }}</a>
            </nav>
          </div>
          
          <!-- Catalog -->
          <div class="footer-section">
            <h4>{{ 'footer.catalog' | translate }}</h4>
            <nav>
              <a routerLink="/catalogo/equipos">{{ 'nav.equipment' | translate }}</a>
              <a routerLink="/catalogo/insumos">{{ 'nav.supplies' | translate }}</a>
              <a routerLink="/catalogo/servicios">{{ 'nav.services' | translate }}</a>
              <a routerLink="/catalogo/innovacion">{{ 'nav.innovation' | translate }}</a>
            </nav>
          </div>
          
          <!-- Contact -->
          <div class="footer-section">
            <h4>{{ 'footer.contact' | translate }}</h4>
            <div class="contact-info">
              <a [href]="phoneHref">
                <span class="material-icons-outlined">phone</span>
                {{ company?.phone || '+569 9615 4315' }}
              </a>
              <a [href]="'mailto:' + (company?.email || 'contacto@metplastech.cl')">
                <span class="material-icons-outlined">mail</span>
                {{ company?.email || 'contacto@metplastech.cl' }}
              </a>
              <span class="address">
                <span class="material-icons-outlined">location_on</span>
                {{ company?.address || 'Curicó – Región del Maule – Chile' }}
              </span>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; {{ currentYear }} {{ 'footer.rightsReserved' | translate }}</p>
          <p class="credits">{{ 'footer.developedWith' | translate }} <span class="heart">♥</span> {{ 'footer.inChile' | translate }}</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    footer {
      background: var(--color-primary-light);
      border-top: 1px solid var(--color-border);
      padding: var(--space-4xl) 0 var(--space-xl);
      margin-top: var(--space-4xl);
    }
    
    .footer-grid {
      display: grid;
      grid-template-columns: 1.5fr repeat(3, 1fr);
      gap: var(--space-3xl);
      
      @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
      }
      
      @media (max-width: 640px) {
        grid-template-columns: 1fr;
        gap: var(--space-2xl);
      }
    }
    
    .footer-brand {
      .footer-logo {
        display: inline-flex;
        align-items: center;
        gap: var(--space-sm);
        text-decoration: none;
        color: var(--color-text-primary);
        margin-bottom: var(--space-lg);
        
        &:hover {
          color: var(--color-text-primary);
        }
      }
      
      .logo-icon {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-secondary) 100%);
        border-radius: var(--radius-md);
        color: var(--color-primary);
        
        .material-icons-outlined {
          font-size: 22px;
        }
      }
      
      .logo-text {
        display: flex;
        flex-direction: column;
        line-height: 1.1;
      }
      
      .logo-name {
        font-size: 1rem;
        font-weight: 700;
        letter-spacing: 0.05em;
      }
      
      .logo-tagline {
        font-size: 0.7rem;
        color: var(--color-accent);
        letter-spacing: 0.08em;
      }
    }
    
    .footer-description {
      color: var(--color-text-muted);
      font-size: 0.95rem;
      line-height: 1.6;
      margin-bottom: var(--space-lg);
    }
    
    .social-links {
      display: flex;
      gap: var(--space-sm);
      
      a {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
        color: var(--color-text-secondary);
        transition: all var(--transition-fast);
        
        &:hover {
          background: var(--color-accent);
          border-color: var(--color-accent);
          color: var(--color-primary);
        }
      }
    }
    
    .footer-section {
      h4 {
        font-size: 1rem;
        font-weight: 600;
        color: var(--color-text-primary);
        margin-bottom: var(--space-lg);
        padding-bottom: var(--space-sm);
        border-bottom: 2px solid var(--color-accent);
        display: inline-block;
      }
      
      nav {
        display: flex;
        flex-direction: column;
        gap: var(--space-sm);
        
        a {
          color: var(--color-text-muted);
          text-decoration: none;
          font-size: 0.95rem;
          transition: all var(--transition-fast);
          
          &:hover {
            color: var(--color-accent);
            padding-left: var(--space-sm);
          }
        }
      }
    }
    
    .contact-info {
      display: flex;
      flex-direction: column;
      gap: var(--space-md);
      
      a, span.address {
        display: flex;
        align-items: flex-start;
        gap: var(--space-sm);
        color: var(--color-text-muted);
        font-size: 0.95rem;
        text-decoration: none;
        transition: color var(--transition-fast);
        
        .material-icons-outlined {
          font-size: 18px;
          color: var(--color-accent);
          flex-shrink: 0;
          margin-top: 2px;
        }
      }
      
      a:hover {
        color: var(--color-accent);
      }
    }
    
    .footer-bottom {
      margin-top: var(--space-3xl);
      padding-top: var(--space-xl);
      border-top: 1px solid var(--color-border);
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: var(--space-md);
      
      p {
        color: var(--color-text-muted);
        font-size: 0.875rem;
        margin: 0;
      }
      
      .credits {
        .heart {
          color: #ff4444;
        }
      }
      
      @media (max-width: 640px) {
        flex-direction: column;
        text-align: center;
      }
    }
  `]
})
export class FooterComponent implements OnInit {
  private api = inject(ApiService);
  company: CompanyInfo | null = null;
  currentYear = new Date().getFullYear();

  get phoneHref(): string {
    const phone = this.company?.phone || '+569 9615 4315';
    return 'tel:' + phone.replace(/\s/g, '');
  }

  ngOnInit() {
    this.api.getCompanyInfo().subscribe(info => {
      this.company = info;
    });
  }
}

