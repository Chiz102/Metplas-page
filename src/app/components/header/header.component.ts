import { Component, signal, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../core/services/language.service';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, TranslateModule],
  template: `
    <header [class.scrolled]="isScrolled()">
      <nav class="container">
        <a routerLink="/" class="logo">
          <img src="assets/images/logo.png" alt="Metplas Technologies" class="logo-image">
        </a>

        <div class="nav-links" [class.active]="menuOpen()">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" 
             (click)="closeMenu()">{{ 'nav.home' | translate }}</a>
          <a routerLink="/somos" routerLinkActive="active" (click)="closeMenu()">{{ 'nav.about' | translate }}</a>
          
          <div class="dropdown">
            <a routerLink="/catalogo" routerLinkActive="active" class="dropdown-trigger">
              {{ 'nav.catalog' | translate }}
              <span class="material-icons-outlined">expand_more</span>
            </a>
            <div class="dropdown-menu">
              <a *ngFor="let supplier of suppliers()" [routerLink]="['/catalogo', supplier.slug]" (click)="closeMenu()">
                <span class="material-icons-outlined">business</span>
                {{ supplier.name }}
              </a>
            </div>
          </div>
          
          <a routerLink="/contacto" routerLinkActive="active" (click)="closeMenu()">{{ 'nav.contact' | translate }}</a>
        </div>

        <div class="header-actions">
          <div class="language-selector">
            <button 
              class="lang-btn" 
              [class.active]="languageService.currentLanguage() === 'es'"
              (click)="setLanguage('es')">
              ES
            </button>
            <button 
              class="lang-btn" 
              [class.active]="languageService.currentLanguage() === 'en'"
              (click)="setLanguage('en')">
              EN
            </button>
          </div>
          
          <a href="tel:+56996154315" class="phone-link">
            <span class="material-icons-outlined">phone</span>
            <span class="phone-text">+569 9615 4315</span>
          </a>
          
          <button class="menu-toggle" (click)="toggleMenu()" [attr.aria-expanded]="menuOpen()">
            <span class="material-icons-outlined">{{ menuOpen() ? 'close' : 'menu' }}</span>
          </button>
        </div>
      </nav>
      <!-- Green accent line under header -->
      <div class="header-accent-line"></div>
    </header>
  `,
  styles: [`
    header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      background: linear-gradient(135deg, #0a2540 0%, #104F8E 100%);
      transition: all 0.3s ease;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
      
      &.scrolled {
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
      }
    }
    
    .header-accent-line {
      height: 4px;
      background: linear-gradient(90deg, #229443 0%, #35b856 50%, #229443 100%);
    }
    
    nav {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1.5rem;
      padding: 0.75rem 0;
    }
    
    .logo {
      display: flex;
      align-items: center;
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
    
    .nav-links {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      
      > a, .dropdown-trigger {
        display: flex;
        align-items: center;
        gap: 4px;
        padding: 8px 16px;
        font-size: 0.9rem;
        font-weight: 700;
        color: rgba(255, 255, 255, 0.85);
        text-decoration: none;
        border-radius: 8px;
        transition: all 0.2s ease;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        
        &:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.1);
        }
        
        &.active {
          color: #fff;
          text-decoration: underline;
          text-underline-offset: 4px;
          text-decoration-thickness: 2px;
          text-decoration-color: #229443;
        }
        
        .material-icons-outlined {
          font-size: 18px;
          transition: transform 0.2s ease;
        }
      }
    }
    
    .dropdown {
      position: relative;
      
      &:hover {
        .dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        .dropdown-trigger .material-icons-outlined {
          transform: rotate(180deg);
        }
      }
    }
    
    .dropdown-menu {
      position: absolute;
      top: 100%;
      left: 0;
      min-width: 240px;
      padding: 8px;
      background: #fff;
      border: 2px solid #e2e8f0;
      border-radius: 12px;
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
      opacity: 0;
      visibility: hidden;
      transform: translateY(8px);
      transition: all 0.25s ease;
      max-height: 320px;
      overflow-y: auto;
      
      a {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px 14px;
        color: #0a2540;
        text-decoration: none;
        border-radius: 8px;
        font-size: 0.9rem;
        font-weight: 500;
        transition: all 0.2s ease;
        
        &:hover {
          background: #f0f9ff;
          color: #104F8E;
        }
        
        .material-icons-outlined {
          font-size: 20px;
          color: #104F8E;
        }
      }
    }
    
    .header-actions {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
    
    .language-selector {
      display: flex;
      align-items: center;
      padding: 3px;
      background: rgba(255, 255, 255, 0.1);
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-radius: 100px;
      
      .lang-btn {
        padding: 4px 10px;
        font-size: 0.75rem;
        font-weight: 700;
        color: rgba(255, 255, 255, 0.6);
        background: transparent;
        border: none;
        border-radius: 100px;
        cursor: pointer;
        transition: all 0.2s ease;
        
        &:hover { color: #fff; }
        
        &.active {
          color: #0a2540;
          background: #fff;
        }
      }
    }
    
    .phone-link {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 8px 16px;
      color: #fff;
      text-decoration: none;
      background: transparent;
      border: 2px solid rgba(255, 255, 255, 0.35);
      border-radius: 100px;
      transition: all 0.2s ease;
      
      &:hover {
        background: rgba(255, 255, 255, 0.15);
        border-color: rgba(255, 255, 255, 0.6);
      }
      
      .material-icons-outlined {
        font-size: 16px;
        color: #229443;
        transition: color 0.2s ease;
      }
      
      .phone-text {
        font-size: 0.85rem;
        font-weight: 700;
      }
    }
    
    .menu-toggle {
      display: none;
      width: 44px;
      height: 44px;
      align-items: center;
      justify-content: center;
      background: transparent;
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-radius: 10px;
      color: #fff;
      cursor: pointer;
      transition: all 0.2s ease;
      
      &:hover {
        border-color: rgba(255, 255, 255, 0.6);
        background: rgba(255, 255, 255, 0.1);
      }
    }
    
    @media (max-width: 1024px) {
      .phone-text { display: none; }
      .phone-link { padding: 8px; }
    }
    
    @media (max-width: 768px) {
      .menu-toggle { display: flex; }
      
      .nav-links {
        position: fixed;
        top: 70px;
        left: 0;
        right: 0;
        bottom: 0;
        flex-direction: column;
        align-items: stretch;
        padding: 1rem;
        background: linear-gradient(180deg, #0a2540 0%, #104F8E 100%);
        opacity: 0;
        visibility: hidden;
        transform: translateX(100%);
        transition: all 0.3s ease;
        overflow-y: auto;
        
        &.active {
          opacity: 1;
          visibility: visible;
          transform: translateX(0);
        }
        
        > a, .dropdown-trigger {
          padding: 12px;
          font-size: 1.1rem;
        }
        
        .dropdown .dropdown-menu {
          position: static;
          opacity: 1;
          visibility: visible;
          transform: none;
          box-shadow: none;
          border: none;
          padding-left: 1rem;
          background: transparent;
          
          a {
            color: rgba(255, 255, 255, 0.8);
            
            &:hover {
              color: #fff;
              background: rgba(255, 255, 255, 0.1);
            }
            
            .material-icons-outlined { color: #229443; }
          }
        }
      }
    }
  `]
})
export class HeaderComponent {
  languageService = inject(LanguageService);
  api = inject(ApiService);
  isScrolled = signal(false);
  menuOpen = signal(false);
  suppliers = signal<any[]>([]);

  constructor() {
    this.api.getSuppliers().subscribe(suppliers => {
      this.suppliers.set(suppliers);
    });
  }

  setLanguage(lang: 'es' | 'en') {
    this.languageService.setLanguage(lang);
  };

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }
}
