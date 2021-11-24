import { Component, OnInit } from '@angular/core';
import { ResumeBlocksInterface, resumeBlocksArray } from './main__resume.blocks';

@Component({
  selector: 'app-main__resume',
  templateUrl: './main__resume.component.html',
  styleUrls: ['./main__resume.component.scss']
})

export class MainResumeComponent implements OnInit {
  public resumeBlocks: ResumeBlocksInterface[] = resumeBlocksArray;

  constructor() { }

  ngOnInit() {
  }

}
