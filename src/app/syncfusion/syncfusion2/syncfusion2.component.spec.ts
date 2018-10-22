import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Syncfusion2Component } from './syncfusion2.component';

describe('Syncfusion2Component', () => {
  let component: Syncfusion2Component;
  let fixture: ComponentFixture<Syncfusion2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Syncfusion2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Syncfusion2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
