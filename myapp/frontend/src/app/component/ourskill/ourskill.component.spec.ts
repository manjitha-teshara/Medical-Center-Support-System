import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurskillComponent } from './ourskill.component';

describe('OurskillComponent', () => {
  let component: OurskillComponent;
  let fixture: ComponentFixture<OurskillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurskillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
