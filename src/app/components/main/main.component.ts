import { Component, OnInit } from '@angular/core';
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

export class MainComponent implements OnInit {

  constructor() {}

  ngOnInit() {}
  
  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
}
