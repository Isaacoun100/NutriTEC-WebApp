import { TestBed } from '@angular/core/testing';

import { AddNutriService } from './add-nutri.service';

describe('AddNutriService', () => {
  let service: AddNutriService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddNutriService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
