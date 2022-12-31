/* بسم الله الرحمن الرحیم */

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../authentication/auth.service';

@Component({
  selector: 'block-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private authService: AuthService, private router: Router) {}

  public signout(): void {
    this.authService.logOut();
    this.router.navigate(['/account/login']);
  }
}
