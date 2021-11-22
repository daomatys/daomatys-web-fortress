import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; 
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { Main__careersComponent } from './components/main/__careers/main__careers.component';
import { Main__defaultComponent } from './components/main/__default/main__default.component';
import { Main__portfolioComponent } from './components/main/__portfolio/main__portfolio.component';
import { Main__resumeComponent } from './components/main/__resume/main__resume.component';
import { ImageBlockComponent } from './components/image-block/image-block.component';
import { FooterComponent } from './components/footer/footer.component';

import { LinkComponent } from './components/link/link.component';
import { LogotypeComponent } from './components/logotype/logotype.component';
import { SocialIconComponent } from './components/social-icon/social-icon.component';

const appRoutes: Routes = [
  { path: '',          component: Main__defaultComponent,   data: { animation: 'DefaultPage'   } },
  { path: 'careers',   component: Main__careersComponent,   data: { animation: 'CareersPage'   } },
  { path: 'resume',    component: Main__resumeComponent,    data: { animation: 'ResumePage'    } },
  { path: 'portfolio', component: Main__portfolioComponent, data: { animation: 'PortfolioPage' } }
];

@NgModule({
  declarations: [			
    AppComponent,
    HeaderComponent,
      LinkComponent,
      LogotypeComponent,
    MainComponent,
      Main__careersComponent,
      Main__defaultComponent,
      Main__portfolioComponent,
      Main__resumeComponent,
    ImageBlockComponent,
    FooterComponent,
      SocialIconComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
