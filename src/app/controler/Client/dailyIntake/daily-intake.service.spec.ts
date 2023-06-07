import { TestBed } from '@angular/core/testing';

import { DailyIntakeService } from './daily-intake.service';

describe('DailyIntakeService', () => {
  let service: DailyIntakeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DailyIntakeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
