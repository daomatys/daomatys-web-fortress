import { Component, Input, OnInit } from '@angular/core';

import { SocialIconInterface } from '../social-icon/__interface/social-icon__interface';

@Component({
  selector: 'app-social-icon',
  templateUrl: './social-icon.component.html',
  styleUrls: ['./social-icon.component.scss']
})
export class SocialIconComponent implements OnInit {
  @Input() socialIcon: SocialIconInterface;

  constructor() { }

  ngOnInit() {
  }

}
