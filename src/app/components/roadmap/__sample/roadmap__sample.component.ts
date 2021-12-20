import { Component, Input } from '@angular/core';
import { RoadmapSampleInterface } from './roadmap__sample.interface';


@Component({
  selector: 'app-roadmap-sample',
  templateUrl: './roadmap__sample.component.html',
  styleUrls: [
    './roadmap__sample.component.scss'
  ]
})


export class RoadmapSampleComponent {

  @Input() sample: RoadmapSampleInterface;

  constructor() {}
}