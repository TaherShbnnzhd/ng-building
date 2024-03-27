/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { Component } from '@angular/core';

import { slideInAnimation } from '@shared/animations/animation.transition';
import { AnimationService } from '@shared/services/animation.service';

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
