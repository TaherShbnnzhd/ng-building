/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable()
export class AppConfigService {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private _appConfig!: any;

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  public loadAppConfig() {
    return this.http.get('/assets/configs/configuration.json');
  }

  public setConfig(config: object) {
    this._appConfig = config;
  }

  public getAddress(item: string) {
    if (!this._appConfig) {
      this.messageService.add({
        key: 'httpErrorMessage',
        life: 8000,
        severity: 'error',
        detail: `خطا`,
        summary: 'فایل تنظیمات در دسترس نیست.',
      });
    }

    return this._appConfig[item];
  }
}
