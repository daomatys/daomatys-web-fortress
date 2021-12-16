import { Component, AfterViewInit } from '@angular/core';

import { TitlePageContentInitializerService } from 'src/app/services/title-page-content-initializer/title-page-content-initializer.service';

@Component({
  selector: 'app-red-eyes',
  templateUrl: './red-eyes.component.html',
  styleUrls: ['./red-eyes.component.scss']
})
export class RedEyesComponent implements AfterViewInit {

  constructor( private titlePageService:TitlePageContentInitializerService ) {}

  ngAfterViewInit():void {
    const wrap = ( document.querySelector('#red-eyes') as HTMLObjectElement );

    wrap?.addEventListener('load', () => {
      const coverage = ( wrap.contentDocument?.querySelector('#red-eyes__coverage') as Element );

      this.recursiveWinkAnimation( coverage, this.titlePageService );
    });
  }

  recursiveWinkAnimation( coverage:Element, service:TitlePageContentInitializerService ):void {
    const applyAnimation = function applyAnimationForReal():void {
      const randomTime = Math.floor( Math.random() * Math.floor( 10000 ) );

      const animation = coverage?.animate({
        transform: [ "translateY(3px)", "translateY(0px)" ]
      }, {
        duration: 500,
        easing: "ease",
      });

      animation?.finished.then( () => setTimeout( applyAnimation, randomTime ) )
    }

    applyAnimation();
  }
}
