/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RedEyesComponent } from './red-eyes.component';

describe('RedEyesComponent', () => {
  let component: RedEyesComponent;
  let fixture: ComponentFixture<RedEyesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedEyesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedEyesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
