import { TestBed } from '@angular/core/testing';

import { VistasService } from './vistas.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('VistasService', () => {
  let service: VistasService;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(VistasService);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
