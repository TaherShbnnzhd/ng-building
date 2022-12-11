/* بسم الله الرحمن الرحیم */

import { Component } from '@angular/core';

import { slideInAnimation } from '@shared/animations/transition.animation';
import { AnimationService } from '@shared/services/animation.service';

@Component({
  selector: 'block-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [slideInAnimation],
  providers: [AnimationService],
})
export class HomeComponent {
  constructor(public animationService: AnimationService) {}
}
