import { Component, ElementRef, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { mainHeightAnimation } from './__height-animation/main__height-animation';
import { RouterEvent } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    mainHeightAnimation
  ]
})
export class MainComponent implements OnInit {

  constructor( private elRef:ElementRef ) { 
  }

  ngOnInit() {
    const element:any = this.elRef.nativeElement.firstChild;

    console.log(element, element.offsetHeight);
  }
  
  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
  
}
