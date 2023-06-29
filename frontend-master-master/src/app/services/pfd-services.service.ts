import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pelicula } from '../models/pelicula';
import { Socio } from '../models/socio';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PfdServicesService {
  url = 'http://localhost:3000/api/pdf/'
  constructor(private http: HttpClient) {

   }
  getPDF(): Observable<any> {
    return this.http.get(this.url);
  }
}
