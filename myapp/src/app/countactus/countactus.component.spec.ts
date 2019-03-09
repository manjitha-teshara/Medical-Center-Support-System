import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountactusComponent } from './countactus.component';

describe('CountactusComponent', () => {
  let component: CountactusComponent;
  let fixture: ComponentFixture<CountactusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountactusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountactusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
