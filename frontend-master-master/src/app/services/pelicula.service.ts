import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pelicula } from '../models/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  
  private URL = 'http://localhost:4000/api/peliculas';
  
  pelicula: pelicula[] = [];
  selectedPelicula: pelicula = {
    _id: '',
    titulo: '',
    genero: '',
    director: '',
    actores: '',
  };

  
  constructor(private http: HttpClient) { }

  crearPelicula(pelicula: pelicula) {
    return this.http.post(this.URL, pelicula);
  }

  obtenerPeliculas() {
    return this.http.get<pelicula[]>(this.URL);
  }

  obtenerPelicula() {}

  actualizarPelicula(pelicula: pelicula) {
    return this.http.put(`${this.URL}/${pelicula._id}`, pelicula);
  }

  eliminarPelicula(_id:string) {
    return this.http.delete(`${this.URL}/${_id}`);
  }
}
