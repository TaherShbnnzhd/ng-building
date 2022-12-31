/* بسم الله الرحمن الرحیم */

import { Component } from '@angular/core';

@Component({
  selector: 'block-buttons',
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
