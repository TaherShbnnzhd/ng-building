/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { Component } from '@angular/core';

import { fadeInAnimation } from '@shared/animations/transition.animation';
import { AnimationService } from '@shared/services/animation.service';

@Component({
  selector: 'block-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeInAnimation],
  providers: [AnimationService],
})
export class AppComponent {
  constructor(public animationService: AnimationService) {}
}
