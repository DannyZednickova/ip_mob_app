import { TestBed } from '@angular/core/testing';

import { VsechnyMojeUdajeService } from './vsechny-moje-udaje.service';

describe('VsechnyMojeUdajeService', () => {
  let service: VsechnyMojeUdajeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VsechnyMojeUdajeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
