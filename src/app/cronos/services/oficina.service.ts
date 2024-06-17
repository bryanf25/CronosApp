import { Injectable } from '@angular/core';
import { environment } from '../../../environments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Oficina } from '../interfaces/consultas/oficina.interface';

@Injectable({
  providedIn: 'root'
})
export class OficinaService {

  url : string =`${environment.apiUrl}`

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<Oficina[]>(`${this.url}/oficinas`)
  }
}
