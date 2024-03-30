/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { Component } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'block-buttons',
  standalone: true,
  imports: [ButtonModule, RippleModule],
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent {
  public loading: boolean[] = [false, false, false, false];

  public load(index: number): void {
    this.loading[index] = true;
    setTimeout(() => (this.loading[index] = false), 1000);
  }
}
