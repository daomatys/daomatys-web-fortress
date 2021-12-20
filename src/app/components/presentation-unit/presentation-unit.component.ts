import { Component, Input, OnInit } from '@angular/core';
import { PresentationUnitInterface } from './presentation-unit.interface';


@Component({
  selector: 'app-presentation-unit',
  templateUrl: './presentation-unit.component.html',
  styleUrls: [
    './presentation-unit.component.scss'
  ]
})


export class PresentationUnitComponent implements OnInit {

  @Input() unit: PresentationUnitInterface;

  public unitImageSrc:string;

  constructor() {}

  ngOnInit():void {
    this.unitImageSrc = 'assets/' + this.unit.src;
  }
}
