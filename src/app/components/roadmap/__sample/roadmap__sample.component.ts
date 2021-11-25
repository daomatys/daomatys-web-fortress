import { Component, Input, OnInit } from '@angular/core';
import { RoadmapInterface } from './../__interface/roadmap__interface';

@Component({
  selector: 'app-roadmap-sample',
  templateUrl: './roadmap-sample.component.html',
  styleUrls: ['./roadmap-sample.component.scss']
})

export class RoadmapSampleComponent implements OnInit {
  @Input() sample: RoadmapInterface;

  constructor() { }

  ngOnInit() {
  }

}