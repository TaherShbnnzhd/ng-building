/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  Event,
} from '@angular/router';
import { fadeInAnimation } from '@shared/animations/transition.animation';
import { AnimationService } from '@shared/services/animation.service';
import { filter, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'block-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [fadeInAnimation],
  providers: [AnimationService],
})
export class MainComponent implements OnInit {
  public menuToggle = false;

  public pageTitle = '';

  public loading = false;

  public currentApplicationVersion!: string;

  constructor(
    private router: Router,
    public animationService: AnimationService
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

    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          let route: ActivatedRoute = this.router.routerState.root;
          let routeTitle = '';
          while (route?.firstChild) {
            route = route.firstChild;
          }
          if (route.snapshot.data['title']) {
            routeTitle = route?.snapshot.data['title'];
          }
          return routeTitle;
        })
      )
      .subscribe((title: string) => {
        if (title) {
          this.pageTitle = title;
        }
      });
  }
}
