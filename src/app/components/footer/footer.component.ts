import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { SocialIconInterface } from '../social-icon/social-icon.interface';
import socialIconsItems from './footer.social-icons-collection';

import { TitlePageContentInitializerService } from 'src/app/services/title-page-content-initializer/title-page-content-initializer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  providers: [
    TitlePageContentInitializerService
  ],
})

export class FooterComponent implements OnInit, AfterViewInit {
  public socialIcons:SocialIconInterface[] = socialIconsItems;
  public changeableWord:string = 'call';
  public eyesState:boolean;

  constructor( private titlePageService:TitlePageContentInitializerService ) {}

  ngOnInit():void {
    this.titlePageService.caseCurrentPageIsTitle.subscribe( message => this.eyesState = message )
  }

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

  onMouseEnterEvent( marker:string ):void {
    this.changeableWord = marker;
  }
}
