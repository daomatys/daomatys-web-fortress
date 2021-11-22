import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { mainHeightAnimation } from './__height-animation/main__height-animation';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    mainHeightAnimation
  ]
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }

  
}
