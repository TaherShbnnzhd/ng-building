/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';

import { tap } from 'rxjs';

import {
  RequestCache,
  RequestCacheWithMap,
} from './services/request-cache.service';

import { httpInterceptorProviders } from './interceptors';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { MainComponent } from './main/main.component';
import { LoadingElementComponent } from './loading-element/loading-element.component';

import { AuthGuard } from './guards/auth/auth.guard';

import { AppConfigService } from './services/app-config.service';
import { AuthService } from './authentication/auth.service';
import { HttpErrorHandlerService } from './http/http-error-handler/http-error-handler.service';
import { LogService } from './services/log.service';
import { HttpService } from './http/http.service';

/* PrimeNG */
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    SidemenuComponent,
    MainComponent,
    LoadingElementComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    ButtonModule,
    TooltipModule,
    ProgressSpinnerModule,
    ToastModule,
    ConfirmDialogModule,
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
    LogService,
    AuthService,
    AuthGuard,
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
