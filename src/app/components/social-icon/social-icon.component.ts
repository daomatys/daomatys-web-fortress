import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { MarkedSocialIconInterface } from './social-icon.interface';

@Component({
  selector: 'app-social-icon',
  templateUrl: './social-icon.component.html',
  styleUrls: ['./social-icon.component.scss']
})

export class SocialIconComponent implements OnInit {
  @Input() socialIcon: MarkedSocialIconInterface;
  @Output() onMouseEnter = new EventEmitter<HTMLElement>()

  public iconTarget:string;
  public iconRel:string;

  constructor() { }

  ngOnInit() {
    const casePage:boolean = this.socialIcon.href.search('\:\/\/') > -1 ;

    this.iconTarget = casePage ? '_blank' : '' ;
    this.iconRel = casePage ? 'noopener noreferrer' : '' ;
  }

  emitMouseEnter( target:HTMLElement ):void {
    const marker = target.getAttribute('data-marker');

    if ( marker ) {
      this.onMouseEnter.emit( target );
    }
  }
}
