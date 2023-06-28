import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Add_Socio } from 'src/app/models/add_socio';
import { DataLoginService } from 'src/app/services/data-login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-socio',
  templateUrl: './editar-socio.component.html',
  styleUrls: ['./editar-socio.component.css']
})
export class EditarSocioComponent {
  socioForm: FormGroup;
  id: string | null; 
  constructor(private fb: FormBuilder,
              private aRouter: ActivatedRoute,
              private router: Router,
              private _socioService: DataLoginService){
    this.socioForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      directorFavorito: ['', Validators.required],
      actorFavorito: ['', Validators.required],
      generoPreferido: ['', Validators.required],

    })
    this.id = aRouter.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.validarId();
  }

  validarId(){

    if(this.id !== null){
      this._socioService.obtenerSocio(this.id).subscribe(data => {
        this.socioForm.setValue({
          username: data.username,
          email: data.email,
          direccion: data.direccion,
          telefono: data.telefono,
          directorFavorito: data.directorFavorito,
          actorFavorito: data.actorFavorito,
          generoPreferido: data.generoPreferido
        })
      })
    }

  }

  editarSocio(){
    
    const socio: Add_Socio = {
      username: this.socioForm.get('username')?.value,
      email: this.socioForm.get('email')?.value,
      direccion: this.socioForm.get('direccion')?.value,
      telefono: this.socioForm.get('telefono')?.value,
      directorFavorito: this.socioForm.get('directorFavorito')?.value,
      actorFavorito: this.socioForm.get('actorFavorito')?.value,
      generoPreferido: this.socioForm.get('generoPreferido')?.value,
    }

    Swal.fire({
          title: 'Actualizacion de Socio',
          text: "¿Desea actualizar el socio?",
          icon: 'info',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Aceptar',
          cancelButtonText: 'Cancelar'
        }).then((result) => {
          if (result.isConfirmed) {
            if(this.id !== null){
              this._socioService.actualizarSocio(this.id, socio).subscribe(data => {
                  console.log(socio);
                  this.router.navigate(['/socios']) 
              })
            }
          }
        })
    
           
  }
}
