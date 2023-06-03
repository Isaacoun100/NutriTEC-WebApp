import { TestBed } from '@angular/core/testing';

import { ApproveProductsService } from './approve-products.service';

describe('ApproveProductsService', () => {
  let service: ApproveProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApproveProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
