import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient:HttpClient) { }

  saveImg(nombre:string, foto:any){
    let datos  = new FormData();
    datos.append('nombre', nombre);
    datos.append('imagen', foto);
    return this.httpClient.post(`http://107.23.35.14/api/persona`, datos);
  }
}
