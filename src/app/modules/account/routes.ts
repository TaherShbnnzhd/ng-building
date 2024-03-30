/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { Route } from '@angular/router';

import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export default [
  {
    path: '',
    component: AccountComponent,
    children: [
      {
        path: '',
        children: [
          {
            path: 'login',
            component: LoginComponent,
            data: { title: 'ورود', animation: 'loginPage' },
          },
          {
            path: 'register',
            component: RegisterComponent,
            data: { title: 'ایجاد حساب کاربری', animation: 'registerPage' },
          },
          { path: '', redirectTo: '/account/login', pathMatch: 'full' },
        ],
      },
    ],
  },
] satisfies Route[];
