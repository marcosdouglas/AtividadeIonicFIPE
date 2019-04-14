import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelosPage } from './modelos.page';

describe('ModelosPage', () => {
  let component: ModelosPage;
  let fixture: ComponentFixture<ModelosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
