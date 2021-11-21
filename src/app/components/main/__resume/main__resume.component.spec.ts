/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Main__resumeComponent } from './main__resume.component';

describe('Main__resumeComponent', () => {
  let component: Main__resumeComponent;
  let fixture: ComponentFixture<Main__resumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Main__resumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Main__resumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
