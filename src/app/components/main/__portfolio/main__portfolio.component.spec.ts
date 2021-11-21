/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Main__portfolioComponent } from './main__portfolio.component';

describe('Main__portfolioComponent', () => {
  let component: Main__portfolioComponent;
  let fixture: ComponentFixture<Main__portfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Main__portfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Main__portfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
