import { TestBed } from '@angular/core/testing';

import { PayReportService } from './pay-report.service';

describe('PayReportService', () => {
  let service: PayReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PayReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
