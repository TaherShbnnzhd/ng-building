/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable()
export class ThemeService {
  /** Theme name */
  theme: 'light-theme' | 'dark-theme' = 'light-theme';
  constructor(@Inject(DOCUMENT) private document: Document) {}

  /**
   * Switch theme between loaded primeNG themes
   * @param theme theme bundle name
   */
  switchTheme(theme: 'light-theme' | 'dark-theme') {
    const themeLink = this.document.getElementById(
      'app-theme'
    ) as HTMLLinkElement;

    if (themeLink) {
      this.theme = theme;
      themeLink.href = theme + '.css';
    }
  }
}
