import { Component, OnInit } from '@angular/core';
import { LinkInterface } from '../link/__interface/link__interface';

import linksBulk from './__links-bulk/header__links-bulk';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public links: LinkInterface[] = linksBulk;

  constructor() { }

  ngOnInit() {
  }

}
