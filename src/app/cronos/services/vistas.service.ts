import { Injectable } from '@angular/core';
import { environment } from '../../../environments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RechazosVisacion } from '../interfaces/rechazos-visacion.interface';
import { DevolucionEnviada } from '../interfaces/devolucion-enviada.interface';
import { ChequeFueraRango } from '../interfaces/cheque-fuera-rango.interface';

@Injectable({
  providedIn: 'root'
})
export class VistasService {


  url : string =`${environment.apiUrl}`

  constructor(private http:HttpClient) { }

  getRechazosVisacionYaPagados(): Observable<RechazosVisacion[]>{
    return this.http.get<RechazosVisacion[]>(`${this.url}/rechazosVisacion`)
  }

  getDevolucionEnviada(): Observable<DevolucionEnviada[]>{
    return this.http.get<DevolucionEnviada[]>(`${this.url}/devolucionEnviada`)
  }
  
  getChequesFueraRango(): Observable<ChequeFueraRango[]>{
    return this.http.get<ChequeFueraRango[]>(`${this.url}/chequesFueraRango`)
  }
}
