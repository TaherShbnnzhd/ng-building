/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable()
export class AuthService {
  public isLoggedIn = false;

  // store the URL so we can redirect after logging in
  public redirectUrl: string | null = null;

  /** Get Token If Exists */
  public getAuthorizationToken(): string {
    return 'some-auth-token';
  }

  /** Try To Log In */
  public logIn(): Observable<boolean> {
    return of(true).pipe(
      delay(1380),
      tap(() => (this.isLoggedIn = true))
    );
  }

  /** Try To Log Out */
  public logOut(): void {
    this.isLoggedIn = false;
  }
}
