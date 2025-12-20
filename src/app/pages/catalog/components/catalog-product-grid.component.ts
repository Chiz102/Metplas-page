import { Component, Input } from '@angular/core';
import { Product, Supplier } from '../../../core/models/catalog.model';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalog-product-grid',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <div class="products-grid">
      <ng-container *ngFor="let product of products; let i = index">
        <div class="product-card" [style.animation-delay]="i * 80 + 'ms'" [style.--supplier-color]="supplier?.color">
          <div class="product-image">
            <img *ngIf="product.image" [src]="product.image" [alt]="product.name">
            <span *ngIf="!product.image" class="material-icons-outlined">{{ supplier?.icon || 'inventory_2' }}</span>
            <span *ngIf="product.is_featured" class="featured-badge">
              <span class="material-icons-outlined">star</span>
              {{ 'catalog.featured' | translate }}
            </span>
          </div>
          <div class="product-content">
            <h3>{{ product.name }}</h3>
            <p>{{ product.short_description || product.description }}</p>
            <span *ngIf="product.sku" class="product-sku">SKU: {{ product.sku }}</span>
            <button class="btn btn-outline btn-sm product-btn">
              <span class="material-icons-outlined">info</span>
              {{ 'catalog.moreInfo' | translate }}
            </button>
          </div>
        </div>
      </ng-container>
    </div>
  `
})
export class CatalogProductGridComponent {
  @Input() products: Product[] = [];
  @Input() supplier: Supplier | null = null;
}
