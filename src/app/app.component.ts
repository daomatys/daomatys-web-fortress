import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';

const TEMPLATES = [ HeaderComponent, MainComponent, FooterComponent ];

@ViewChild( TEMPLATES[0] )
@ViewChild( TEMPLATES[1] )
@ViewChild( TEMPLATES[2] )

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'daomatys-web-fortress';

  constructor(
    private viewContainer: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}

  ngOnInit() {
    this.viewContainer.createEmbeddedView( this.template );
  }
}
