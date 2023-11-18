import { TestBed } from '@angular/core/testing';

import { MyIpInfosService } from './my-ip-infos.service';

describe('MyIpInfosService', () => {
  let service: MyIpInfosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyIpInfosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
