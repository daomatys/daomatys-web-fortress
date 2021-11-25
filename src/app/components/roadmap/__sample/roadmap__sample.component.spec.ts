/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Roadmap__sampleComponent } from './roadmap__sample.component';

describe('Roadmap__sampleComponent', () => {
  let component: Roadmap__sampleComponent;
  let fixture: ComponentFixture<Roadmap__sampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Roadmap__sampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Roadmap__sampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
