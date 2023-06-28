import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Socio } from '../models/socio';
import { Add_Socio } from '../models/add_socio';

@Injectable({
  providedIn: 'root'
})
export class DataLoginService {

  url = 'http://localhost:3000/api/socios/';

  nombreUsuario: string = 'Sin Nombre.....!!!'

  constructor(private http: HttpClient) { 
     
  }
  Login(socio:Socio): Observable<any>{
    return this.http.post('http://localhost:3000/api/socios/login',socio);
  }

  crearSocio(socio:Add_Socio): Observable<any>{
    return this.http.post(this.url,socio);
  }

  obtenerSocios(): Observable<any>{
    return this.http.get(this.url);
  }


  obtenerSocio(id:string): Observable<any>{
    return this.http.get(this.url+id);
  }


  actualizarSocio(id:string,socio:Add_Socio): Observable<any>{
    return this.http.put(this.url+id,socio);
  }

  eliminarSocio(id:string): Observable<any>{
    return this.http.delete(this.url+id);
  }
}