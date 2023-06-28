import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Copia } from '../models/copia';

@Injectable({
  providedIn: 'root'
})
export class CopiaService {
  url = 'http://localhost:3000/api/copias/';


  constructor(private http: HttpClient) { 

  }

  crearCopia(copia:Copia): Observable<any>{
    return this.http.post(this.url,copia);
   }

  obtenerCopias():Observable<any>{
    return this.http.get(this.url);
  }


  eliminarCopia(id: string):Observable<any>{
    return this.http.delete(this.url+id);
  }


}