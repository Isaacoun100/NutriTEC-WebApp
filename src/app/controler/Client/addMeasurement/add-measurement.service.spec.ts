import { TestBed } from '@angular/core/testing';

import { AddMeasurementService } from './add-measurement.service';

describe('AddMeasurementService', () => {
  let service: AddMeasurementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddMeasurementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
