import { Component, OnInit } from '@angular/core';
import { PresentationUnitInterface } from '../../presentation-unit/presentation-unit.interface';

import presentationUnitsArray from './main__portfolio.presentation-units.collection';

@Component({
  selector: 'app-main__portfolio',
  templateUrl: './main__portfolio.component.html',
  styleUrls: ['./main__portfolio.component.scss']
})

export class MainPortfolioComponent implements OnInit {
  public presentationUnits: PresentationUnitInterface[] = presentationUnitsArray;

  constructor() {}

  ngOnInit() {}
}
