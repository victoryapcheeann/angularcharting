import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Amchart2Component } from './amchart2.component';

describe('Amchart2Component', () => {
  let component: Amchart2Component;
  let fixture: ComponentFixture<Amchart2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Amchart2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Amchart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
