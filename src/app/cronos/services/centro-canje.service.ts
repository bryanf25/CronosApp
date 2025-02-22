import { Injectable } from '@angular/core';
import { environment } from '../../../environments/enviroment';
import { HttpClient } from '@angular/common/http';
import { CentroCanje } from '../interfaces/consultas/centros-canje.interface';

@Injectable({
  providedIn: 'root'
})
export class CentroCanjeService {

  url : string =`${environment.apiUrl}`

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<CentroCanje[]>(`${this.url}/centrosCanje`)
  }
}
