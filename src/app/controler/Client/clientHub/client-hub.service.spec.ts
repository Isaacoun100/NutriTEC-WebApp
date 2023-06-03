import { TestBed } from '@angular/core/testing';

import { ClientHubService } from './client-hub.service';

describe('ClientHubService', () => {
  let service: ClientHubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientHubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
