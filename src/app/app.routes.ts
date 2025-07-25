import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/register-page/routes').then((m) => m.RegisterRoutes),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login-page/routes').then((m) => m.LoginRoutes),
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/routes').then((m) => m.HomeRoutes),
  },
];
