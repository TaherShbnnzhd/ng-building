/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { Component } from '@angular/core';

import { AnimationService, fadeInAnimation } from '@shared/animations';

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
