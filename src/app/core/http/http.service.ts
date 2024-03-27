/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, Observable } from 'rxjs';

import { BaseResponse } from './http.response';
import { HttpErrorHandlerService } from './http-error-handler/http-error-handler.service';
import { HandleError } from './http-error-handler/http-error-handler.type';
import { AppConfigService } from '../services/app-config.service';
import { RETRY_COUNT } from '../interceptors/retry.interceptor';

@Injectable()
export class HttpService {
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    private config: AppConfigService,
    public httpErrorHandler: HttpErrorHandlerService
  ) {
    this.handleError = httpErrorHandler.createHandleError('HttpService');
  }

  /**
   * GET: fetch data
   * @param type Api response type
   * @param url Api address
   * @param retryCount Api retry count
   * @returns Observable of response type
   */
  public get<T>(url: string, retryCount = 1): Observable<BaseResponse<T>> {
    return this.http
      .get<BaseResponse<T>>(this.config.getAddress('baseUrl') + url, {
        context: new HttpContext().set(RETRY_COUNT, retryCount),
      })
      .pipe(catchError(this.handleError('get', new BaseResponse<T>())));
  }

  /**
   * POST: pass params and fetch data
   * @param type Api response type
   * @param url Api address
   * @param params Api paramiters
   * @param retryCount Api retry count
   * @returns Observable of response type
   */
  post<T>(
    url: string,
    params: unknown,
    retryCount = 1
  ): Observable<BaseResponse<T>> {
    return this.http
      .post<BaseResponse<T>>(this.config.getAddress('baseUrl') + url, params, {
        context: new HttpContext().set(RETRY_COUNT, retryCount),
      })
      .pipe(catchError(this.handleError('post', new BaseResponse<T>())));
  }

  /**
   * GET: fetch file from assets
   * @param type Api response type
   * @param url Api address
   * @param retryCount Api retry count
   * @returns Observable of response type
   */
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
}
