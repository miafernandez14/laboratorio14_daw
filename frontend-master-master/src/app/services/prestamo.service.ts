import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { prestamo } from '../models/prestamo';
import { socio } from '../models/socio';
import { copia } from '../models/copia';

@Injectable({
  providedIn: 'root'
})
export class PrestamoService {

  private URL = 'http://localhost:4000/api/prestamos';
  
  prestamo: prestamo[] = [];
    selectedPrestamo: prestamo = {
    _id: '',
    socio: '',
    copia: '',
    fechaPrestamo: '',
    fechaDevolucion: '',
    entregado: true
  };

  obtenerDatosOtraTabla() {
    // Obtener datos de la otra tabla
    const socioObtenidoDeOtraTabla = obtenerSocio();
    const copiaObtenidaDeOtraTabla = obtenerCopia();
  
    // Asignar los nombres a this.selectedPrestamo
    this.selectedPrestamo.socio = socioObtenidoDeOtraTabla.nombre;
    this.selectedPrestamo.copia = copiaObtenidaDeOtraTabla.id_cinta;
  }
  

  constructor(private http: HttpClient) { }

  crearPrestamo(prestamo: prestamo) {
    return this.http.post(this.URL, prestamo);
  }

  obtenerPrestamos() {
    return this.http.get<prestamo[]>(this.URL);
  }
  devolverPrestamo(prestamo: prestamo) {
    return this.http.put(`${this.URL}/${prestamo._id}`, prestamo);
  }

  eliminarPrestamoHecho(_id:string) {
    return this.http.delete(`${this.URL}/${_id}`);
  }
}

function obtenerSocio(): socio {

  const socioObtenido: socio = {
    nombre: 'Nombre del socio obtenido',
    _id: '',
    direccion: '',
    telefono: 0,
    fechaCreacion: new Date(),
    directorFavorito: '',
    actorFavorito: '',
    generoPreferido: ''
  };
  return socioObtenido;
}

function obtenerCopia(): copia {
  const copiaObtenida: copia = {
    id_cinta: 'ID de la copia obtenida',
    _id: '',
    pelicula: '',
    disponible: false
  };
  return copiaObtenida;
}


