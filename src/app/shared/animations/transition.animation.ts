/* بِسْمِ اللهِ الرَّحْمنِ الرَّحِیم */

import {
  animation,
  trigger,
  animateChild,
  group,
  transition,
  animate,
  style,
  query,
} from '@angular/animations';

/** Routable animations */
export const transitionAnimation = animation([
  style({
    height: '{{ height }}',
    opacity: '{{ opacity }}',
    backgroundColor: '{{ backgroundColor }}',
  }),
  animate('{{ time }}'),
]);

/** Slide from right animation */
export const slideInAnimation = trigger('routeAnimations', [
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%',
        }),
      ],
      { optional: true }
    ),
    query(':enter', [style({ right: '-100%' })], { optional: true }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [animate('130ms ease-out', style({ opacity: 0 }))], {
        optional: true,
      }),
      query(':enter', [animate('200ms ease-out', style({ right: '0%' }))], {
        optional: true,
      }),
      query('@*', animateChild(), { optional: true }),
    ]),
  ]),
]);

/** Fade in and out animation */
export const fadeInAnimation = trigger('routeAnimations', [
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          right: 0,
          opacity: 1,
          width: '100%',
        }),
      ],
      { optional: true }
    ),
    query(':enter', [style({ opacity: 0 })], {
      optional: true,
    }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [animate('13ms ease-in', style({ opacity: 0 }))], {
        optional: true,
      }),
      query(':enter', [animate('200ms ease-out', style({ opacity: 1 }))], {
        optional: true,
      }),
      query('@*', animateChild(), { optional: true }),
    ]),
  ]),
]);
