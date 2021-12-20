import { Component, Input } from '@angular/core';
import { RoadmapSampleInterface } from './__sample/roadmap__sample.interface';


@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: [
    './roadmap.component.scss'
  ]
})


export class RoadmapComponent {

  @Input() roadmapSamples: RoadmapSampleInterface[];

  constructor() {}
}
