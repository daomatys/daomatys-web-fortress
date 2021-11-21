/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Main__defaultComponent } from './main__default.component';

describe('Main__defaultComponent', () => {
  let component: Main__defaultComponent;
  let fixture: ComponentFixture<Main__defaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Main__defaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Main__defaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
