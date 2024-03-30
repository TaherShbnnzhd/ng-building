/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { Routes } from '@angular/router';

import { MainComponent } from '@core/main';
import { authGuard } from '@core/authentication';
import { PageNotFoundComponent } from '@core/layout';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    title: 'بنا',
    data: { animation: 'mainPage' },
    children: [
      {
        path: 'account',
        title: 'بنا | ورود',
        loadChildren: () => import('@feature/account/account.routes'),
      },
      {
        path: 'home',
        title: 'بنا | صفحه اصلی',
        loadChildren: () => import('@feature/home/home.routes'),
        canMatch: [authGuard],
      },
      {
        path: 'report',
        title: 'بنا | گزارش‌ها',
        loadChildren: () => import('@feature/report/report.routes'),
        canMatch: [authGuard],
      },
      {
        path: 'showcase',
        title: 'بنا | امکانات',
        loadChildren: () => import('@feature/showcase/showcase.routes'),
        canMatch: [authGuard],
      },
      { path: '', redirectTo: '/home/dashboard', pathMatch: 'full' },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];
