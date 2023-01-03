/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '@shared/animations/transition.animation';

import { AnimationService } from '@shared/services/animation.service';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'block-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  animations: [fadeInAnimation],
  providers: [AnimationService],
})
export class AccountComponent implements OnInit {
  constructor(
    public animationService: AnimationService,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
}
