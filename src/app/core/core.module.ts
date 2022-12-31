/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { tap } from 'rxjs';

import {
  RequestCache,
  RequestCacheWithMap,
} from './services/request-cache.service';
import { httpInterceptorProviders } from './interceptors';
import { AppConfigService } from './services/app-config.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { HttpService } from './http/http.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthService } from './authentication/auth.service';
import { HttpErrorHandlerService } from './http/http-error-handler/http-error-handler.service';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from '../app-routing.module';

/* PrimeNG */
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';


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
    AuthService,
    AuthGuard,
    HttpService,
    HttpErrorHandlerService,
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
