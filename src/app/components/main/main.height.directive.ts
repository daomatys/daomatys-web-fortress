import { Directive } from '@angular/core';
import { Component, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appMain.height]'
})
export class MainHeightDirective {
  @HostBinding('style.height') mainHeight: string;
  @HostListener('routerEvent', ['$event']) changeHeight(event:Event) {
    this.mainHeight
  }

  constructor() { }

}
