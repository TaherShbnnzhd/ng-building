/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';

import { tap } from 'rxjs';
import { AuthService } from 'src/app/core/authentication/auth.service';

class LoginModel {
  mobile: number | null = null;
  password: string | null = null;
}

@Component({
  selector: 'block-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  public loginModel = new LoginModel();

  /** store the URL so we can redirect after logging in. */
  public redirectUrl: string | null = null;
  public loading = false;
  public message: string;

  // Form controll fields:
  get mobile() {
    return this.loginForm.get('mobile');
  }

  get password() {
    return this.loginForm.get('password');
  }

  constructor(public authService: AuthService, public router: Router) {
    this.message = this.getMessage();
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      mobile: new FormControl(this.loginModel.mobile, [
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11),
      ]),
      password: new FormControl(this.loginModel.password, [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  /** Define message for logged state */
  public getMessage() {
    return 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  /** Log in user */
  public signin(): void {
    this.loading = true;

    this.message = 'در حال ورود';

    this.authService
      .logIn()
      .pipe(tap(() => (this.loading = false)))
      .subscribe(() => {
        this.message = this.getMessage();

        if (this.authService.isLoggedIn) {
          // Usually you would use the redirect URL from the auth service.
          // However to keep the example simple, we will always redirect to `/admin`.
          const redirectUrl = this.authService.redirectUrl || '';

          // Set our navigation extras object
          // that passes on our global query params and fragment
          const navigationExtras: NavigationExtras = {
            queryParamsHandling: 'preserve',
            preserveFragment: true,
          };

          // Redirect the user
          this.router.navigate([redirectUrl], navigationExtras);
        }
      });
  }

  /** Log out user */
  public signout(): void {
    this.authService.logOut();
    this.message = this.getMessage();
  }
}
