/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of, startWith, tap } from 'rxjs';

import { RequestCache } from '../services/request-cache.service';

@Injectable()
export class CachingInterceptor implements HttpInterceptor {
  constructor(private cache: RequestCache) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // continue if not cacheable.
    if (!isCacheable(request)) {
      return next.handle(request);
    }

    const cachedResponse = this.cache.get(request);
    // cache-then-refresh
    if (request.headers.get('x-refresh')) {
      const results$ = sendRequest(request, next, this.cache);
      return cachedResponse
        ? results$.pipe(startWith(cachedResponse))
        : results$;
    }
    // cache-or-fetch
    return cachedResponse
      ? of(cachedResponse)
      : sendRequest(request, next, this.cache);
  }
}

/** Is this request cacheable? */
function isCacheable(request: HttpRequest<unknown>): boolean {
  // Only GET requests are cacheable
  return (
    request.method === 'GET' &&
    // Only npm package search is cacheable in this app
    -1 < request.url.indexOf('/dummy/foos')
  );
}

/**
 * Get server response observable by sending request to `next()`.
 * Will add the response to the cache on the way out.
 */
function sendRequest(
  request: HttpRequest<unknown>,
  next: HttpHandler,
  cache: RequestCache
): Observable<HttpEvent<unknown>> {
  return next.handle(request).pipe(
    tap(event => {
      // There may be other events besides the response.
      if (event instanceof HttpResponse) {
        cache.put(request, event); // Update the cache.
      }
    })
  );
}
