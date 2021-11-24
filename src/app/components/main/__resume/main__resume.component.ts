import { Component, OnInit } from '@angular/core';
import resumeInfoBlocksCollection from './main__resume.data.json';

@Component({
  selector: 'app-main__resume',
  templateUrl: './main__resume.component.html',
  styleUrls: ['./main__resume.component.scss']
})

export class MainResumeComponent implements OnInit {
  public infoBlocks: {
    title: string,
    texts: string[]
  }[] = resumeInfoBlocksCollection;

  constructor() { }

  ngOnInit() {
  }

}
