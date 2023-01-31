/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/guards/auth/auth.guard';
import { MainComponent } from './core/main/main.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
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
    canActivate: [AuthGuard],
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../app/modules/home/home.module').then(
            (module) => module.HomeModule
          ),
        canMatch: [AuthGuard],
      },
      {
        path: 'report',
        loadChildren: () =>
          import('../app/modules/report/report.module').then(
            (module) => module.ReportModule
          ),
        canMatch: [AuthGuard],
      },
      {
        path: 'showcase',
        loadChildren: () =>
          import('../app/modules/showcase/showcase.module').then(
            (module) => module.ShowcaseModule
          ),
        canMatch: [AuthGuard],
      },
      { path: '', redirectTo: '/home/dashboard', pathMatch: 'full' },
    ],
  },
  { path: '', redirectTo: '/home/dashboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
