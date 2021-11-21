/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Main__careersComponent } from './main__careers.component';

describe('Main__careersComponent', () => {
  let component: Main__careersComponent;
  let fixture: ComponentFixture<Main__careersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Main__careersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Main__careersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
