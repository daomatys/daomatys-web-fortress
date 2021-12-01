import { Component, ElementRef, OnChanges, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { mainAnimation } from './main.animation';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    mainAnimation
  ]
})

export class MainComponent implements OnChanges, OnInit {

  constructor( private elem: ElementRef ) {}

  ngOnInit() {}

  ngOnChanges() {}
  
  prepareRoute( outlet: RouterOutlet ) {
    return outlet?.activatedRouteData?.['animation'];
  }
}
