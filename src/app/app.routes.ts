import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'somos',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'catalogo',
    loadComponent: () => import('./pages/catalog/catalog.component').then(m => m.CatalogComponent)
  },
  {
    path: 'catalogo/:supplier',
    loadComponent: () => import('./pages/catalog/supplier-detail/supplier-detail.component').then(m => m.SupplierDetailComponent)
  },
  {
    path: 'catalogo/:supplier/:category',
    loadComponent: () => import('./pages/catalog/category-products/category-products.component').then(m => m.CategoryProductsComponent)
  },
  {
    path: 'producto/:supplier/:slug',
    loadComponent: () => import('./pages/catalog/product-detail/product-detail.component').then(m => m.ProductDetailComponent)
  },
  {
    path: 'contacto',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
