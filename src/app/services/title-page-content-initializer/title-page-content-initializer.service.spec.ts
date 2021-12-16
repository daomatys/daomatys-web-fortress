/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TitlePageContentInitializerService } from './title-page-content-initializer.service';

describe('Service: TitlePageContentInitializer', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TitlePageContentInitializerService]
    });
  });

  it('should ...', inject([TitlePageContentInitializerService], (service: TitlePageContentInitializerService) => {
    expect(service).toBeTruthy();
  }));
});
