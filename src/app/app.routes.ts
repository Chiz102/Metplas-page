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
    path: 'catalogo/:category',
    loadComponent: () => import('./pages/catalog/catalog.component').then(m => m.CatalogComponent)
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

