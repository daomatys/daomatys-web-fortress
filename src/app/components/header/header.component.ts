import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public links: object [] = [
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
