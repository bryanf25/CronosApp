import { TestBed } from '@angular/core/testing';

import { CentroCanjeService } from './centro-canje.service';

describe('CentroCanjeService', () => {
  let service: CentroCanjeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentroCanjeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
