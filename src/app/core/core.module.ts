/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';

import { tap } from 'rxjs';

import { httpInterceptorProviders } from './interceptors';

import {
  RequestCache,
  RequestCacheWithMap,
} from './services/request-cache.service';
import { AppConfigService } from './services/app-config.service';
import { AuthService } from './authentication/auth.service';
import { HttpService } from './http/http.service';
import { HttpErrorHandlerService } from './http/http-error-handler/http-error-handler.service';

import { AuthGuard } from './guards/auth/auth.guard';

import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

/* PrimeNG */
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { LogService } from './services/log.service';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    SidemenuComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    ButtonModule,
    TooltipModule,
    ProgressSpinnerModule,
    ToastModule,
  ],
  exports: [
    CommonModule,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    SidemenuComponent,
  ],
  providers: [
    AppConfigService,
    HttpService,
    HttpErrorHandlerService,
    AuthService,
    AuthGuard,
    LogService,
    MessageService,
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
            .pipe(tap((config) => appConfigService.setConfig(config)));
      },
    },
  ],
})
export class CoreModule {}
