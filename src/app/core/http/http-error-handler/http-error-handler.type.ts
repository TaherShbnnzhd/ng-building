/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

/*TIP: 
 One major difference between `type` aliases vs `interfaces`
 are that `interfaces` are open and `type` aliases are closed.
 This means you can extend an `interface` by declaring it a second time.
 In the other case a `type` cannot be changed outside of its declaration. */

/**
 * Type of the handleError function returned by
 * HttpErrorHandler.createHandleError
 */
export type HandleError = <T>(
  operation?: string,
  result?: T
) => (error: HttpErrorResponse) => Observable<T>;
