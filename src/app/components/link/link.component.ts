import { Component, Input } from '@angular/core';
import { LinkInterface } from './link.interface';


@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: [
    './link.component.scss'
  ]
})


export class LinkComponent {

  @Input() link: LinkInterface;

  constructor() {}
}
