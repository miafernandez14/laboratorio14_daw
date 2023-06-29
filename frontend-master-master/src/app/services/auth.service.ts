import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:4000/api'
  constructor(private router: Router) { }

  signUp( email: string, password: string ){}

  loggedIn(): Boolean {
    return !!localStorage.getItem('token');
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/signin'])
  }

  getToken(){
    return localStorage.getItem('token');
  }
}
