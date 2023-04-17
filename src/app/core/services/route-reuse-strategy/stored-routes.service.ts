/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { Injectable } from '@angular/core';
import { DetachedRouteHandle } from '@angular/router';
import {
  RouteStorageObject,
  RouteStorageObjectHolder,
} from './stored-routes.interface';

@Injectable()
export class StoredRoutesService {
  /**
   * Object which will store RouteStorageObjects indexed by keys
   * The keys will all be a path (as in route.routeConfig.path)
   * This allows us to see if we've got a route stored for the requested path
   */
  private storedRoutes: RouteStorageObjectHolder[] = [];

  /**
   * Add new route with it's data to route storage objects holder
   * @param path Route of the component
   * @param storedRoute Route data to store
   */
  addStoredRoute(name: string, storedRoute: RouteStorageObject) {
    if (this.getStoredRouteIndex(name) === -1)
      this.storedRoutes.push({ name: name, storedRoute: storedRoute });
  }

  /**
   * Add new route with it's data to route storage objects holder
   * @param name Route of the component
   * @param handle Route handle data
   */
  setStoredRouteHandle(name: string, handle: DetachedRouteHandle | null) {
    const storedRouteIndex = this.getStoredRouteIndex(name);

    if (storedRouteIndex > -1)
      this.storedRoutes[storedRouteIndex].storedRoute.handle = handle;
  }

  /**
   * Get selected route with it's data form route storage objects holder
   * @param path Route of the component
   * @returns Route with it's data or undifiend
   */
  getStoredRoute(name: string) {
    return this.storedRoutes[this.getStoredRouteIndex(name)];
  }

  /**
   * Get all routes with thier data form route storage objects holder
   * @returns All route with it's data
   */
  getAllStoredRoutes() {
    return this.storedRoutes;
  }

  /**
   * Remove selected route with thier data form route storage objects holder
   * @param name Route of the component
   */
  deleteStoredRoute(name: string) {
    const storedRouteIndex = this.getStoredRouteIndex(name);

    if (storedRouteIndex > -1) this.storedRoutes.splice(storedRouteIndex, 1);
  }

  /**
   * Remove all routes with thier data form route storage objects holder
   */
  clearStoredRoutes() {
    this.storedRoutes.splice(0, this.storedRoutes.length);
  }

  /**
   * Check if stored routes has input name
   * @param name stored route name
   * @returns index
   */
  private getStoredRouteIndex(name: string) {
    const index = this.storedRoutes.findIndex(
      storedRoute => storedRoute.name === name
    );

    return index;
  }
}
