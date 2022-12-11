/* بسم الله الرحمن الرحیم */

import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { MessageService } from '../../services/message.service';


/** Handles HttpClient errors */
@Injectable()
export class HttpErrorHandlerService {

  /** 
   * Create curried handleError function that already knows the service name
   * @tip If `T` didnt mentioned,the compiler will figure out based on the value passed in.
  */
  public createHandleError = (serviceName = '') =>
    <T>(operation = 'operation', result = {} as T) =>
      this.handleError(serviceName, operation, result);

  constructor(
    private messageService: MessageService
  ) { }

  /**
   * Returns a function that handles Http operation failures.
   * This error handler lets the app continue to run as if no error occurred.
   * 
   * @param serviceName - name of the data service that attempted the operation.
   * @param operation - name of the operation that failed.
   * @param result - optional value to return as the observable result.
   */
  public handleError<T>(serviceName = '', operation = 'operation', result = {} as T) {

    return (error: HttpErrorResponse): Observable<T> => {

      const message = (error.error instanceof ErrorEvent) ?
        error.error.message :
        `server returned code ${error.status} with body "${error.error}"`;

      // TODO: send the error to remote logging infrastructure.
      // log to console instead:
      console.error(message, error);

      // TODO: better job of transforming error for user consumption.
      this.messageService.add(`${serviceName}: ${operation} failed: ${message}`);

      // Let the app keep running by returning a safe result:
      return of(result);
    };
  }
}
