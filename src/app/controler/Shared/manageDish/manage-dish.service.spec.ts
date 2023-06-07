import { TestBed } from '@angular/core/testing';

import { ManageDishService } from './manage-dish.service';

describe('ManageDishService', () => {
  let service: ManageDishService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageDishService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
