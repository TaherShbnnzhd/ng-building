/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  NavigationEnd,
  RouteConfigLoadEnd,
  Router,
  Scroll,
} from '@angular/router';

import { filter, map } from 'rxjs';

import {
  RouteStorageObject,
  RouteStorageObjectHolder,
} from '../../services/route-reuse-strategy/stored-routes.interface';
import { StoredRoutesService } from '../../services/route-reuse-strategy/stored-routes.service';

@Component({
  selector: 'block-active-tabs-bar',
  templateUrl: './active-tabs-bar.component.html',
  styleUrls: ['./active-tabs-bar.component.scss'],
})
export class ActiveTabsBarComponent implements OnInit {
  activatedKey!: string;
  activeTabs: RouteStorageObjectHolder[] = [];

  constructor(
    private router: Router,
    public storedRoutesService: StoredRoutesService
  ) {}

  ngOnInit(): void {
    // Add active tab from ActivatedRoute
    this.router.events
      .pipe(
        filter(
          (event) =>
            // When navigation ends successfully.
            event instanceof NavigationEnd ||
            // After a route has been lazy loaded.
            event instanceof RouteConfigLoadEnd ||
            // Detect redirectUrl.
            // When the user scrolls.
            event instanceof Scroll
        ),
        map(() => {
          let route: ActivatedRoute = this.router.routerState.root;

          while (route?.firstChild) {
            route = route.firstChild;
          }

          return route;
        })
      )
      .subscribe((route) => {
        if (route.routeConfig?.path) {
          if (route.snapshot.data['reuse']) {
            const storedRoute: RouteStorageObject = {
              snapshot: route.snapshot,
              handle: null,
              path: this.getResolvedUrl(route.snapshot),
            };

            this.storedRoutesService.addStoredRoute(
              route.routeConfig.path,
              storedRoute
            );

            this.activeTabs = this.storedRoutesService.getAllStoredRoutes();

            this.activatedKey = route.routeConfig?.path;
          } else {
            this.activatedKey = '';
          }
        }
      });
  }

  /**
   * Get full routed path from route snapshot
   * @param route route snapshot
   * @returns full routed path
   */
  private getResolvedUrl(route: ActivatedRouteSnapshot): string {
    return route.pathFromRoot
      .map((v) => v.url.map((segment) => segment.toString()).join('/'))
      .join('/');
  }

  /**
   * Navigate to selected tab's path
   * @param route tab path
   */
  navigateRoute(route: string) {
    if (route) this.router.navigate([route]);
  }

  /**
   * Delete tab's path data and navigate to prev tab or home
   * @param route tab path
   */
  discardRoute(route: string) {
    if (route) {
      const prevIndex =
        this.activeTabs.findIndex((activeTab) => activeTab.name === route) - 1;

      const nextIndex = this.activeTabs.findIndex(
        (activeTab) => activeTab.name === route
      );

      this.storedRoutesService.deleteStoredRoute(route);

      if (route === this.activatedKey)
        if (nextIndex < this.activeTabs.length)
          this.router.navigate([this.activeTabs[nextIndex].storedRoute.path]);
        else if (prevIndex > -1)
          this.router.navigate([this.activeTabs[prevIndex].storedRoute.path]);
        else this.router.navigate(['/home/dashboard']);
    }
  }
}
