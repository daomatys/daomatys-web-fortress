import { Directive, HostBinding } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Directive({
  selector: '[appMainHeight]'
})

export class MainHeightDirective {
  @HostBinding('style.height') mainHeight: string;

  constructor( private router: Router ) {
    this.router.events.subscribe( event => {
      if (event instanceof NavigationStart) {
        this.mainHeight = '2000px';
        console.log('yay');
      }
    });
  }

}
