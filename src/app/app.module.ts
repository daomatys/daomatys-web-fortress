import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { Main__careersComponent } from './components/main/__careers/main__careers.component';
import { Main__defaultComponent } from './components/main/__default/main__default.component';
import { Main__portfolioComponent } from './components/main/__portfolio/main__portfolio.component';
import { Main__resumeComponent } from './components/main/__resume/main__resume.component';
import { FooterComponent } from './components/footer/footer.component';

import { LinkComponent } from './components/link/link.component';
import { LogotypeComponent } from './components/logotype/logotype.component';
import { SocialIconComponent } from './components/social-icon/social-icon.component';

@NgModule({
  declarations: [			
    AppComponent,
      HeaderComponent,
      Main__careersComponent,
      Main__defaultComponent,
      Main__portfolioComponent,
      Main__resumeComponent,
      FooterComponent,
      LinkComponent,
      LogotypeComponent,
      SocialIconComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
