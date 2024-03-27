/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { Component } from '@angular/core';
import { fadeInAnimation } from '@shared/animations/animation.transition';

import { AnimationService } from '@shared/services/animation.service';

@Component({
  selector: 'block-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  animations: [fadeInAnimation],
  providers: [AnimationService],
})
export class AccountComponent {
  constructor(public animationService: AnimationService) {}
}
