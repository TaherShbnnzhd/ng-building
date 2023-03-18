/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { authGuard } from './core/guards/auth/auth.guard';

import { MainComponent } from './core/main/main.component';
import { PageNotFoundComponent } from './core/layout/page-not-found/page-not-found.component';
import { AccountModule } from './modules/account/account.module';

const routes: Routes = [
  {
    path: 'account',
    loadChildren: () => AccountModule,
  },
  {
    path: '',
    component: MainComponent,
    data: { animation: 'mainPage' },
    canMatch: [authGuard],
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../app/modules/home/home.module').then(
            (module) => module.HomeModule
          ),
        canMatch: [authGuard],
      },
      {
        path: 'report',
        loadChildren: () =>
          import('../app/modules/report/report.module').then(
            (module) => module.ReportModule
          ),
        canMatch: [authGuard],
      },
      {
        path: 'showcase',
        loadChildren: () =>
          import('../app/modules/showcase/showcase.module').then(
            (module) => module.ShowcaseModule
          ),
        canMatch: [authGuard],
      },
      { path: '', redirectTo: '/home/dashboard', pathMatch: 'full' },
    ],
  },
  { path: '', redirectTo: '/home/dashboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
