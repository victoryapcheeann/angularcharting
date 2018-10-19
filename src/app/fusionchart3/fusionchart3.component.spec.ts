import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fusionchart3Component } from './fusionchart3.component';

describe('Fusionchart3Component', () => {
  let component: Fusionchart3Component;
  let fixture: ComponentFixture<Fusionchart3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fusionchart3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fusionchart3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
