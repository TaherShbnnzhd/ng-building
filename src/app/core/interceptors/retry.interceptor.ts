/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpContextToken,
} from '@angular/common/http';
import { Observable, retry, tap } from 'rxjs';

export const RETRY_COUNT = new HttpContextToken(() => 0);
export const ERROR_COUNT = new HttpContextToken(() => 0);

@Injectable()
export class RetryInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const retryCount = request.context.get(RETRY_COUNT);

    return next.handle(request).pipe(
      tap({
        error: () =>
          request.context.set(
            ERROR_COUNT,
            request.context.get(ERROR_COUNT) + 1
          ),
      }),

      // Retry the request a configurable number of times.
      retry(retryCount)
    );
  }
}
