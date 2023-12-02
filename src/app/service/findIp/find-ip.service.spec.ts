import { TestBed } from '@angular/core/testing';

import { FindIpService } from './find-ip.service';

describe('FindIpService', () => {
  let service: FindIpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindIpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
