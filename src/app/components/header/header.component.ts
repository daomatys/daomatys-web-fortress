import { Component, OnInit } from '@angular/core';
import { LinkInterface } from '../link/__interface/link__interface';

import linksItems from './__items-links/header__items-links';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public links: LinkInterface[] = linksItems;

  constructor() { }

  ngOnInit() {
  }

}
