import { Injectable } from '@angular/core';
import { environment } from '../../../environments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RechazosVisacion } from '../interfaces/rechazos-visacion.interface';

@Injectable({
  providedIn: 'root'
})
export class VistasService {


  url : string =`${environment.apiUrl}`

  constructor(private http:HttpClient) { }

  getRechazosVisacionYaPagados(): Observable<RechazosVisacion[]>{
    return this.http.get<RechazosVisacion[]>(`${this.url}/rechazosVisacion`)
  }

}
