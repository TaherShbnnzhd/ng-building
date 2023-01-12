/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

import { tap } from 'rxjs';
import { AuthService } from 'src/app/core/authentication/auth.service';

class LoginModel {
  mobile = '';
  password = '';
  rememberMe = false;
}

@Component({
  selector: 'block-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  /** store the URL so we can redirect after logging in. */
  public redirectUrl: string | null = null;
  public loading = false;
  public submitted = false;

  // Form controll:
  public loginForm!: FormGroup;
  public loginModel = new LoginModel();

  // Form controll fields:
  get mobile() {
    return this.loginForm.get('mobile');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get rememberMe() {
    return this.loginForm.get('rememberMe');
  }

  constructor(
    public authService: AuthService,
    public router: Router,
    private messageService: MessageService
  ) {}

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
      rememberMe: new FormControl(this.loginModel.rememberMe),
    });
  }

  /** Log in user */
  public signin(): void {
    this.submitted = true;

    if (this.loginForm.valid) {
      const { mobile, password, rememberMe } = this.loginForm.value;

      this.loading = true;

      this.authService
        .logIn(mobile, password)
        .pipe(tap(() => (this.loading = false)))
        .subscribe((isValid) => {
          if (isValid) {
            // Use the redirect URL from the auth service.
            const redirectUrl = this.authService.redirectUrl || '';

            // Set our navigation extras object
            // that passes on our global query params and fragment
            const navigationExtras: NavigationExtras = {
              queryParamsHandling: 'preserve',
              preserveFragment: true,
            };

            if (rememberMe) {
              localStorage.setItem('Token', 'token');
            } else {
              sessionStorage.setItem('Token', 'token');
            }

            // Redirect the user
            this.router.navigate([redirectUrl], navigationExtras);
          } else {
            this.messageService.add({
              key: 'httpErrorMessage',
              life: 8000,
              severity: 'error',
              detail: `خطا`,
              summary: 'اطلاعات وارد شده صحیح نمی‌باشد',
            });
          }
        });
    }
  }
}
