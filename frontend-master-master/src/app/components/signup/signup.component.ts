import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Add_Socio } from 'src/app/models/add_socio';
import { AuthService } from 'src/app/services/auth.service';
import { DataLoginService } from 'src/app/services/data-login.service';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  registerForm: FormGroup;
  
  constructor(private fb: FormBuilder,
    private router: Router,
    private dataLogin: DataLoginService){
    this.registerForm = this.fb.group(
    {
      username: ['', Validators.required],
      password: ['', Validators.required],
      repeatpassword: ['', Validators.required],
      email: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      directorFavorito: ['', Validators.required],
      actorFavorito: ['', Validators.required],
      generoPreferido: ['', Validators.required],
    }
    )
}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

agregarUser(){
  const password = this.registerForm.get('password')?.value;

  const repeat = this.registerForm.get('repeatpassword')?.value;
  
  if (password == repeat) {
    const socio: Add_Socio = {
      username: this.registerForm.get('username')?.value,
      email : this.registerForm.get('email')?.value,
      password: password,
      direccion : this.registerForm.get('direccion')?.value,
      telefono : this.registerForm.get('telefono')?.value,
      directorFavorito : this.registerForm.get('directorFavorito')?.value,
      actorFavorito : this.registerForm.get('actorFavorito')?.value,
      generoPreferido : this.registerForm.get('generoPreferido')?.value,
    }

    this.dataLogin.crearSocio(socio).subscribe(data =>{
      console.log(data);  
      this.router.navigate(['/signin'])
    })  



    
  }else{
    this.router.navigate(['/signup'])
  }

  


}
}
