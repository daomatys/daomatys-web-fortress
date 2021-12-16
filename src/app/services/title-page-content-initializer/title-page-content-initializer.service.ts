import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TitlePageContentInitializerService {
  private caseVisitedTitlePage:boolean;

  constructor() {}

  setStateFalse():void {
    this.caseVisitedTitlePage = false;
  }

  setStateTrue():void {
    this.caseVisitedTitlePage = true;
  }

  getState():boolean {
    return this.caseVisitedTitlePage;
  }
}
