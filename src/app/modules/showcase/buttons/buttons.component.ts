/* بسم الله الرحمن الرحیم */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'block-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent implements OnInit {
  public loading: boolean[] = [false, false, false, false];

  constructor() {}

  ngOnInit(): void {}

  public load(index: number): void {
    this.loading[index] = true;
    setTimeout(() => (this.loading[index] = false), 1000);
  }
}
