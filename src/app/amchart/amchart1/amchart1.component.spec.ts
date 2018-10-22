import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Amchart1Component } from './amchart1.component';

describe('Amchart1Component', () => {
  let component: Amchart1Component;
  let fixture: ComponentFixture<Amchart1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Amchart1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Amchart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
