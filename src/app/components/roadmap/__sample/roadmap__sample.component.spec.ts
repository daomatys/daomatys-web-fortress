/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RoadmapSampleComponent } from './roadmap__sample.component';

describe('RoadmapSampleComponent', () => {
  let component: RoadmapSampleComponent;
  let fixture: ComponentFixture<RoadmapSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoadmapSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadmapSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
