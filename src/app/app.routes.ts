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
        loadChildren: () => import('@feature/account/routes'),
      },
      {
        path: 'home',
        title: 'بنا | صفحه اصلی',
        loadChildren: () =>
          import('../app/modules/home/home.module').then(
            module => module.HomeModule
          ),
        canMatch: [authGuard],
      },
      {
        path: 'report',
        title: 'بنا | گزارش‌ها',
        loadChildren: () =>
          import('../app/modules/report/report.module').then(
            module => module.ReportModule
          ),
        canMatch: [authGuard],
      },
      {
        path: 'showcase',
        title: 'بنا | امکانات',
        loadChildren: () =>
          import('../app/modules/showcase/showcase.module').then(
            module => module.ShowcaseModule
          ),
        canMatch: [authGuard],
      },
      { path: '', redirectTo: '/home/dashboard', pathMatch: 'full' },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];
