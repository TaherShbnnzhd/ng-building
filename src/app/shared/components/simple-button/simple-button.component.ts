/* بسم الله الرحمن الرحیم */

import { Component, Input } from '@angular/core';

@Component({
  selector: 'block-simple-button',
  templateUrl: './simple-button.component.html',
  styleUrls: ['./simple-button.component.scss'],
})
export class SimpleButtonComponent {
  @Input() title!: string | null;
}
