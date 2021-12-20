import { Component } from '@angular/core';
import { RoadmapSampleInterface } from '../../roadmap/__sample/roadmap__sample.interface';

import employersRoadmapSamplesArray from './main__careers.employers-roadmap-samples';


@Component({
  selector: 'app-main-careers',
  templateUrl: './main__careers.component.html',
  styleUrls: [
    './main__careers.component.scss'
  ]
})


export class MainCareersComponent {

  public employersRoadmapSamples:RoadmapSampleInterface[] = employersRoadmapSamplesArray;

  constructor() {}
}
