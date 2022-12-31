/* بسم الله الرحمن الرحیم */

import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersianNumberService } from '@shared/services/persian-number.service';
import { MessageService } from 'primeng/api';

import { Observable, of } from 'rxjs';

import { LogService } from '../../services/log.service';

/** Handles HttpClient errors */
@Injectable()
export class HttpErrorHandlerService {
  /**
   * Create curried handleError function that already knows the service name
   * @tip If `T` didnt mentioned,the compiler will figure out based on the value passed in.
   */
  public createHandleError =
    (serviceName = '') =>
    <T>(operation = 'operation', result = {} as T) =>
      this.handleError(serviceName, operation, result);

  constructor(
    private logger: LogService,
    private messageService: MessageService,
    private persianNumberService: PersianNumberService
  ) {}

  /**
   * Returns a function that handles Http operation failures.
   * This error handler lets the app continue to run as if no error occurred.
   *
   * @param serviceName - name of the data service that attempted the operation.
   * @param operation - name of the operation that failed.
   * @param result - optional value to return as the observable result.
   */
  public handleError<T>(
    serviceName = '',
    operation = 'operation',
    result = {} as T
  ) {
    return (error: HttpErrorResponse): Observable<T> => {
      const message =
        error.error instanceof ErrorEvent
          ? error.error.message
          : `server returned code ${error.status} with body "${error.error}"`;

      // transforming error for user consumption.
      let userMessage = '';

      switch (error.status) {
        case -1:
          userMessage = `اتصال به سرور برقرار نیست`;
          break;
        case 400:
          userMessage = `اطلاعات با قالب اشتباه ارسال شده است`;
          break;
        case 401:
          userMessage = `شما برای ارسال اطلاعات دسترسی ندارید`;
          break;
        case 403:
          userMessage = `شما برای دریافت اطلاعات دسترسی ندارید`;
          break;
        case 404:
        case 405:
          userMessage = `سرویس موجود نیست`;
          break;
        case 412:
          userMessage = `شرایط ارتباط با سرویس فراهم نیست`;
          break;
        case 500:
          userMessage = `سرویس دچار مشکل شده است`;
          break;
        case 503:
          userMessage = `سرویس مورد نظر از دسترسی خارج شده است`;
          break;
        default:
          userMessage = 'خطا در دریافت/ارسال اطلاعات';
      }

      this.messageService.add({
        key: 'httpErrorMessage',
        life: 8000,
        severity: 'error',
        detail: `خطا ${this.persianNumberService.toPersian(error.status)}`,
        summary: userMessage,
      });

      // Log error.
      this.logger.add(`${serviceName}: ${operation} failed: ${message}`);

      // Let the app keep running by returning a safe result:
      return of(result);
    };
  }
}
