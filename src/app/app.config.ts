/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import {
  PreloadAllModules,
  RouteReuseStrategy,
  provideRouter,
  withPreloading,
} from '@angular/router';

import {
  AppConfigService,
  LogService,
  RequestCache,
  RequestCacheWithMap,
  RouteReuseService,
  StoredRoutesService,
  ThemeService,
} from '@core/services';
import { HttpErrorHandlerService, HttpService } from '@core/http';
import { AuthService } from '@core/authentication';
import { SidemenuService } from '@core/layout';
import { httpInterceptorProviders } from '@core/interceptors';
import { AnimationService } from '@shared/animations';

import { MessageService } from 'primeng/api';
import { tap } from 'rxjs';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withPreloading(PreloadAllModules))],
};

export const appProviders = [
  AppConfigService,
  HttpService,
  HttpErrorHandlerService,
  LogService,
  AuthService,
  MessageService,
  StoredRoutesService,
  ThemeService,
  AnimationService,
  SidemenuService,
  { provide: RouteReuseStrategy, useClass: RouteReuseService },
  { provide: RequestCache, useClass: RequestCacheWithMap },
  httpInterceptorProviders,
  {
    provide: APP_INITIALIZER,
    deps: [AppConfigService],
    multi: true,
    useFactory: (appConfigService: AppConfigService) => {
      return () =>
        appConfigService
          .loadAppConfig()
          .pipe(tap(config => appConfigService.setAppConfig(config)));
    },
  },
];
