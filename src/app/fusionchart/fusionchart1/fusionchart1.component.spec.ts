import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fusionchart1Component } from './fusionchart1.component';

describe('Fusionchart1Component', () => {
  let component: Fusionchart1Component;
  let fixture: ComponentFixture<Fusionchart1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fusionchart1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fusionchart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
