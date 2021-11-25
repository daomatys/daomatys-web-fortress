import { Component, Input, OnInit } from '@angular/core';
import { RoadmapSampleInterface } from './__interface/roadmap-sample__interface';

@Component({
  selector: 'app-roadmap-sample',
  templateUrl: './roadmap-sample.component.html',
  styleUrls: ['./roadmap-sample.component.scss']
})
export class RoadmapSampleComponent implements OnInit {
  @Input() sample: RoadmapSampleInterface;

  constructor() { }

  ngOnInit() {
  }

}
