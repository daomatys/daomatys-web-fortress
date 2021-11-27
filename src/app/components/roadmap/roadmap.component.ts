import { Component, Input, OnInit } from '@angular/core';
import { RoadmapSampleInterface } from './__sample/roadmap__sample.interface';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss']
})

export class RoadmapComponent implements OnInit {
  @Input() roadmapSamples: RoadmapSampleInterface[];

  constructor() { }

  ngOnInit() {
  }

}
