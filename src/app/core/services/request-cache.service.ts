/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LogService } from './log.service';

export interface RequestCacheEntry {
  url: string;
  response: HttpResponse<unknown>;
  lastRead: number;
}

export abstract class RequestCache {
  abstract get(
    request: HttpRequest<unknown>
  ): HttpResponse<unknown> | undefined;
  abstract put(
    request: HttpRequest<unknown>,
    response: HttpResponse<unknown>
  ): void;
}

/** maximum cache age (ms) */
const maxAge = 30000;

@Injectable()
export class RequestCacheWithMap implements RequestCache {
  public cache = new Map<string, RequestCacheEntry>();

  constructor(private logger: LogService) {}

  public get(request: HttpRequest<unknown>): HttpResponse<unknown> | undefined {
    const url = request.urlWithParams;
    const cached = this.cache.get(url);

    if (!cached) {
      return undefined;
    }

    const isExpired = cached.lastRead < Date.now() - maxAge;
    const expired = isExpired ? 'expired' : '';
    this.logger.add(`Found ${expired} cached response for "${url}".`);

    return isExpired ? undefined : cached.response;
  }

  public put(
    request: HttpRequest<unknown>,
    response: HttpResponse<unknown>
  ): void {
    const url = request.urlWithParams;
    this.logger.add(`Caching response from "${url}".`);

    const newEntry = { url, response, lastRead: Date.now() };
    this.cache.set(url, newEntry);

    // remove expired cache entries
    const expired = Date.now() - maxAge;
    this.cache.forEach(entry => {
      if (entry.lastRead < expired) {
        this.cache.delete(entry.url);
      }
    });

    this.logger.add(`Request cache size: ${this.cache.size}.`);
  }
}
