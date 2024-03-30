/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AnimationService, fadeInAnimation } from '@shared/animations';

@Component({
  selector: 'block-home',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [fadeInAnimation],
  providers: [AnimationService],
})
export class HomeComponent {
  constructor(public animationService: AnimationService) {}
}
