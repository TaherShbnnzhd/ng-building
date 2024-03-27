/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import { Injectable } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';

@Injectable()
export class AnimationService {
  constructor(private contexts: ChildrenOutletContexts) {}

  /** Get route animation data */
  public getRouteAnimationData(): string | null {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }
}
