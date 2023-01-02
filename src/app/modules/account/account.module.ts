/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { AccountRoutingModule } from './account-routing.module';

import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';

/* PrimeNG */
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputMaskModule } from 'primeng/inputmask';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [LoginComponent, AccountComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ButtonModule,
    CheckboxModule,
    InputMaskModule,
    PasswordModule,
    ToastModule,
  ],
})
export class AccountModule {}
