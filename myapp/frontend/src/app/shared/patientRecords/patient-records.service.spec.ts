import { TestBed } from '@angular/core/testing';

import { PatientRecordsService } from './patient-records.service';

describe('PatientRecordsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PatientRecordsService = TestBed.get(PatientRecordsService);
    expect(service).toBeTruthy();
  });
});
