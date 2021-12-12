import { Component, AfterViewInit } from '@angular/core';

import { MarkedSocialIconInterface } from '../social-icon/social-icon.interface';
import socialIconsItems from './footer.social-icons-collection';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements AfterViewInit {
  public socialIcons: MarkedSocialIconInterface[] = socialIconsItems;

  public changeableWord:string = 'call';

  constructor() {}

  ngAfterViewInit() {
    const icons = document.querySelectorAll('.footer__social-icons app-social-icon');

    //icons.forEach( icon => icon.onmouseenter = () => this.changeableWord = icon.getAttribute('data-marker') )
  }
}
