/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RelInadimplentesComponent } from './rel-inadimplentes.component';

describe('RelInadimplentesComponent', () => {
  let component: RelInadimplentesComponent;
  let fixture: ComponentFixture<RelInadimplentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelInadimplentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelInadimplentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
