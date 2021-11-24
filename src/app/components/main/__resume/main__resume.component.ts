import { Component, OnInit } from '@angular/core';
import { ResumeSectionsInterface, resumeSectionsArray } from './main__resume.sections';

@Component({
  selector: 'app-main__resume',
  templateUrl: './main__resume.component.html',
  styleUrls: ['./main__resume.component.scss']
})

export class MainResumeComponent implements OnInit {
  public resumeSections: ResumeSectionsInterface[] = resumeSectionsArray;

  constructor() { }

  ngOnInit() {
  }

}
