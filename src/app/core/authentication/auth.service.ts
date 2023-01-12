/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { HttpService } from '../http/http.service';

@Injectable()
export class AuthService {
  /** Store the URL so we can redirect after logging in */
  public redirectUrl: string | null = null;

  constructor(private httpService: HttpService) {}

  /** Return token if exists */
  public getAuthorizationToken(): string {
    const sessionStorageToken = sessionStorage.getItem('Token');
    const localStorageToken = localStorage.getItem('Token');

    return sessionStorageToken || localStorageToken || '';
  }

  /** Try to log in */
  public logIn(username: string, password: string): Observable<unknown> {
    return of(username && password).pipe(delay(1380));
  }

  /** Try to log out */
  public logOut(): void {
    sessionStorage.removeItem('Token');
    localStorage.removeItem('Token');
  }
}
