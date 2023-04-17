/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { Component, HostListener, OnInit } from '@angular/core';
import {
  NavigationEnd,
  Router,
  NavigationStart,
  NavigationCancel,
  NavigationError,
  Event,
  RouterEvent,
} from '@angular/router';

import { SidemenuService } from '@core/layout/sidemenu/sidemenu.service';

import { fadeInAnimation } from '@shared/animations/transition.animation';
import { AnimationService } from '@shared/services/animation.service';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'block-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [fadeInAnimation],
  providers: [AnimationService],
})
export class MainComponent implements OnInit {
  /** Components loading. */
  loading = false;

  /** Current application version. */
  currentApplicationVersion!: string;

  /** Width of the screen. */
  innerWidth!: number;

  constructor(
    private router: Router,
    public animationService: AnimationService,
    public sidemenuService: SidemenuService
  ) {
    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.sidemenuService.menu.next(
            (event as RouterEvent).url.split('/')[1]
          );
          this.loading = false;
          break;
        }
        default: {
          break;
        }
      }
    });
  }

  ngOnInit(): void {
    this.currentApplicationVersion = environment.appVersion;
    this.innerWidth = window.innerWidth;
    this.offcanvasModeDetection(window.innerWidth);
  }

  /** Get width of the screen */
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
    this.offcanvasModeDetection(window.innerWidth);
  }

  /**
   * Detect sidemenu offcanvas mode.
   * @param innerWidth windows width
   */
  private offcanvasModeDetection(innerWidth: number) {
    if (innerWidth < 991) this.sidemenuService.offcanvasMode = true;
    else this.sidemenuService.offcanvasMode = false;
  }
}
