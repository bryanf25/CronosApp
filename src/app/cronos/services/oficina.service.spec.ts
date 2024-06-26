import { TestBed } from '@angular/core/testing';

import { OficinaService } from './oficina.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('OficinaService', () => {
  let service: OficinaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(OficinaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
