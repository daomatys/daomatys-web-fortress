import { Component, Input, OnInit } from '@angular/core';
import { PresentationUnitInterface } from './__interface/presentation-unit__interface';

@Component({
  selector: 'app-presentation-unit',
  templateUrl: './presentation-unit.component.html',
  styleUrls: ['./presentation-unit.component.scss']
})

export class PresentationUnitComponent implements OnInit {
  @Input() unit: PresentationUnitInterface;

  constructor() { }

  ngOnInit() {
  }
}
