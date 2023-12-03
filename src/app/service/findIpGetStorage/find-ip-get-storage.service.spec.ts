import { TestBed } from '@angular/core/testing';

import { FindIpGetStorageService } from './find-ip-get-storage.service';

describe('FindIpGetStorageService', () => {
  let service: FindIpGetStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindIpGetStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
