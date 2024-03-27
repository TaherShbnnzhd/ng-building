/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { Component } from '@angular/core';

import { AnimationService, slideInAnimation } from '@shared/animations';

@Component({
  selector: 'block-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss'],
  animations: [slideInAnimation],
  providers: [AnimationService],
})
export class ShowcaseComponent {
  constructor(public animationService: AnimationService) {}
}
