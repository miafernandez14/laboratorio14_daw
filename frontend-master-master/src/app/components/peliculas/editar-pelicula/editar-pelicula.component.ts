import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pelicula } from 'src/app/models/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent implements OnInit {
  peliculaForm: FormGroup;
  id: string | null; 
  constructor(private fb: FormBuilder,
              private aRouter: ActivatedRoute,
              private router: Router,
              private _peliculaService: PeliculaService){
    this.peliculaForm = this.fb.group({
      titulo: ['', Validators.required],
      genero: ['', Validators.required],
      director: ['', Validators.required],
      actores: ['', Validators.required],
    })
    this.id = aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.validarId();
  }


  validarId(){

    if(this.id !== null){
      this._peliculaService.obtenerPelicula(this.id).subscribe(data => {
        this.peliculaForm.setValue({
          titulo: data.titulo,
          genero: data.genero,
          director: data.director,
          actores: data.actores
        })
      })
    }

  }

  editarPelicula(){
    
    const pelicula: Pelicula = {
      titulo: this.peliculaForm.get('titulo')?.value,
      genero: this.peliculaForm.get('genero')?.value,
      director: this.peliculaForm.get('director')?.value,
      actores: this.peliculaForm.get('actores')?.value,
    }

    Swal.fire({
          title: 'Actualizacion de Pelicula',
          text: "¿Desea actualizar el pelicula?",
          icon: 'info',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Aceptar',
          cancelButtonText: 'Cancelar'
        }).then((result) => {
          if (result.isConfirmed) {
            if(this.id !== null){
              this._peliculaService.actualizarPelicula(this.id, pelicula).subscribe(data => {
                  console.log(pelicula);
                  this.router.navigate(['/peliculas']) 
              })
            }
          }
        })
    
           
  }
}
