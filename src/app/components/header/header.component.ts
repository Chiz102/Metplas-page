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
            <div class="dropdown-menu" style="max-height: 320px; overflow-y: auto; min-width: 260px;">
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
              (click)="setLanguage('es')"
              [attr.aria-label]="'Español'">
              ES
            </button>
            <button 
              class="lang-btn" 
              [class.active]="languageService.currentLanguage() === 'en'"
              (click)="setLanguage('en')"
              [attr.aria-label]="'English'">
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
    </header>
  `,
  styles: [`
    header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      padding: var(--space-md) 0;
      transition: all var(--transition-base);
      
      &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, rgba(248, 251, 255, 0.95) 0%, rgba(248, 251, 255, 0.9) 100%);
        backdrop-filter: blur(20px) saturate(180%);
        -webkit-backdrop-filter: blur(20px) saturate(180%);
        border-bottom: 1px solid transparent;
        transition: all var(--transition-base);
      }
      
      &.scrolled::before {
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 251, 255, 0.96) 100%);
        border-bottom-color: rgba(21, 101, 192, 0.15);
        box-shadow: 
          0 4px 20px rgba(21, 101, 192, 0.1),
          0 2px 8px rgba(0, 137, 123, 0.08);
      }
    }
    
    nav {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--space-xl);
      z-index: 1;
    }
    
    .logo {
      display: flex;
      align-items: center;
      text-decoration: none;
      
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
    
    .nav-links {
      display: flex;
      align-items: center;
      gap: var(--space-lg);
      
      > a, .dropdown-trigger {
        display: flex;
        align-items: center;
        gap: var(--space-xs);
        padding: var(--space-sm) var(--space-md);
        font-size: 0.95rem;
        font-weight: 500;
        color: #2c4a6b;
        text-decoration: none;
        border-radius: var(--radius-md);
        transition: all var(--transition-fast);
        
        &:hover {
          color: #1565c0;
          background: linear-gradient(145deg, rgba(227, 242, 253, 0.8) 0%, rgba(224, 242, 241, 0.6) 100%);
          transform: translateY(-1px);
        }
        
        &.active {
          color: #00897b;
          background: linear-gradient(145deg, rgba(224, 242, 241, 0.9) 0%, rgba(227, 242, 253, 0.7) 100%);
          font-weight: 600;
          box-shadow: 0 2px 8px rgba(0, 137, 123, 0.15);
        }
        
        .material-icons-outlined {
          font-size: 18px;
          transition: transform var(--transition-fast);
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
      min-width: 260px;
      padding: var(--space-sm);
      background: linear-gradient(145deg, #ffffff 0%, #f8fbff 100%);
      border: 2px solid rgba(21, 101, 192, 0.15);
      border-radius: var(--radius-lg);
      box-shadow: 
        0 8px 30px rgba(21, 101, 192, 0.15),
        0 4px 12px rgba(0, 137, 123, 0.1);
      opacity: 0;
      visibility: hidden;
      transform: translateY(10px);
      transition: all var(--transition-base);
      max-height: 320px;
      overflow-y: auto;
      min-width: 260px;
      scrollbar-width: thin;
      scrollbar-color: var(--color-blue) var(--color-blue-bg);
      
      a {
        display: flex;
        align-items: center;
        gap: var(--space-md);
        padding: var(--space-md);
        color: #2c4a6b;
        text-decoration: none;
        border-radius: var(--radius-md);
        transition: all var(--transition-fast);
        
        &:hover {
          background: linear-gradient(145deg, rgba(224, 242, 241, 0.8) 0%, rgba(227, 242, 253, 0.6) 100%);
          color: #00897b;
          
          .material-icons-outlined {
            transform: scale(1.1);
            color: #00897b;
          }
        }
        
        .material-icons-outlined {
          font-size: 22px;
          color: #1565c0;
          transition: all var(--transition-fast);
        }
      }
    }
    
    .dropdown-menu::-webkit-scrollbar {
      width: 8px;
      background: var(--color-blue-bg);
      border-radius: 8px;
    }
    .dropdown-menu::-webkit-scrollbar-thumb {
      background: var(--color-blue);
      border-radius: 8px;
    }
    
    .header-actions {
      display: flex !important;
      align-items: center;
      gap: var(--space-md);
      position: relative;
      z-index: 1001;
    }
    
    .language-selector {
      display: flex !important;
      visibility: visible !important;
      opacity: 1 !important;
      align-items: center;
      gap: 0;
      padding: 3px;
      background: linear-gradient(145deg, #f8fbff 0%, #ffffff 100%);
      border: 2px solid rgba(21, 101, 192, 0.2);
      border-radius: var(--radius-full);
      position: relative;
      z-index: 1002;
      box-shadow: 0 2px 8px rgba(21, 101, 192, 0.1);
      
      .lang-btn {
        padding: var(--space-xs) var(--space-sm);
        font-size: 0.75rem;
        font-weight: 600;
        color: #5c7a99;
        background: transparent;
        border: none;
        border-radius: var(--radius-full);
        cursor: pointer;
        transition: all var(--transition-fast);
        min-width: 32px;
        text-align: center;
        line-height: 1.2;
        letter-spacing: 0.02em;
        
        &:hover {
          color: #1565c0;
          background: rgba(21, 101, 192, 0.1);
        }
        
        &.active {
          color: #ffffff;
          background: linear-gradient(135deg, #1565c0 0%, #2196f3 100%);
          box-shadow: 0 2px 8px rgba(21, 101, 192, 0.3);
          font-weight: 700;
        }
      }
    }
    
    .phone-link {
      display: flex;
      align-items: center;
      gap: var(--space-sm);
      padding: var(--space-sm) var(--space-md);
      color: #00897b;
      text-decoration: none;
      background: linear-gradient(145deg, #e0f2f1 0%, #ffffff 100%);
      border: 2px solid rgba(0, 137, 123, 0.25);
      border-radius: var(--radius-full);
      transition: all var(--transition-fast);
      
      &:hover {
        background: linear-gradient(135deg, #00897b 0%, #26a69a 100%);
        border-color: #00897b;
        color: #ffffff;
        box-shadow: 0 4px 16px rgba(0, 137, 123, 0.35);
        transform: translateY(-2px);
        
        .material-icons-outlined {
          color: #ffffff;
        }
      }
      
      .material-icons-outlined {
        font-size: 18px;
        color: #00897b;
        transition: color var(--transition-fast);
      }
      
      .phone-text {
        font-size: 0.875rem;
        font-weight: 600;
      }
    }
    
    .menu-toggle {
      display: none;
      width: 44px;
      height: 44px;
      align-items: center;
      justify-content: center;
      background: transparent;
      border: 1px solid var(--color-border);
      border-radius: var(--radius-md);
      color: var(--color-text-primary);
      cursor: pointer;
      transition: all var(--transition-fast);
      
      &:hover {
        border-color: var(--color-accent);
        color: var(--color-accent);
      }
    }
    
    @media (max-width: 1024px) {
      .phone-text {
        display: none;
      }
      
      .phone-link {
        padding: var(--space-sm);
      }
      
      .language-selector {
        order: -1;
      }
    }
    
    @media (max-width: 768px) {
      .menu-toggle {
        display: flex;
      }
      
      .nav-links {
        position: fixed;
        top: 70px;
        left: 0;
        right: 0;
        bottom: 0;
        flex-direction: column;
        align-items: stretch;
        padding: var(--space-lg);
        background: var(--color-primary);
        opacity: 0;
        visibility: hidden;
        transform: translateX(100%);
        transition: all var(--transition-base);
        overflow-y: auto;
        
        &.active {
          opacity: 1;
          visibility: visible;
          transform: translateX(0);
        }
        
        > a, .dropdown-trigger {
          padding: var(--space-md);
          font-size: 1.125rem;
        }
        
        .dropdown {
          .dropdown-menu {
            position: static;
            opacity: 1;
            visibility: visible;
            transform: none;
            box-shadow: none;
            background: transparent;
            border: none;
            padding-left: var(--space-lg);
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

