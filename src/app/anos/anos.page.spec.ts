import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnosPage } from './anos.page';

describe('AnosPage', () => {
  let component: AnosPage;
  let fixture: ComponentFixture<AnosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
