import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ApiService } from '../../../core/services/api.service';
import { LanguageService } from '../../../core/services/language.service';

interface SupplierCategory {
  file: string;
  name_es: string;
  name_en: string;
  icon: string;
  productCount?: number;
}

@Component({
  selector: 'app-supplier-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule],
  template: `
    <!-- Breadcrumb -->
    <nav class="breadcrumb">
      <div class="container">
        <a routerLink="/catalogo">{{ 'catalog.catalog' | translate }}</a>
        <span class="sep">/</span>
        <span class="current">{{ supplier?.name }}</span>
      </div>
    </nav>

    <!-- Hero -->
    <section class="supplier-hero">
      <div class="hero-blob hero-blob-left"></div>
      <div class="hero-blob hero-blob-right"></div>
      <div class="container hero-center">
        <div class="logo-frame">
          @if (supplier?.logo) {
            <img [src]="supplier.logo" [alt]="supplier.name" class="logo-img">
          } @else {
            <span class="material-icons-outlined logo-icon">{{ supplier?.icon || 'business' }}</span>
          }
        </div>
        <h1 class="hero-name">{{ supplier?.name }}</h1>
        @if (supplier?.website) {
          <p class="hero-url">{{ cleanUrl(supplier.website) }}</p>
        }
      </div>
    </section>

    <!-- Deco Bar -->
    <div class="deco-bar"></div>

    <!-- Info -->
    <section class="info-section">
      <div class="container info-center">
        <p class="description">{{ isEnglish ? supplier?.description_en : supplier?.description }}</p>
        <div class="meta-row">
          @if (supplier?.country) {
            <div class="meta-badge">
              <span class="material-icons-outlined">public</span>
              {{ isEnglish ? supplier?.country_en : supplier?.country }}
            </div>
          }
          @if (supplier?.website) {
            <a [href]="supplier.website" target="_blank" class="website-link">
              <span class="material-icons-outlined">language</span>
              {{ 'catalog.visitWebsite' | translate }}
            </a>
          }
        </div>
      </div>
    </section>

    <!-- Categories Grid -->
    <section class="categories-section">
      <div class="container">
        <div class="section-head">
          <h2>{{ 'catalog.productCategories' | translate }}</h2>
          <p>{{ 'catalog.selectCategory' | translate }}</p>
        </div>

        <div class="categories-grid">
          @for (category of categories; track category.file; let i = $index) {
            <a [routerLink]="['/catalogo', supplierSlug, getCategorySlug(category)]"
               class="category-card"
               [style.animation-delay]="i * 80 + 'ms'">
              <div class="card-icon">
                <span class="material-icons-outlined">{{ category.icon }}</span>
              </div>
              <div class="card-content">
                <h3>{{ isEnglish ? category.name_en : category.name_es }}</h3>
                @if (category.productCount) {
                  <span class="product-count">{{ category.productCount }} {{ 'catalog.products' | translate }}</span>
                }
              </div>
              <span class="material-icons-outlined card-arrow">arrow_forward_ios</span>
            </a>
          }
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-card">
          <div class="cta-icon-wrap">
            <span class="material-icons-outlined">support_agent</span>
          </div>
          <p class="cta-label">{{ 'catalog.needHelp' | translate }}</p>
          <a routerLink="/contacto" class="cta-btn">
            <span class="material-icons-outlined">chat</span>
            {{ 'catalog.contactUs' | translate }}
          </a>
          <p class="cta-desc">{{ 'catalog.needHelpDesc' | translate }}</p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host { display: block; }

    .breadcrumb {
      padding: calc(80px + 1rem) 0 1rem;
      background: #fff;
      border-bottom: 1px solid #e2e8f0;

      .container {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.9rem;
      }

      a { color: #718096; text-decoration: none; &:hover { color: #4FAD47; } }
      .sep { color: #cbd5e1; }
      .current { color: #204C81; font-weight: 600; }
    }

    /* ── Hero ── */
    .supplier-hero {
      position: relative;
      padding: 3.5rem 0;
      background: #fff;
      overflow: hidden;
      text-align: center;
    }

    .hero-blob {
      position: absolute;
      border-radius: 50%;
      pointer-events: none;
    }

    .hero-blob-left {
      width: 500px;
      height: 500px;
      background: radial-gradient(circle, rgba(38, 103, 169, 0.10) 0%, transparent 65%);
      left: -160px;
      top: 50%;
      transform: translateY(-50%);
    }

    .hero-blob-right {
      width: 420px;
      height: 420px;
      background: radial-gradient(circle, rgba(79, 173, 71, 0.08) 0%, transparent 65%);
      right: -120px;
      top: 20%;
    }

    .hero-center {
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }

    .logo-frame {
      width: 140px;
      height: 140px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #fff;
      border: 2.5px solid #D5E9F9;
      border-radius: 24px;
      box-shadow: 0 8px 32px rgba(38, 103, 169, 0.12);

      .logo-img { width: 78%; height: 78%; object-fit: contain; }
      .logo-icon { font-size: 60px; color: #2667A9; }
    }

    .hero-name {
      font-size: clamp(2rem, 5vw, 3.5rem);
      font-weight: 900;
      color: #204C81;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      margin-bottom: 0;
    }

    .hero-url {
      font-size: 0.95rem;
      color: #2667A9;
      font-style: italic;
      letter-spacing: 0.06em;
    }

    /* ── Deco Bar ── */
    .deco-bar {
      height: 8px;
      background: linear-gradient(90deg, #4FAD47 0%, #2667A9 50%, #4FAD47 100%);
    }

    /* ── Info ── */
    .info-section {
      padding: 2.5rem 0 0;
      background: #fff;
    }

    .info-center {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 1.25rem;
    }

    .description {
      font-size: 1.05rem;
      color: #2667A9;
      font-style: italic;
      max-width: 560px;
      line-height: 1.8;
    }

    .meta-row {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
      flex-wrap: wrap;
    }

    .meta-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 16px;
      background: #f0f6fc;
      border: 1px solid #D5E9F9;
      border-radius: 100px;
      font-size: 0.85rem;
      color: #4a5568;

      .material-icons-outlined { font-size: 16px; color: #2667A9; }
    }

    .website-link {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 16px;
      color: #2667A9;
      text-decoration: none;
      font-size: 0.85rem;
      font-weight: 600;
      border: 1.5px solid #2667A9;
      border-radius: 100px;
      transition: all 0.2s ease;

      .material-icons-outlined { font-size: 16px; }
      &:hover { background: #2667A9; color: #fff; }
    }

    /* ── Categories ── */
    .categories-section {
      padding: 3rem 0 4rem;
      background: #fff;
    }

    .section-head {
      text-align: center;
      margin-bottom: 2.5rem;

      h2 {
        font-size: clamp(1.8rem, 4vw, 2.5rem);
        font-weight: 900;
        text-transform: uppercase;
        color: #204C81;
        margin-bottom: 0.5rem;
      }

      p {
        color: #4FAD47;
        font-size: 1rem;
        font-style: italic;
      }
    }

    .categories-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;

      @media (max-width: 640px) { grid-template-columns: 1fr; }
    }

    .category-card {
      display: flex;
      align-items: center;
      gap: 1.25rem;
      padding: 1.25rem 1.5rem;
      background: #fff;
      border: 2px solid #e2e8f0;
      border-radius: 14px;
      text-decoration: none;
      transition: all 0.25s ease;
      animation: fadeInUp 0.5s ease forwards;
      opacity: 0;

      &:hover {
        border-color: #2667A9;
        background: #f0f6fc;
        transform: translateX(4px);
        box-shadow: 0 6px 20px rgba(38, 103, 169, 0.12);

        .card-icon {
          background: #2667A9;
          .material-icons-outlined { color: #fff; }
        }

        .card-arrow { opacity: 1; color: #2667A9; }
      }

      .card-icon {
        width: 52px;
        height: 52px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #D5E9F9;
        border-radius: 12px;
        transition: all 0.25s ease;
        flex-shrink: 0;

        .material-icons-outlined { font-size: 26px; color: #2667A9; transition: color 0.25s ease; }
      }

      .card-content {
        flex: 1;

        h3 {
          font-size: 1.05rem;
          font-weight: 700;
          color: #204C81;
          margin-bottom: 0.2rem;
        }

        .product-count { font-size: 0.8rem; color: #718096; }
      }

      .card-arrow {
        font-size: 18px;
        color: #D5E9F9;
        opacity: 0.5;
        transition: all 0.25s ease;
      }
    }

    /* ── CTA ── */
    .cta-section {
      padding: 0 0 4rem;
      background: #fff;
    }

    .cta-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 2.5rem 2rem;
      background: #f8fafc;
      border: 2px solid #e2e8f0;
      border-radius: 16px;
      gap: 0.75rem;
    }

    .cta-icon-wrap {
      width: 64px;
      height: 64px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2.5px solid #2667A9;
      border-radius: 50%;

      .material-icons-outlined { font-size: 30px; color: #2667A9; }
    }

    .cta-label {
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #2667A9;
    }

    .cta-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 10px 28px;
      color: #204C81;
      font-size: 0.95rem;
      font-weight: 700;
      text-decoration: none;
      border: 2px solid #204C81;
      border-radius: 100px;
      transition: all 0.2s ease;
      letter-spacing: 0.04em;

      .material-icons-outlined { font-size: 18px; }
      &:hover { background: #204C81; color: #fff; }
    }

    .cta-desc {
      font-size: 0.85rem;
      color: #718096;
      font-style: italic;
      max-width: 360px;
    }

    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class SupplierDetailComponent implements OnInit {
  private api = inject(ApiService);
  private route = inject(ActivatedRoute);
  private languageService = inject(LanguageService);

  supplier: any = null;
  categories: SupplierCategory[] = [];
  supplierSlug = '';

  get isEnglish(): boolean {
    return this.languageService.currentLanguage() === 'en';
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.supplierSlug = params['supplier'];
      this.loadSupplier();
    });
  }

  loadSupplier() {
    this.api.getSupplierBySlug(this.supplierSlug).subscribe(supplier => {
      this.supplier = supplier;
    });

    this.api.getSupplierCategories(this.supplierSlug).subscribe(categories => {
      this.categories = categories;
    });
  }

  getCategorySlug(category: SupplierCategory): string {
    return category.file.replace('.json', '').toLowerCase().replace(/\s+/g, '-');
  }

  cleanUrl(url: string): string {
    return url.replace(/^https?:\/\//, '');
  }
}
