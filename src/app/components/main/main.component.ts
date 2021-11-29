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

  startHeight: number;
  endHeight: number;
  heights: {
    start: number,
    end: number
  };

  constructor( private elem: ElementRef ) {}

  ngOnInit() {
    this.startHeight = this.elem.nativeElement.clientHeight;
    this.endHeight = this.elem.nativeElement.clientHeight;
    this.heights = {
      start: this.startHeight,
      end: this.endHeight
    };
  }

  ngOnChanges() {
    this.endHeight = this.elem.nativeElement.clientHeight;
    console.log( this.endHeight, this.startHeight )



    this.startHeight = this.endHeight;
  }
  
  prepareRoute( outlet: RouterOutlet ) {
    this.heights = {
      start: this.startHeight,
      end: this.endHeight
    };
    return outlet?.activatedRouteData?.['animation'];
  }
}
