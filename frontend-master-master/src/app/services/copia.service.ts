import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { copia } from '../models/copia';

@Injectable({
  providedIn: 'root'
})
export class CopiaService {

  private URL = 'http://localhost:4000/api/copias';
  
  copia: copia[] = [];
  selectedCopia: copia = {
    _id: '',
    pelicula: '',
    id_cinta: '',
    disponible: true
  };

  constructor(private http: HttpClient) { }

  crearCopia(copia: copia) {
    return this.http.post(this.URL, copia);
  }

  obtenerCopias() {
    return this.http.get<copia[]>(this.URL);
  }

  eliminarCopia(_id:string) {
    return this.http.delete(`${this.URL}/${_id}`);
  }
}
