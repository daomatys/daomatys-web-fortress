import { Component, Input, OnInit } from '@angular/core';

import { faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';

import { SocialIconInterface } from '../social-icon/__interface/social-icon__interface';

@Component({
  selector: 'app-social-icon',
  templateUrl: './social-icon.component.html',
  styleUrls: ['./social-icon.component.scss']
})
export class SocialIconComponent implements OnInit {
  faGithub = faGithub;
  faTelegram = faTelegram;
  faEnvelopeSquare = faEnvelopeSquare;
  faPhoneSquare = faPhoneSquare;

  @Input() socialIcon: SocialIconInterface;

  constructor() { }

  ngOnInit() {
  }

}
