import { trigger, state, query, group, style, transition, animate, animateChild } from '@angular/animations';

const easing:string = '.4s ease';

export const mainAnimation = 
  trigger('routeAnimations', [
    transition('* <=> *', [

      query(':enter', style({
        opacity: '0',
        position: 'absolute'
      })),

      query(':leave', style({
        position: 'relative'
      })),

      group([
        query(':leave', [
          animate( easing, style({ opacity: '0' }) )
        ]),

        query(':enter', [
          animate( easing, style({ opacity: '1' }) )
        ])
      ]),
    ])
  ]);
