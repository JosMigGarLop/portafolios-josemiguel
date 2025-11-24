import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'archive',
    loadComponent: () =>
      import('./components/archive/archive.component').then(m => m.ArchiveComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
