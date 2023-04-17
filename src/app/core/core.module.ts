/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { RouteReuseStrategy } from '@angular/router';

import { tap } from 'rxjs';

import {
  RequestCache,
  RequestCacheWithMap,
} from './services/request-cache.service';

import { httpInterceptorProviders } from './interceptors';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { SidemenuComponent } from './layout/sidemenu/sidemenu.component';
import { MainComponent } from './main/main.component';
import { LoadingElementComponent } from './layout/loading-element/loading-element.component';
import { ActiveTabsBarComponent } from './layout/active-tabs-bar/active-tabs-bar.component';

import { AppConfigService } from './services/app-config.service';
import { AuthService } from './authentication/auth.service';
import { HttpErrorHandlerService } from './http/http-error-handler/http-error-handler.service';
import { LogService } from './services/log.service';
import { HttpService } from './http/http.service';
import { StoredRoutesService } from './services/route-reuse-strategy/stored-routes.service';
import { RouteReuseService } from './services/route-reuse-strategy/route-reuse.service';
import { ThemeService } from './services/theme.service';
import { SidemenuService } from './layout/sidemenu/sidemenu.service';

/* PrimeNG */
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TabViewModule } from 'primeng/tabview';
import { ToolbarModule } from 'primeng/toolbar';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    SidemenuComponent,
    MainComponent,
    LoadingElementComponent,
    ActiveTabsBarComponent,
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
    TabViewModule,
    ToolbarModule,
    RippleModule,
  ],
  providers: [
    AppConfigService,
    HttpService,
    HttpErrorHandlerService,
    LogService,
    AuthService,
    MessageService,
    StoredRoutesService,
    ThemeService,
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
  ],
})
export class CoreModule {}
