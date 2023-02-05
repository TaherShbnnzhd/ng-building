/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

/**
 * reuse-strategy.ts
 * mostly by corbfon 1/6/17
 */

import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouteReuseStrategy,
  DetachedRouteHandle,
} from '@angular/router';
import { RouteStorageObject } from './stored-routes.interface';
import { StoredRoutesService } from './stored-routes.service';

@Injectable()
export class RouteReuseService implements RouteReuseStrategy {
  constructor(private storedRoutesService: StoredRoutesService) {}
  /**
   * Determines if this route (and its subtree) should be detached to be reused later
   * @param route This is, at least as I understand it, the route that the user is currently on, and we would like to know if we want to store it
   * @returns boolean indicating that we want to (true) or do not want to (false) store that route
   */
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    if (!route.routeConfig) {
      return false;
    }

    let detach = false;

    // console.log('detaching', route, 'return: ', detach);

    if (route.routeConfig?.data) {
      route.routeConfig.data['reuse'] ? (detach = true) : (detach = false);
    }

    return detach;
  }

  /**
   * Stores the detached route
   * @param route This is stored for later comparison to requested routes, see `this.shouldAttach`
   * @param handle Later to be retrieved by this.retrieve, and offered up to whatever controller is using this class
   */
  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    const storedRoute: RouteStorageObject = {
      snapshot: route,
      handle: handle,
      path: window.location.pathname,
    };

    // console.log('store:', storedRoute, 'into: ', this.storedRoutes);
    // routes are stored by path - the key is the path name,
    // and the handle is stored under it so that you can only ever have one object stored for a single path
    if (route.routeConfig?.path) {
      this.storedRoutesService.setStoredRouteHandle(
        route.routeConfig.path,
        storedRoute.handle
      );
    }
  }

  /**
   * Determines if this route (and its subtree) should be reattached
   * @param route The route the user requested
   * @returns boolean indicating whether or not to render the stored route
   */
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    if (!route.routeConfig?.path) {
      return false;
    }

    // this will be true if the route has been stored before

    const storedRoute = this.storedRoutesService.getStoredRoute(
      route.routeConfig.path
    );

    const canAttach: boolean =
      !!route.routeConfig && !!storedRoute?.storedRoute?.handle;

    // this decides whether the route already stored should be rendered in place of the requested route, and is the return value
    // at this point we already know that the paths match because the storedResults key is the route.routeConfig.path
    // so, if the route.params and route.queryParams also match, then we should reuse the component
    if (canAttach) {
      // console.log('param comparison:');
      // console.log(
      //   this.compareObjects(
      //     route.params,
      //     this.storedRoutes[route.routeConfig.path].snapshot.params
      //   )
      // );
      // console.log('query param comparison');
      // console.log(
      //   this.compareObjects(
      //     route.queryParams,
      //     this.storedRoutes[route.routeConfig.path].snapshot.queryParams
      //   )
      // );

      const paramsMatch: boolean = this.compareObjects(
        route.params,
        storedRoute?.storedRoute?.snapshot?.params
      );
      const queryParamsMatch: boolean = this.compareObjects(
        route.queryParams,
        storedRoute?.storedRoute?.snapshot?.queryParams
      );

      // console.log(
      //   'deciding to attach...',
      //   route,
      //   'does it match?',
      //   this.storedRoutes[route.routeConfig.path].snapshot,
      //   'return: ',
      //   paramsMatch && queryParamsMatch
      // );
      return paramsMatch && queryParamsMatch;
    } else {
      return false;
    }
  }

  /**
   * Retrieves the previously stored route
   * @param route New route the user has requested
   * @returns DetachedRouteHandle object which can be used to render the component
   */
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    if (route.routeConfig && route.routeConfig.path) {
      const storedRoute = this.storedRoutesService.getStoredRoute(
        route.routeConfig.path
      );

      if (storedRoute?.storedRoute) {
        // returns handle when the route.routeConfig.path is already stored
        return storedRoute?.storedRoute?.handle;
      }
    }

    // console.log(
    //   'retrieving',
    //   'return: ',
    //   this.storedRoutes[route.routeConfig.path]
    // );

    // return null if the path does not have a routerConfig OR if there is no stored route for that routerConfig
    return null;
  }

  /**
   * Determines if a route should be reused
   * @param future The route the user is going to, as triggered by the router
   * @param curr The route the user is currently on
   * @returns boolean basically indicating true if the user intends to leave the current route
   */
  shouldReuseRoute(
    future: ActivatedRouteSnapshot,
    curr: ActivatedRouteSnapshot
  ): boolean {
    // console.log(
    //   'deciding to reuse',
    //   'future',
    //   future.routeConfig,
    //   'current',
    //   curr.routeConfig,
    //   'return: ',
    //   future.routeConfig === curr.routeConfig
    // );

    return future.routeConfig === curr.routeConfig;
  }

  /**
   * This nasty bugger finds out whether the objects are _traditionally_ equal to each other, like you might assume someone else would have put this function in vanilla JS already
   * One thing to note is that it uses coercive comparison (==) on properties which both objects have, not strict comparison (===)
   * Another important note is that the method only tells you if `compare` has all equal parameters to `base`, not the other way around
   * @param base The base object which you would like to compare another object to
   * @param compare The object to compare to base
   * @returns boolean indicating whether or not the objects have all the same properties and those properties are ==
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private compareObjects(base: any, compare: any): boolean {
    // loop through all properties in base object
    for (const baseProperty in base) {
      // determine if comparrison object has that property, if not: return false
      if (Object.prototype.hasOwnProperty.call(compare, baseProperty)) {
        switch (typeof base[baseProperty]) {
          // if one is object and other is not: return false
          // if they are both objects, recursively call this comparison function
          case 'object':
            if (
              typeof compare[baseProperty] !== 'object' ||
              !this.compareObjects(base[baseProperty], compare[baseProperty])
            ) {
              return false;
            }
            break;
          // if one is function and other is not: return false
          // if both are functions, compare function.toString() results
          case 'function':
            if (
              typeof compare[baseProperty] !== 'function' ||
              base[baseProperty].toString() !== compare[baseProperty].toString()
            ) {
              return false;
            }
            break;
          // otherwise, see if they are equal using coercive comparison
          default:
            if (base[baseProperty] != compare[baseProperty]) {
              return false;
            }
        }
      } else {
        return false;
      }
    }

    // returns true only after false HAS NOT BEEN returned through all loops
    return true;
  }
}
