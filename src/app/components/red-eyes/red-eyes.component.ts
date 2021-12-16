import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-red-eyes',
  templateUrl: './red-eyes.component.html',
  styleUrls: ['./red-eyes.component.scss']
})
export class RedEyesComponent implements AfterViewInit {

  constructor() {}

  ngAfterViewInit():void {
    const wrap = ( document.querySelector('#red-eyes') as HTMLObjectElement );

    wrap?.addEventListener('load', () => {
      const coverage = ( wrap.contentDocument?.querySelector('#red-eyes__coverage') as Element );

      this.recursiveWinkAnimation( coverage );
    });
  }

  recursiveWinkAnimation( coverage:Element ):void {
    const applyAnimation = function applyAnimationForReal():void {
      const randomTime = Math.floor( Math.random() * Math.floor( 10000 ) );

      const animation = coverage?.animate({
        transform: [ "translateY(3px)", "translateY(0px)" ]
      }, {
        duration: 500,
        easing: "ease",
      });

      animation.onfinish = () => setTimeout( applyAnimation, randomTime );
    }

    applyAnimation();
  }
}
