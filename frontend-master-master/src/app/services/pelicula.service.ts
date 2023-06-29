import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pelicula } from '../models/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  url = 'http://localhost:3000/api/peliculas/';
  pdf = 'http://localhost:3000/api/pdf/'

  constructor(private http: HttpClient) { 

  }

  crearPelicula(pelicula:Pelicula): Observable<any>{
    return this.http.post(this.url,pelicula);
  }
  
  getPDF(): Observable<any> {
    return this.http.get(this.pdf, { responseType: 'blob' })
  }
  
  obtenerPeliculas(): Observable<any>{
    return this.http.get(this.url);
  }
  actualizarPelicula(id: string,pelicula:Pelicula): Observable<any>{
    return this.http.put(this.url+id,pelicula);
  }

  obtenerPelicula(id: string): Observable<any>{
    return this.http.get(this.url+id);
  }

  eliminarPelicula(id: string): Observable<any>{
    return this.http.delete(this.url+id);
  }


}
