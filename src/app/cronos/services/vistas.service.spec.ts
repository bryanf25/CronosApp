import { TestBed } from '@angular/core/testing';

import { VistasService } from './vistas.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RechazosVisacion } from '../interfaces/rechazos-visacion.interface';


import { mockBackend } from '../../mocks/mockbackend';

import { environment } from '../../../environments/enviroment';
import { DevolucionEnviada } from '../interfaces/devolucion-enviada.interface';
import { ChequeFueraRango } from '../interfaces/cheque-fuera-rango.interface';
import { DevolucionRecibida } from '../interfaces/devolucion-recibida.interface';



describe('VistasService', () => {
  let service: VistasService;
  let httpMock: HttpTestingController;
  const apiUrl = environment.apiUrl;



  beforeEach(() => {

    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(VistasService);
    httpMock = TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch rechazos visacion ya pagados', () => {
    const dummyRechazos: RechazosVisacion[] = mockBackend.rechazosVisacion

    service.getRechazosVisacionYaPagados().subscribe((rechazos) => {
      expect(rechazos.length).toBe(5);
      expect(rechazos).toEqual(dummyRechazos);
    });

    const req = httpMock.expectOne(`${apiUrl}/rechazosVisacion`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyRechazos);
  });

  it('should fetch devolucion enviada', () => {
    const dummyDevolucion: DevolucionEnviada[] = mockBackend.devolucionEnviada;

    service.getDevolucionEnviada().subscribe((devolucion) => {
      expect(devolucion.length).toBe(dummyDevolucion.length);
      expect(devolucion).toEqual(dummyDevolucion);
    });

    const req = httpMock.expectOne(`${apiUrl}/devolucionEnviada`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyDevolucion);
  });

  it('should fetch cheques fuera de rango', () => {
    const dummyCheques: ChequeFueraRango[] = mockBackend.chequesFueraRango;

    service.getChequesFueraRango().subscribe((cheques) => {
      expect(cheques.length).toBe(dummyCheques.length);
      expect(cheques).toEqual(dummyCheques);
    });

    const req = httpMock.expectOne(`${apiUrl}/chequesFueraRango`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyCheques);
  });

  it('should fetch devolucion recibida', () => {
    const dummyDevolucionRecibida: DevolucionRecibida[] = mockBackend.devolucionRecibida;

    service.getDevolucionRecibida().subscribe((devolucion) => {
      expect(devolucion.length).toBe(dummyDevolucionRecibida.length);
      expect(devolucion).toEqual(dummyDevolucionRecibida);
    });

    const req = httpMock.expectOne(`${apiUrl}/devolucionRecibida`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyDevolucionRecibida);
  });

});
