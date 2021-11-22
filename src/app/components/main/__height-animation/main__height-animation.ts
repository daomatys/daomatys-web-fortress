import { trigger, state, query, group, style, transition, animate, animateChild } from '@angular/animations';

export const mainHeightAnimation:any =
  trigger('routeAnimations', [
    transition('* <=> *', [

      style({
        position: "relative",
        left: 0
      }),

      query(':enter', [
        style({ opacity: '0%' })
      ]),

      group([
        query(':leave', [
          animate('300ms ease-out', style({ opacity: '0%' }))
        ]),

        query(':enter', [
          animate('300ms ease-out', style({ opacity: '100%' }))
        ])
      ]),
    ])
  ]);