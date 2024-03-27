/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { Component } from '@angular/core';

import { AnimationService, fadeInAnimation } from '@shared/animations';

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
