import {
  ResumeBlocksInterface,
  resumeBlocksArray
} from './main__resume.blocks';

import { Component } from '@angular/core';
import { RoadmapSampleInterface } from '../../roadmap/__sample/roadmap__sample.interface';

import roadmapSamplesArray from './main__resume.education-roadmap-samples';


@Component({
  selector: 'app-main-resume',
  templateUrl: './main__resume.component.html',
  styleUrls: [
    './main__resume.component.scss'
  ]
})


export class MainResumeComponent {
  
  public roadmapSamples: RoadmapSampleInterface[] = roadmapSamplesArray;
  public resumeBlocks: ResumeBlocksInterface[] = resumeBlocksArray;

  constructor() { }
}
