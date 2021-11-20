import { Component, OnInit, Input } from '@angular/core';
import { LinkInterface } from './__interface/link__interface';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {

  @Input() link: LinkInterface;

  constructor() { }

  ngOnInit() {
  }

}
