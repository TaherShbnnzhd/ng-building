/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { Component } from '@angular/core';

import { fadeInAnimation } from '@shared/animations/animation.transition';
import { AnimationService } from '@shared/services/animation.service';

@Component({
  selector: 'block-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [fadeInAnimation],
  providers: [AnimationService],
})
export class HomeComponent {
  constructor(public animationService: AnimationService) {}
}
