import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { mainAnimation } from './main.animation';

import { TitlePageContentInitializerService } from 'src/app/services/title-page-content-initializer/title-page-content-initializer.service';

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

  constructor( private titlePageInitService:TitlePageContentInitializerService ) {}

  ngOnInit():void {
    this.currentRoutePath = '';
  }
  
  prepareRoute( outlet: RouterOutlet ):string {
    const newPath:string = outlet?.activatedRoute.snapshot.url[0]?.path;

    this.defineForestImagePath( newPath );

    return outlet?.activatedRouteData?.['animation'];
  }

  defineForestImagePath( newPath:string ):void {
    const currentPath:string = this.currentRoutePath;
    
    if ( currentPath !== newPath ) {
      this.currentRoutePath = newPath;

      if ( newPath ) {
        this.imagePath = "assets/forest_flat.svg";
        this.titlePageInitService.setStateFalse();
      }
      if ( !newPath ) {
        this.imagePath = "assets/forest.svg";
        this.titlePageInitService.setStateTrue();
      }
    }
  }
}
