import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TitlePageContentInitializerService {
  private caseMessageSource = new BehaviorSubject( false );

  public caseCurrentPageIsTitle = this.caseMessageSource.asObservable();

  constructor() {}

  setStateFalse():void {
    this.caseMessageSource.next( false );
    this.debug( this.caseCurrentPageIsTitle );
  }

  setStateTrue():void {
    this.caseMessageSource.next( true );
    this.debug( this.caseCurrentPageIsTitle );
  }

  debug( data:Observable<boolean> ):void {
    data.subscribe( message=>console.log(message) );
  }
}
