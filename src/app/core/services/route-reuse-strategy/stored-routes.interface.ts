/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';

/** Interface for object which can store both:
 * An ActivatedRouteSnapshot, which is useful for determining whether or not you should attach a route (see this.shouldAttach)
 * A DetachedRouteHandle, which is offered up by this.retrieve, in the case that you do want to attach the stored route
 */
export interface RouteStorageObject {
  snapshot: ActivatedRouteSnapshot;
  handle: DetachedRouteHandle | null;
  path: string;
}

/** Interface for hold object which can store RouteStorageObject */
export interface RouteStorageObjectHolder {
  name: string;
  storedRoute: RouteStorageObject;
}
