import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class TitlePageContentInitializerService {
  
  private caseMessageSource = new BehaviorSubject( false );
  public caseCurrentPageIsTitle = this.caseMessageSource.asObservable();

  constructor() {}

  setStateFalse():void {
    this.caseMessageSource.next( false );
  }

  setStateTrue():void {
    this.caseMessageSource.next( true );
  }
}
