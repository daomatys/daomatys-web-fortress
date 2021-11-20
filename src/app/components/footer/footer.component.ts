import { Component, OnInit } from '@angular/core';
import { faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';

import { SocialIconInterface } from '../social-icon/__interface/social-icon__interface';
import socialIconsItems from './__items-social-icons/footer___items-social-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faGithub = faGithub;
  faTelegram = faTelegram;
  faEnvelopeSquare = faEnvelopeSquare;
  faPhoneSquare = faPhoneSquare;

  public socialIcons: SocialIconInterface[] = socialIconsItems;

  constructor() { }

  ngOnInit() {
  }

}
