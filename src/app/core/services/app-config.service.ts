/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { MessageService } from 'primeng/api';

/** Service addresses */
export interface AppConfig {
  [key: string]: string;
}

@Injectable()
export class AppConfigService {
  /** Service addresses */
  private appConfig!: AppConfig;

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  /** Load app config from assets */
  loadAppConfig() {
    return this.http.get<AppConfig>('/assets/configs/configuration.json');
  }

  /**
   * Set app config
   * @param config
   */
  async setAppConfig(config: AppConfig) {
    this.appConfig = config;
  }

  getAddress(item: string) {
    if (!this.appConfig) {
      this.messageService.add({
        key: 'httpErrorMessage',
        life: 8000,
        severity: 'error',
        detail: `خطا`,
        summary: 'فایل تنظیمات در دسترس نیست.',
      });
    }

    return this.appConfig[item];
  }
}
