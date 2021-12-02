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

  constructor( ) {}

  ngOnInit() {
    this.currentRoutePath = '';
  }
  
  prepareRoute( outlet: RouterOutlet ) {
    const newPath:string = outlet?.activatedRoute.snapshot.url[0]?.path;

    this.defineForestImagePath( newPath );
    
    return outlet?.activatedRouteData?.['animation'];
  }

  defineForestImagePath( newPath:string ) {
    const currentPath:string = this.currentRoutePath;

    if ( currentPath !== newPath ) {
      this.currentRoutePath = newPath;

      if ( newPath ) {
        this.imagePath = "assets/forest_flat.svg";
      }
      if ( !newPath ) {
        this.imagePath = "assets/forest.svg";
      }
    }
  }
}
