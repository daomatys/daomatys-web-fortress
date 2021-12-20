import { Component } from '@angular/core';
import { LinkInterface } from '../link/link.interface';

import linksItems from './header.links-collection';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [
    './header.component.scss'
  ]
})


export class HeaderComponent {

  public links: LinkInterface[] = linksItems;

  constructor() {}
}
