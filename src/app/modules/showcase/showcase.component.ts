/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AnimationService, slideInAnimation } from '@shared/animations';

@Component({
  selector: 'block-showcase',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss'],
  animations: [slideInAnimation],
  providers: [AnimationService],
})
export class ShowcaseComponent {
  constructor(public animationService: AnimationService) {}
}
