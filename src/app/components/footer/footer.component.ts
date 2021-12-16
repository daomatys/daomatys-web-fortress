import { Component, AfterViewInit, OnInit } from '@angular/core';

import { SocialIconInterface } from '../social-icon/social-icon.interface';
import socialIconsItems from './footer.social-icons-collection';

import { TitlePageContentInitializerService } from 'src/app/services/title-page-content-initializer/title-page-content-initializer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit{
  public socialIcons:SocialIconInterface[] = socialIconsItems;
  public changeableWord:string = 'call';
  public eyesState:boolean;

  constructor( private titlePageService:TitlePageContentInitializerService ) {}

  ngOnInit():void {
    this.titlePageService.caseCurrentPageIsTitle.subscribe( message => this.eyesState = message )
  }

  onMouseEnterEvent( marker:string ):void {
    this.changeableWord = marker;
  }
}
