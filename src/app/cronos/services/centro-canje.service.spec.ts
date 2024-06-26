import { TestBed } from '@angular/core/testing';

import { CentroCanjeService } from './centro-canje.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CentroCanjeService', () => {
  let service: CentroCanjeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(CentroCanjeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
