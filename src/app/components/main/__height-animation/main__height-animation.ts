import { trigger, state, query, group, style, transition, animate, animateChild } from '@angular/animations';

const easing:string = '.4s ease';

export const mainHeightAnimation:any = 
  trigger('routeAnimations', [ /*
    transition('* <=> *', [

      query(':leave', [
        style({
          position: 'relative',
        })
      ]),

      query(':enter', [
        style({
          opacity: '0%',
          position: 'absolute',
          left: '9%'
        })
      ]),

      group([
        query(':leave', [
          animate( easing, style({ opacity: '0%' }) )
        ]),

        query(':enter', [
          animate( easing, style({ opacity: '100%' }) )
        ])
      ]),
    ])*/
  ]);
  