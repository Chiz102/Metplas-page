import { Component, Input, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Supplier } from '../../../core/models/catalog.model';
import { TranslateModule } from '@ngx-translate/core';
import { ApiService } from '../../../core/services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalog-filter-tabs',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule],
  template: `
    <div class="filter-tabs">
      <a 
        routerLink="/catalogo" 
        class="filter-tab"
        [class.active]="!currentSupplier">
        <span class="material-icons-outlined">grid_view</span>
        {{ 'catalog.allSuppliers' | translate }}
      </a>
      <ng-container *ngFor="let supplier of suppliers">
        <a 
          [routerLink]="['/catalogo', supplier.slug]" 
          class="filter-tab"
          [class.active]="currentSupplier?.slug === supplier.slug">
          <span class="material-icons-outlined">business</span>
          {{ supplier.name || supplier.slug }}
        </a>
      </ng-container>
    </div>
  `,
  styles: [`
    .filter-tabs {
      display: flex;
      gap: var(--space-sm);
      overflow-x: auto;
      padding-bottom: var(--space-sm);
    }
    .filter-tab {
      display: flex;
      align-items: center;
      gap: var(--space-sm);
      padding: var(--space-sm) var(--space-lg);
      font-size: 0.95rem;
      font-weight: 500;
      color: var(--color-text-secondary);
      text-decoration: none;
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-full);
      white-space: nowrap;
      transition: all var(--transition-fast);
    }
    .filter-tab .material-icons-outlined {
      font-size: 18px;
    }
    .filter-tab:hover {
      border-color: var(--supplier-color, var(--color-accent));
      color: var(--supplier-color, var(--color-accent));
    }
    .filter-tab.active {
      background: var(--supplier-color, var(--color-accent));
      border-color: var(--supplier-color, var(--color-accent));
      color: white;
    }
  `]
})
export class CatalogFilterTabsComponent implements OnInit {
  @Input() currentSupplier: Supplier | null = null;
  suppliers: Supplier[] = [];
  private api = inject(ApiService);

  ngOnInit() {
    this.api.getSuppliers().subscribe(suppliers => {
      console.log('Loaded suppliers:', suppliers);
      this.suppliers = suppliers;
    });
  }
}
