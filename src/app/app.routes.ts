/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { Routes } from '@angular/router';

import { authGuard } from '@core/guards/auth/auth.guard';
import { PageNotFoundComponent } from '@core/layout/page-not-found/page-not-found.component';
import { MainComponent } from '@core/main/main.component';

import { AccountModule } from './modules/account/account.module';

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
        loadChildren: () => AccountModule,
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
