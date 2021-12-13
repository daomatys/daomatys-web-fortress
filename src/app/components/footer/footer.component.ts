import { Component, AfterViewInit } from '@angular/core';

import { SocialIconInterface } from '../social-icon/social-icon.interface';
import socialIconsItems from './footer.social-icons-collection';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements AfterViewInit {
  public socialIcons:SocialIconInterface[] = socialIconsItems;
  public changeableWord:string = 'call';

  constructor() {}

  ngAfterViewInit():void {
    const wrap = ( document.querySelector('#red-eyes') as HTMLObjectElement );

    wrap?.addEventListener('load', () => {
      const coverage = ( wrap.contentDocument?.querySelector('#red-eyes__coverage') as Element );

      this.recursiveWinkAnimation( coverage );
    });
  }

  recursiveWinkAnimation( coverage:Element ) {
    const applyAnimation = function applyAnimationForReal():void {
      const randomTime = Math.floor( Math.random() * Math.floor( 10000 ) );

      const animation = coverage?.animate({
        transform: [ "translateY(3px)", "translateY(0px)" ]
      }, {
        duration: 500,
        easing: "ease",
      });

      animation.onfinish = () => setTimeout( applyAnimation, randomTime )
    }

    applyAnimation();
  }

  onMouseEnterEvent( marker:string ):void {
    this.changeableWord = marker;
  }
}
