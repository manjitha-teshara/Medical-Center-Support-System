import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestockMedicineComponent } from './restock-medicine.component';

describe('RestockComponent', () => {
  let component: RestockMedicineComponent;
  let fixture: ComponentFixture<RestockMedicineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestockMedicineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestockMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
