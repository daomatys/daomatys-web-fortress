import { Component, OnInit } from '@angular/core';
import { ResumeBlocksInterface, resumeBlocksArray } from './main__resume.blocks';
import { RoadmapInterface } from '../../roadmap/__interface/roadmap__interface';

import roadmapSamplesArray from './main__resume.education-roadmap-samples';

@Component({
  selector: 'app-main__resume',
  templateUrl: './main__resume.component.html',
  styleUrls: ['./main__resume.component.scss']
})

export class MainResumeComponent implements OnInit {
  public roadmapSamples: RoadmapInterface[] = roadmapSamplesArray;
  public resumeBlocks: ResumeBlocksInterface[] = resumeBlocksArray;

  constructor() { }

  ngOnInit() {
  }

}
