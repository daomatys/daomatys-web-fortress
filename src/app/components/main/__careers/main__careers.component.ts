import { Component, OnInit } from '@angular/core';
import { RoadmapSampleInterface } from '../../roadmap/__sample-interface/roadmap__interface';
import employersRoadmapSamplesArray from './main__careers.employers-roadmap-samples';

@Component({
  selector: 'app-main__careers',
  templateUrl: './main__careers.component.html',
  styleUrls: ['./main__careers.component.scss']
})

export class MainCareersComponent implements OnInit {
  public employersRoadmapSamples:RoadmapSampleInterface[] = employersRoadmapSamplesArray;

  constructor() { }

  ngOnInit() {
  }
}
