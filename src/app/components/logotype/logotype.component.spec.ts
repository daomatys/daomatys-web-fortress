/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LogotypeComponent } from './logotype.component';

describe('LogotypeComponent', () => {
  let component: LogotypeComponent;
  let fixture: ComponentFixture<LogotypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogotypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogotypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
