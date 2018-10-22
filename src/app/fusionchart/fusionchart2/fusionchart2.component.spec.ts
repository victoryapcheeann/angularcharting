import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fusionchart2Component } from './fusionchart2.component';

describe('Fusionchart2Component', () => {
  let component: Fusionchart2Component;
  let fixture: ComponentFixture<Fusionchart2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fusionchart2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fusionchart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
