import { trigger, state, query, group, style, transition, animate, animateChild } from '@angular/animations';

export const mainHeightAnimation:any =
  trigger('routeAnimations', [
    transition('* <=> *', [

      query(':enter', [
        style({
          opacity: '0%',
          position: 'absolute',
          left: '9%'
        })
      ]),

      group([
        query(':leave', [
          animate('.4s ease', style({ opacity: '0%' }))
        ]),

        query(':enter', [
          animate('.4s ease', style({ opacity: '100%' }))
        ])
      ]),
    ])
  ]);