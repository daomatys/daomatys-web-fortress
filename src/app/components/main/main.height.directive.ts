import { Directive } from '@angular/core';
import { HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMainHeight]'
})

export class MainHeightDirective {
  @HostBinding('style.height') mainHeight: string;
  @HostListener('routerEvent', ['$event']) changeHeight(event:Event) {
    this.mainHeight = '2000px';
  }

  constructor() { }

}
