import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { socio } from '../models/socio';

@Injectable({
  providedIn: 'root'
})
export class SocioService {
  
  private URL = 'http://localhost:4000/api/Socios';
  
  socio: socio[] = [];
  selectedSocio: socio = {
    _id: '',
    nombre: '',
    direccion: '',
    telefono: 0,
    fechaCreacion: new Date(),
    directorFavorito: '',
    actorFavorito: '',
    generoPreferido: '',
  };

  
  constructor(private http: HttpClient) { }

  crearSocio(socio: socio) {
    return this.http.post(this.URL, socio);
  }

  obtenerSocios() {
    return this.http.get<socio[]>(this.URL);
  }

  obtenerSocio(_id:string) {
    return this.http.get(`${this.URL}/${_id}`)
  }

  actualizarSocio(socio: socio) {
    return this.http.put(`${this.URL}/${socio._id}`, socio);
  }

  eliminarSocio(_id:string) {
    return this.http.delete(`${this.URL}/${_id}`);
  }
}
