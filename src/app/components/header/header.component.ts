import { Component, OnInit } from '@angular/core';
import { Link } from '../link/__interface/link__interface';

import linksBulk from './__links-bulk/header__links-bulk';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public links: Link[] = linksBulk;

  constructor() { }

  ngOnInit() {
  }

}
