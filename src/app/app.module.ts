import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; 
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { MainCareersComponent } from './components/main/__careers/main__careers.component';
import { MainDefaultComponent } from './components/main/__default/main__default.component';
import { MainPortfolioComponent } from './components/main/__portfolio/main__portfolio.component';
import { MainResumeComponent } from './components/main/__resume/main__resume.component';
import { FooterComponent } from './components/footer/footer.component';
import { RoadmapComponent } from './components/roadmap/roadmap.component';
import { RoadmapSampleComponent } from './components/roadmap/__sample/roadmap__sample.component';
import { PresentationUnitComponent } from './components/presentation-unit/presentation-unit.component';

import { LinkComponent } from './components/link/link.component';
import { LogotypeComponent } from './components/logotype/logotype.component';
import { SocialIconComponent } from './components/social-icon/social-icon.component';

const appRoutes: Routes = [
  { path: '',          component: MainDefaultComponent,   data: { animation: 'DefaultPage'   } },
  { path: 'careers',   component: MainCareersComponent,   data: { animation: 'CareersPage'   } },
  { path: 'resume',    component: MainResumeComponent,    data: { animation: 'ResumePage'    } },
  { path: 'portfolio', component: MainPortfolioComponent, data: { animation: 'PortfolioPage' } },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
      LogotypeComponent,
      LinkComponent,
    MainComponent,
      MainCareersComponent,
      MainDefaultComponent,
      MainPortfolioComponent,
        PresentationUnitComponent,
      MainResumeComponent,
    FooterComponent,
      SocialIconComponent,
    RoadmapComponent,
      RoadmapSampleComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    RouterModule.forRoot( appRoutes, { useHash: true } )
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
