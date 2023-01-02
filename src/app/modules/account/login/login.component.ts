/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';

import { tap } from 'rxjs';
import { AuthService } from 'src/app/core/authentication/auth.service';

class LoginModel {
  mobile = '';
  password = '';
}

@Component({
  selector: 'block-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  /** store the URL so we can redirect after logging in. */
  public redirectUrl: string | null = null;

  public loginForm!: FormGroup;
  public loginModel = new LoginModel();

  public loading = false;
  public submitted = false;

  // Form controll fields:
  get mobile() {
    return this.loginForm.get('mobile');
  }

  get password() {
    return this.loginForm.get('password');
  }

  constructor(public authService: AuthService, public router: Router) {}

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

  /** Log in user */
  public signin(): void {
    this.submitted = true;

    if (this.loginForm.valid) {
      const { mobile, password } = this.loginForm.value;

      this.loading = true;

      this.authService
        .logIn(mobile, password)
        .pipe(tap(() => (this.loading = false)))
        .subscribe(() => {
          if (this.authService.isLoggedIn) {
            // Use the redirect URL from the auth service.
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
  }
}
