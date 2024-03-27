/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { inject } from '@angular/core';
import { Route, Router, UrlSegment } from '@angular/router';

import { AuthService } from './auth.service';

export const authGuard = (_: Route, path: UrlSegment[]) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  const isAuthorized = !!authService.getAuthorizationToken();

  if (isAuthorized) return true;
  else {
    authService.redirectUrl = `/${path.toString().replace(',', '/')}`;
    return router.createUrlTree(['/account/login']);
  }
};
