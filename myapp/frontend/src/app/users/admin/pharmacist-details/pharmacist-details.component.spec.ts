import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacistDetailsComponent } from './pharmacist-details.component';

describe('PharmacistDetailsComponent', () => {
  let component: PharmacistDetailsComponent;
  let fixture: ComponentFixture<PharmacistDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacistDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacistDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
