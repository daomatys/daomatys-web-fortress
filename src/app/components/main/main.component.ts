import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet, RouterState, UrlSegment } from '@angular/router';
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

  public currentRoutePath:string;
  public imagePath:string;

  constructor( ) {
  }

  ngOnInit() {
    this.currentRoutePath = '';
  }
  
  prepareRoute( outlet: RouterOutlet ) {
    const newRoutePath:string = outlet?.activatedRoute.snapshot.url[0]?.path;

    if ( this.currentRoutePath !== newRoutePath ) {
      this.currentRoutePath = newRoutePath;

      if ( newRoutePath ) {
        this.imagePath = "assets/forest_flat.svg";
      }
      if ( !newRoutePath ) {
        this.imagePath = "assets/forest.svg";
      }
    }

    return outlet?.activatedRouteData?.['animation'];
  }
}
