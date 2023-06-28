import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prestamo } from '../models/prestamo';

@Injectable({
  providedIn: 'root'
})
export class PrestamoService {
  url = 'http://localhost:3000/api/prestamos/';


  constructor(private http: HttpClient) { 

  }
  crearPrestamo(prestamo:Prestamo): Observable<any>{
    return this.http.post(this.url,prestamo);
   }
  
  obtenerPrestamos(): Observable<any>{
    return this.http.get(this.url);
  }
  devolverPrestamo(id: string): Observable<any>{
    return this.http.put(this.url+id,{});
  }

  eliminarPrestamoHecho(id: string): Observable<any>{
    return this.http.delete(this.url+id);
  }

     

}
