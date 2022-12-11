/* بسم الله الرحمن الرحیم */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  private appConfig: any;

  constructor(private http: HttpClient) { }

  public loadAppConfig() {

    return this.http.get('/assets/configs/configuration.json');
  }

  public setConfig(config: any) {

    this.appConfig = config;
  }

  public getAddress(item: string) {

    if (!this.appConfig) {

      throw Error('Config file not loaded!');
    }

    return this.appConfig[item];
  }
}
