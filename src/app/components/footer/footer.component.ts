import { Component } from '@angular/core';

import { SocialIconInterface } from '../social-icon/social-icon.interface';
import socialIconsItems from './footer.social-icons-collection';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent {
  public socialIcons: SocialIconInterface[] = socialIconsItems;

  public changeableWord:string | null = 'call';

  constructor() {}

  onMouseEnterEvent( target:HTMLElement ):void {
    this.changeableWord = target.getAttribute('data-marker');
  }
}
