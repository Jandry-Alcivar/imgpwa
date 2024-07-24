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
    return this.httpClient.post(`http://127.0.0.1:8000/api/persona`, datos);
  }
}
