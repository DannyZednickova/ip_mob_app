import { TestBed } from '@angular/core/testing';

import { MyIpGetStorageDataService } from './my-ip-get-storage-data.service';

describe('MyIpGetStorageDataService', () => {
  let service: MyIpGetStorageDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyIpGetStorageDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
