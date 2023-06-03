import { TestBed } from '@angular/core/testing';

import { PatientSearchService } from './patient-search.service';

describe('PatientSearchService', () => {
  let service: PatientSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
