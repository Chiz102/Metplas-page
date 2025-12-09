import { Component, signal, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, TranslateModule],
  template: `
    <header [class.scrolled]="isScrolled()">
      <nav class="container">
        <a routerLink="/" class="logo">
          <span class="logo-icon">
            <span class="material-icons-outlined">hub</span>
          </span>
          <span class="logo-text">
            <span class="logo-name">METPLASTECH</span>
            <span class="logo-tagline">Technologies</span>
          </span>
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
              <a routerLink="/catalogo/equipos" (click)="closeMenu()">
                <span class="material-icons-outlined">precision_manufacturing</span>
                {{ 'nav.equipment' | translate }}
              </a>
              <a routerLink="/catalogo/insumos" (click)="closeMenu()">
                <span class="material-icons-outlined">inventory_2</span>
                {{ 'nav.supplies' | translate }}
              </a>
              <a routerLink="/catalogo/servicios" (click)="closeMenu()">
                <span class="material-icons-outlined">engineering</span>
                {{ 'nav.services' | translate }}
              </a>
              <a routerLink="/catalogo/innovacion" (click)="closeMenu()">
                <span class="material-icons-outlined">lightbulb</span>
                {{ 'nav.innovation' | translate }}
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
        background: rgba(255, 255, 255, 0.92);
        backdrop-filter: blur(20px) saturate(180%);
        -webkit-backdrop-filter: blur(20px) saturate(180%);
        border-bottom: 1px solid transparent;
        transition: all var(--transition-base);
      }
      
      &.scrolled::before {
        background: rgba(255, 255, 255, 0.98);
        border-bottom-color: rgba(30, 64, 175, 0.1);
        box-shadow: 0 4px 16px rgba(30, 64, 175, 0.08);
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
      gap: var(--space-sm);
      text-decoration: none;
      color: var(--color-text-primary);
      
      &:hover {
        color: var(--color-text-primary);
        
        .logo-icon {
          box-shadow: 0 4px 16px rgba(16, 185, 129, 0.4);
          transform: scale(1.05);
        }
      }
    }
    
    .logo-icon {
      width: 44px;
      height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--color-green-gradient);
      border-radius: var(--radius-md);
      color: #ffffff;
      transition: all var(--transition-base);
      box-shadow: 0 2px 8px rgba(16, 185, 129, 0.2);
      
      .material-icons-outlined {
        font-size: 24px;
      }
    }
    
    .logo-text {
      display: flex;
      flex-direction: column;
      line-height: 1.1;
    }
    
    .logo-name {
      font-size: 1.125rem;
      font-weight: 700;
      letter-spacing: 0.05em;
    }
    
    .logo-tagline {
      font-size: 0.75rem;
      font-weight: 400;
      color: var(--color-accent);
      letter-spacing: 0.1em;
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
        color: var(--color-text-secondary);
        text-decoration: none;
        border-radius: var(--radius-md);
        transition: all var(--transition-fast);
        
        &:hover, &.active {
          color: var(--color-accent);
          background: rgba(16, 185, 129, 0.12);
          transform: translateY(-1px);
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
      min-width: 240px;
      padding: var(--space-sm);
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-elevated);
      opacity: 0;
      visibility: hidden;
      transform: translateY(10px);
      transition: all var(--transition-base);
      
      a {
        display: flex;
        align-items: center;
        gap: var(--space-md);
        padding: var(--space-md);
        color: var(--color-text-secondary);
        text-decoration: none;
        border-radius: var(--radius-md);
        transition: all var(--transition-fast);
        
        &:hover {
          background: rgba(34, 197, 94, 0.1);
          color: var(--color-accent);
        }
        
        .material-icons-outlined {
          font-size: 20px;
          color: var(--color-accent);
        }
      }
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
      padding: 2px;
      background: var(--color-primary-light);
      border: 1px solid var(--color-border-blue);
      border-radius: var(--radius-full);
      position: relative;
      z-index: 1002;
      box-shadow: 0 1px 3px rgba(30, 64, 175, 0.08);
      
      .lang-btn {
        padding: var(--space-xs) var(--space-sm);
        font-size: 0.75rem;
        font-weight: 600;
        color: var(--color-text-secondary);
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
          color: var(--color-blue);
          background: rgba(30, 64, 175, 0.08);
        }
        
        &.active {
          color: #ffffff;
          background: linear-gradient(135deg, var(--color-blue) 0%, var(--color-blue-light) 100%);
          box-shadow: 0 2px 6px rgba(30, 64, 175, 0.25);
          font-weight: 700;
        }
      }
    }
    
    .phone-link {
      display: flex;
      align-items: center;
      gap: var(--space-sm);
      padding: var(--space-sm) var(--space-md);
      color: var(--color-accent);
      text-decoration: none;
      border: 1px solid var(--color-border-strong);
      border-radius: var(--radius-full);
      transition: all var(--transition-fast);
      
      &:hover {
        background: rgba(34, 197, 94, 0.1);
        border-color: var(--color-accent);
      }
      
      .material-icons-outlined {
        font-size: 18px;
      }
      
      .phone-text {
        font-size: 0.875rem;
        font-weight: 500;
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
  isScrolled = signal(false);
  menuOpen = signal(false);
  
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

