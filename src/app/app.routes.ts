import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
    {
    path: 'login',
    loadComponent: () => import('./components/login/login.component'),
  },
  {
      path: 'register',
      loadComponent: () => import('./components/register/register.component'),
    },
    {
      path: 'home',
      loadComponent: () => import('./components/home/home.component')
    },
    {
      path: 'profile',
      loadComponent: () => import('./components/profile/profile.component')
    },

  { path: '**', redirectTo: 'login' },
];
