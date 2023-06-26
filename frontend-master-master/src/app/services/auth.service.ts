import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:4000/api'
  constructor() { }

  signUp( email: string, password: string ){}
}
