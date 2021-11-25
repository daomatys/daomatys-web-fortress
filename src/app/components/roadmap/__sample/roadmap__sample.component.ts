import { Component, Input, OnInit } from '@angular/core';
import { RoadmapSampleInterface } from '../__sample-interface/roadmap__interface';

@Component({
  selector: 'app-roadmap-sample',
  templateUrl: './roadmap__sample.component.html',
  styleUrls: ['./roadmap__sample.component.scss']
})

export class RoadmapSampleComponent implements OnInit {
  @Input() sample: RoadmapSampleInterface;

  constructor() { }

  ngOnInit() {
  }

}