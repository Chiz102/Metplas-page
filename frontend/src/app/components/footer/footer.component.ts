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
              <img src="assets/images/logo.png" alt="Metplas Technologies" class="logo-image">
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
      background: linear-gradient(180deg, 
        rgba(232, 241, 248, 0.9) 0%, 
        rgba(232, 245, 235, 0.8) 30%, 
        rgba(248, 250, 252, 0.95) 70%, 
        #f8fafc 100%
      );
      border-top: 5px solid transparent;
      border-image: linear-gradient(90deg, #104F8E 0%, #229443 50%, #1a6bc4 100%) 1;
      padding: var(--space-4xl) 0 var(--space-xl);
      margin-top: var(--space-4xl);
      position: relative;
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
        text-decoration: none;
        margin-bottom: var(--space-lg);
        transition: all var(--transition-base);
        
        &:hover {
          .logo-image {
            filter: drop-shadow(0 4px 12px rgba(16, 79, 142, 0.3));
            transform: translateY(-2px);
          }
        }
      }
      
      .logo-image {
        height: 48px;
        width: auto;
        transition: all var(--transition-base);
      }
    }
    
    .footer-description {
      color: var(--color-text-secondary);
      font-size: 0.95rem;
      line-height: 1.7;
      margin-bottom: var(--space-lg);
    }
    
    .social-links {
      display: flex;
      gap: var(--space-sm);
      
      a {
        width: 42px;
        height: 42px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(145deg, #ffffff 0%, #f8fbff 100%);
        border: 2px solid rgba(21, 101, 192, 0.2);
        border-radius: var(--radius-md);
        color: #1565c0;
        transition: all var(--transition-fast);
        
        &:hover {
          background: linear-gradient(135deg, #1565c0 0%, #2196f3 100%);
          border-color: #1565c0;
          color: #ffffff;
          transform: translateY(-3px);
          box-shadow: 0 4px 16px rgba(21, 101, 192, 0.35);
        }
      }
    }
    
    .footer-section {
      h4 {
        font-size: 1rem;
        font-weight: 700;
        color: #0d2137;
        margin-bottom: var(--space-lg);
        padding-bottom: var(--space-sm);
        border-bottom: 3px solid;
        border-image: linear-gradient(90deg, #00897b 0%, #1565c0 100%) 1;
        display: inline-block;
      }
      
      nav {
        display: flex;
        flex-direction: column;
        gap: var(--space-sm);
        
        a {
          color: #2c4a6b;
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
          transition: all var(--transition-fast);
          padding: var(--space-xs) 0;
          border-radius: var(--radius-sm);
          
          &:hover {
            color: #00897b;
            padding-left: var(--space-sm);
            background: linear-gradient(90deg, rgba(224, 242, 241, 0.8) 0%, transparent 100%);
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
        color: #2c4a6b;
        font-size: 0.95rem;
        text-decoration: none;
        transition: all var(--transition-fast);
        padding: var(--space-xs);
        border-radius: var(--radius-sm);
        
        .material-icons-outlined {
          font-size: 20px;
          color: #1565c0;
          flex-shrink: 0;
          margin-top: 1px;
        }
      }
      
      a:hover {
        color: #00897b;
        background: linear-gradient(90deg, rgba(224, 242, 241, 0.8) 0%, transparent 100%);
        
        .material-icons-outlined {
          color: #00897b;
        }
      }
    }
    
    .footer-bottom {
      margin-top: var(--space-3xl);
      padding-top: var(--space-xl);
      border-top: 2px solid;
      border-image: linear-gradient(90deg, transparent 0%, rgba(21, 101, 192, 0.2) 20%, rgba(0, 137, 123, 0.2) 80%, transparent 100%) 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: var(--space-md);
      
      p {
        color: #5c7a99;
        font-size: 0.875rem;
        margin: 0;
      }
      
      .credits {
        .heart {
          color: #00897b;
          display: inline-block;
          animation: pulse 1.5s ease infinite;
        }
      }
      
      @media (max-width: 640px) {
        flex-direction: column;
        text-align: center;
      }
    }
    
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.2); }
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

