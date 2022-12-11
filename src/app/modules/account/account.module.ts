/* بسم الله الرحمن الرحیم */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './login/login.component';

/* PrimeNG */
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { AccountComponent } from './account.component';

@NgModule({
  declarations: [
    LoginComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule
  ]
})
export class AccountModule { }
