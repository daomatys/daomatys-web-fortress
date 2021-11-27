import { Component, OnInit } from '@angular/core';

import { SocialIconInterface } from '../social-icon/social-icon.interface';
import socialIconsItems from './__items-social-icons/footer___items-social-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public socialIcons: SocialIconInterface[] = socialIconsItems;

  constructor() { }

  ngOnInit() {
  }

}
