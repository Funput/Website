import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/home/home').then((m) => m.HomeComponent),
    title: 'Funput — Bộ gõ tiếng Việt cho iOS, Android, macOS, Windows và Linux',
  },
  {
    path: 'privacy',
    loadComponent: () =>
      import('./components/privacy/privacy').then((m) => m.PrivacyComponent),
    title: 'Chính sách quyền riêng tư | Funput',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
