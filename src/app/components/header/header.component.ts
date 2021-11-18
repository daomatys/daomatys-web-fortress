import { Component, OnInit } from '@angular/core';
import { Link } from '../link/__interface/link__interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public links: Link [] = [
    {
      href: 'xxx',
      text: 'portfolio'
    },
    {
      href: 'yyy',
      text: 'hyufolio'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
