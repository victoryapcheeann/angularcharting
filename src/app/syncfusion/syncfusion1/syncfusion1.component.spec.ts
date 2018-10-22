import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Syncfusion1Component } from './syncfusion1.component';

describe('Syncfusion1Component', () => {
  let component: Syncfusion1Component;
  let fixture: ComponentFixture<Syncfusion1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Syncfusion1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Syncfusion1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
