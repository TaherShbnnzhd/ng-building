/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { Component, Input } from '@angular/core';

@Component({
  selector: 'block-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  @Input() currentApplicationVersion!: string;
}
