/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { StoredRoutesService, ThemeService } from '@core/services';
import { AuthService } from '@core/authentication';

import { SidemenuService } from '../sidemenu/sidemenu.service';

@Component({
  selector: 'block-header',
  standalone: true,
  imports: [ConfirmDialogModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [ConfirmationService],
})
export class HeaderComponent implements OnInit {
  _darkmode = false;
  get darkmode() {
    return this._darkmode;
  }
  set darkmode(value) {
    this._darkmode = value;

    this.toggleDarkMode(value);
  }

  constructor(
    public authService: AuthService,
    private sidemenuService: SidemenuService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private themeService: ThemeService,
    private storedRoutesService: StoredRoutesService
  ) {}

  ngOnInit(): void {
    this.darkmode = this.themeService.theme === 'light-theme' ? false : true;
  }

  /** Show sign out confirmation dialog */
  confirmSignout() {
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

  /** Sign out */
  signout() {
    this.storedRoutesService.clearStoredRoutes();
    this.sidemenuService.close();
    this.authService.logOut();
    this.router.navigate(['/account/login']);
  }

  /**
   *  Switch theme between dark and light mode
   * @param event event
   * @param theme theme's name
   * @param dark darkmode
   */
  private toggleDarkMode(darkmode: boolean) {
    if (darkmode) this.themeService.switchTheme('dark-theme');
    else this.themeService.switchTheme('light-theme');
  }
}
