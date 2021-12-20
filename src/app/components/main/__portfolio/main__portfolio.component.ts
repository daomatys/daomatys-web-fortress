import { Component } from '@angular/core';
import { PresentationUnitInterface } from '../../presentation-unit/presentation-unit.interface';

import presentationUnitsArray from './main__portfolio.presentation-units-collection';


@Component({
  selector: 'app-main-portfolio',
  templateUrl: './main__portfolio.component.html',
  styleUrls: [
    './main__portfolio.component.scss'
  ]
})


export class MainPortfolioComponent {

  public presentationUnits: PresentationUnitInterface[] = presentationUnitsArray;

  constructor() {}
}
