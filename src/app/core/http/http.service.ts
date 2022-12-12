/* بسم الله الرحمن الرحیم */

import { HttpClient, HttpContext, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, map, Observable, retry } from 'rxjs';

import { AppConfigService } from '../services/app-config.service';
import { HttpErrorHandlerService } from './http-error-handler/http-error-handler.service';
import { HandleError } from './http-error-handler/http-error-handler.type';
import { ICustomer } from '@shared/models/customer.model';
import { RETRY_COUNT } from '../interceptors/retry.interceptor';

@Injectable()
export class HttpService {
  private basesUrl: string = this.config.getAddress('baseUrl');
  private customersUrl: string = this.config.getAddress('customers-small');

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

  /** POST: get data with empty body. */
  public getByPost<T>(
    type: { new (): T },
    url: string,
    retryCount: number = 1,
    params?: any
  ): Observable<T> {
    return this.http
      .post<T>(this.basesUrl + url, {
        params: params,
        context: new HttpContext().set(RETRY_COUNT, retryCount),
      })
      .pipe(catchError(this.handleError('getByPost', new type())));
  }

  /** GET: general. */
  public get<T>(url: string, retryCount: number = 1, params?: any): Observable<T> {
    return this.http
      .get<ICustomer[]>(url, {
        params: params,
        context: new HttpContext().set(RETRY_COUNT, retryCount),
      })
      .pipe(
        catchError(this.handleError('getCustomer', [])),
        map((response: any) => response?.data)
      );
  }

  //////// Save Methods //////////

  /** POST: add a new User to the database */
  private addCustomer(user: ICustomer): Observable<ICustomer> {
    return this.http
      .post<ICustomer>(this.customersUrl, user, this.httpOptions)
      .pipe(catchError(this.handleError('addCustomer', user)));
  }

  /** PUT: update the user on the server. Returns the updated hero upon success. */
  private updateCustomer(user: ICustomer): Observable<ICustomer> {
    return this.http
      .put<ICustomer>(this.customersUrl, user, this.httpOptions)
      .pipe(catchError(this.handleError('updateCustomer', user)));
  }

  /** DELETE: delete the User from the server */
  private deleteCustomer(id: number): Observable<unknown> {
    const url: string = `${this.customersUrl}/${id}`;

    return this.http
      .delete(url, this.httpOptions)
      .pipe(catchError(this.handleError('deleteCustomer')));
  }
}
