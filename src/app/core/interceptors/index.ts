/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { HTTP_INTERCEPTORS } from '@angular/common/http';

/* "Barrel" of Http Interceptors */
import { EnsureHttpsInterceptor } from './ensure-https.interceptor';
import { AuthInterceptor } from './auth.interceptor';
import { LoggingInterceptor } from './logging.interceptor';
import { RetryInterceptor } from './retry.interceptor';
import { CachingInterceptor } from './caching.interceptor';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: EnsureHttpsInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: RetryInterceptor, multi: true },
];
