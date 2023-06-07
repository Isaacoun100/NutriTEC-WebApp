import { TestBed } from '@angular/core/testing';

import { CreatePlanService } from './create-plan.service';

describe('CreatePlanService', () => {
  let service: CreatePlanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatePlanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
