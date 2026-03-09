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
    <!-- Decorative bar above footer -->
    <div class="footer-deco-bar"></div>
    
    <footer>
      <div class="container">
        <div class="footer-grid">
          <!-- Company Info -->
          <div class="footer-brand">
            <a routerLink="/" class="footer-logo">
              <img src="assets/images/logo.png" alt="Metplas Technologies" class="logo-image">
            </a>
            <p class="footer-desc">
              Soluciones Tecnológicas e industriales de alta calidad para la industria Chilena.
            </p>
          </div>
          
          <!-- Quick Links -->
          <div class="footer-col">
            <h4>{{ 'footer.navigation' | translate }}</h4>
            <nav>
              <a routerLink="/">{{ 'nav.home' | translate }}</a>
              <a routerLink="/somos">{{ 'nav.about' | translate }}</a>
              <a routerLink="/catalogo">{{ 'nav.catalog' | translate }}</a>
              <a routerLink="/contacto">{{ 'nav.contact' | translate }}</a>
            </nav>
          </div>
          
          <!-- Catalog -->
          <div class="footer-col">
            <h4>{{ 'footer.catalog' | translate }}</h4>
            <nav>
              <a routerLink="/catalogo">Equipos</a>
              <a routerLink="/catalogo">Insumos</a>
              <a routerLink="/catalogo">Servicios</a>
              <a routerLink="/catalogo">Innovación y Desarrollo</a>
            </nav>
          </div>
          
          <!-- Contact -->
          <div class="footer-col">
            <h4>Contacto</h4>
            <div class="contact-items">
              <a [href]="phoneHref" class="contact-row">
                <span class="material-icons-outlined">phone</span>
                {{ company?.phone || '+569 9615 4315' }}
              </a>
              <a [href]="'mailto:' + (company?.email || 'contacto@metplastech.cl')" class="contact-row">
                <span class="material-icons-outlined">mail</span>
                {{ company?.email || 'contacto@metplastech.cl' }}
              </a>
              <span class="contact-row">
                <span class="material-icons-outlined">location_on</span>
                {{ company?.address || 'Curicó – Región del Maule – Chile' }}
              </span>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; {{ currentYear }} Metplastech Technologies SPA. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer-deco-bar {
      height: 12px;
      background: linear-gradient(to bottom,
        #4FAD47 0%, #4FAD47 25%,
        #2667A9 25%, #2667A9 75%,
        #4FAD47 75%, #4FAD47 100%
      );
    }
    
    footer {
      background: #fff;
      padding: 4rem 0 1.5rem;
    }
    
    .footer-grid {
      display: grid;
      grid-template-columns: 1.5fr repeat(3, 1fr);
      gap: 3rem;
      
      @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
      }
      
      @media (max-width: 640px) {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
    }
    
    .footer-brand {
      .footer-logo {
        display: inline-flex;
        margin-bottom: 1rem;
        text-decoration: none;
        
        &:hover .logo-image {
          transform: translateY(-2px);
        }
      }
      
      .logo-image {
        height: 48px;
        width: auto;
        transition: transform 0.3s ease;
      }
    }
    
    .footer-desc {
      font-size: 0.9rem;
      color: #718096;
      line-height: 1.6;
      font-style: italic;
    }
    
    .footer-col {
      h4 {
        font-size: 1rem;
        font-weight: 700;
        color: #204C81;
        margin-bottom: 1rem;
        text-decoration: underline;
        text-underline-offset: 4px;
        text-decoration-color: #2667A9;
        text-decoration-thickness: 2px;
      }
      
      nav {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        
        a {
          color: #4a5568;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          transition: all 0.2s ease;
          
          &:hover {
            color: #2667A9;
            padding-left: 6px;
          }
        }
      }
    }
    
    .contact-items {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }
    
    .contact-row {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      color: #4a5568;
      font-size: 0.9rem;
      text-decoration: none;
      transition: color 0.2s ease;
      
      .material-icons-outlined {
        font-size: 18px;
        color: #2667A9;
        flex-shrink: 0;
        margin-top: 2px;
      }
      
      &:hover { color: #2667A9; }
    }
    
    .footer-bottom {
      margin-top: 3rem;
      padding-top: 1.5rem;
      border-top: 2px solid #e2e8f0;
      
      p {
        font-size: 0.85rem;
        color: #718096;
        margin: 0;
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
