import { TestBed } from '@angular/core/testing';

import { AssignPlanService } from './assign-plan.service';

describe('AssignPlanService', () => {
  let service: AssignPlanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssignPlanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
