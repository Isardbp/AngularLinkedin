/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IniciComponent } from './inici.component';

describe('IniciComponent', () => {
  let component: IniciComponent;
  let fixture: ComponentFixture<IniciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IniciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
