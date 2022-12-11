/* بسم الله الرحمن الرحیم */

import { HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from './message.service';

export interface RequestCacheEntry {
  url: string;
  response: HttpResponse<any>;
  lastRead: number;
}

export abstract class RequestCache {
  abstract get(request: HttpRequest<any>): HttpResponse<any> | undefined;
  abstract put(request: HttpRequest<any>, response: HttpResponse<any>): void;
}

/** maximum cache age (ms) */
const maxAge: number = 30000;

@Injectable()
export class RequestCacheWithMap implements RequestCache {
  public cache = new Map<string, RequestCacheEntry>();

  constructor(private messenger: MessageService) {}

  public get(request: HttpRequest<any>): HttpResponse<any> | undefined {
    const url = request.urlWithParams;
    const cached = this.cache.get(url);

    if (!cached) {
      return undefined;
    }

    const isExpired = cached.lastRead < Date.now() - maxAge;
    const expired = isExpired ? 'expired' : '';
    this.messenger.add(`Found ${expired} cached response for "${url}".`);

    return isExpired ? undefined : cached.response;
  }

  public put(request: HttpRequest<any>, response: HttpResponse<any>): void {
    const url = request.urlWithParams;
    this.messenger.add(`Caching response from "${url}".`);

    const newEntry = { url, response, lastRead: Date.now() };
    this.cache.set(url, newEntry);

    // remove expired cache entries
    const expired = Date.now() - maxAge;
    this.cache.forEach((entry) => {
      if (entry.lastRead < expired) {
        this.cache.delete(entry.url);
      }
    });

    this.messenger.add(`Request cache size: ${this.cache.size}.`);
  }
}
