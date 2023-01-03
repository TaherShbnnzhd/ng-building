/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { HttpClient, HttpContext, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, map, Observable } from 'rxjs';

import { AppConfigService } from '../services/app-config.service';
import { HttpErrorHandlerService } from './http-error-handler/http-error-handler.service';
import { HandleError } from './http-error-handler/http-error-handler.type';
import { ICustomer } from '@shared/models/customer.model';
import { RETRY_COUNT } from '../interceptors/retry.interceptor';

@Injectable()
export class HttpService {
  private httpOptions: { headers: HttpHeaders };
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    private config: AppConfigService,
    public httpErrorHandler: HttpErrorHandlerService
  ) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    this.handleError = httpErrorHandler.createHandleError('HttpService');
  }

  //////// Global Methods //////////

  /** POST: fetch data with empty body */
  public getByPost<T>(
    type: { new (): T },
    url: string,
    retryCount = 1,
    params?: unknown
  ): Observable<T> {
    return this.http
      .post<T>(this.config.getAddress('baseUrl') + url, {
        params: params,
        context: new HttpContext().set(RETRY_COUNT, retryCount),
      })
      .pipe(catchError(this.handleError('getByPost', new type())));
  }

  /** GET: fetch data */
  public get<T>(
    type: { new (): T },
    url: string,
    retryCount = 1
  ): Observable<T> {
    return this.http
      .get<T>(this.config.getAddress('baseUrl') + url, {
        context: new HttpContext().set(RETRY_COUNT, retryCount),
      })
      .pipe(catchError(this.handleError('get', new type())));
  }

  /** GET: fetch file from assets */
  public getAsset<T>(
    type: { new (): T },
    url: string,
    retryCount = 1
  ): Observable<T> {
    return this.http
      .get<T>('/assets/' + url, {
        context: new HttpContext().set(RETRY_COUNT, retryCount),
      })
      .pipe(catchError(this.handleError('getAsset', new type())));
  }

  //////// Customer CRUD Methods //////////

  /** GET: fetch customers list from database */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public getCustomers(url: string, retryCount = 1): Observable<ICustomer[]> {
    return this.http
      .get<ICustomer[]>(url, {
        context: new HttpContext().set(RETRY_COUNT, retryCount),
      })
      .pipe(
        catchError(this.handleError('getCustomer', [])),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        map((response: any) => response?.data)
      );
  }

  /** POST: add a new User to the database */
  public addCustomer(user: ICustomer): Observable<ICustomer> {
    return this.http
      .post<ICustomer>(
        this.config.getAddress('customers-small'),
        user,
        this.httpOptions
      )
      .pipe(catchError(this.handleError('addCustomer', user)));
  }

  /** PUT: update the user on the server. Returns the updated hero upon success. */
  public updateCustomer(user: ICustomer): Observable<ICustomer> {
    return this.http
      .put<ICustomer>(
        this.config.getAddress('customers-small'),
        user,
        this.httpOptions
      )
      .pipe(catchError(this.handleError('updateCustomer', user)));
  }

  /** DELETE: delete the User from the server */
  public deleteCustomer(id: number): Observable<unknown> {
    const url = `${this.config.getAddress('customers-small')}/${id}`;

    return this.http
      .delete(url, this.httpOptions)
      .pipe(catchError(this.handleError('deleteCustomer')));
  }
}
