/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { AuthService } from '../../authentication/auth.service';

@Component({
  selector: 'block-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [ConfirmationService],
})
export class HeaderComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    private confirmationService: ConfirmationService
  ) {}

  public confirmSignout() {
    this.confirmationService.confirm({
      message: 'آیا برای خروج از حساب کاربری اطمینان دارید؟',
      header: 'هشدار خروج از حساب کاربری',
      icon: 'pi pi-user',
      acceptLabel: 'تایید و خروج',
      acceptButtonStyleClass: 'p-button-danger',
      acceptIcon: 'pi pi-power-off',
      rejectLabel: 'انصراف',
      rejectButtonStyleClass: 'p-button-secondary',
      defaultFocus: 'reject',
      accept: () => this.signout(),
    });
  }

  public signout() {
    this.authService.logOut();
    this.router.navigate(['/account/login']);
  }
}
