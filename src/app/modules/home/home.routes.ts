/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { Route } from '@angular/router';

import { authGuard } from '@core/authentication';

import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export default [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        canMatch: [authGuard],
        children: [
          {
            path: 'dashboard',
            component: DashboardComponent,
            data: { title: 'صفحه اصلی', animation: 'dashboardPage' },
          },
          { path: '', redirectTo: '/home/dashboard', pathMatch: 'full' },
        ],
      },
    ],
  },
] satisfies Route[];
