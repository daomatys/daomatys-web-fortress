import { Routes } from '@angular/router';

import { MainResumeComponent } from './components/main/__resume/main__resume.component';
import { MainCareersComponent } from './components/main/__careers/main__careers.component';
import { MainDefaultComponent } from './components/main/__default/main__default.component';
import { MainPortfolioComponent } from './components/main/__portfolio/main__portfolio.component';

export const APP_ROUTES:Routes = [
  { 
    path: '',
    component: MainDefaultComponent,
    data: {
      animation: 'DefaultPage'
    }
  },
  {
    path: 'careers',
    component: MainCareersComponent,
    data: {
      animation: 'CareersPage'
    }
  },
  {
    path: 'resume',
    component: MainResumeComponent,
    data: {
      animation: 'ResumePage'
    }
  },
  {
    path: 'portfolio',
    component: MainPortfolioComponent,
    data: {
      animation: 'PortfolioPage'
    }
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];