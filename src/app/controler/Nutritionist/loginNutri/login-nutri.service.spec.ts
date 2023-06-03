import { TestBed } from '@angular/core/testing';

import { LoginNutriService } from './login-nutri.service';

describe('LoginNutriService', () => {
  let service: LoginNutriService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginNutriService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
