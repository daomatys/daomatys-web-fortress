import { Component, Input, OnInit } from '@angular/core';

import { SocialIconInterface } from '../social-icon/__interface/social-icon__interface';

@Component({
  selector: 'app-social-icon',
  templateUrl: './social-icon.component.html',
  styleUrls: ['./social-icon.component.scss']
})
export class SocialIconComponent implements OnInit {
  @Input() socialIcon: SocialIconInterface;

  public iconTarget:string;
  public iconRel:string;

  constructor() { }

  ngOnInit() {
    const casePage:boolean = this.socialIcon.href.search('\:\/\/') > -1 ;

    this.iconTarget = casePage ? '_blank' : '' ;
    this.iconRel = casePage ? 'noopener noreferrer' : '' ;
  }

}
