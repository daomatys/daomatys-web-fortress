import { Component, OnInit } from '@angular/core';
import { ResumeBlocksInterface, resumeBlocksArray } from './main__resume.blocks';
import { RoadmapSampleInterface } from '../../roadmap/__sample-interface/roadmap__interface';

import roadmapSamplesArray from './main__resume.education-roadmap-samples';

@Component({
  selector: 'app-main__resume',
  templateUrl: './main__resume.component.html',
  styleUrls: ['./main__resume.component.scss']
})

export class MainResumeComponent implements OnInit {
  public roadmapSamples: RoadmapSampleInterface[] = roadmapSamplesArray;
  public resumeBlocks: ResumeBlocksInterface[] = resumeBlocksArray;

  constructor() { }

  ngOnInit() {
  }

}
