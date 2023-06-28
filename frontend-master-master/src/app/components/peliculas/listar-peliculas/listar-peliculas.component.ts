import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pelicula } from 'src/app/models/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-peliculas',
  templateUrl: './listar-peliculas.component.html',
  styleUrls: ['./listar-peliculas.component.css']
})
export class ListarPeliculasComponent implements OnInit {

  listPeliculas: Pelicula[] = [];
  elementos: number = 0;


  peliculaForm: FormGroup;
  
  constructor(private fb: FormBuilder,
              private _peliculaService: PeliculaService,
            private router: Router) {
              this.peliculaForm = this.fb.group({
                titulo: ['', Validators.required],
                genero: ['', Validators.required],
                director: ['', Validators.required],
                actores: ['', Validators.required],
            })

  }
  ngOnInit(): void {
    this.obtenerPeliculas();
  }


  obtenerPeliculas(){
    this._peliculaService.obtenerPeliculas().subscribe(data => {
      console.log(data);
      this.listPeliculas = data;
      this.elementos = this.listPeliculas.length;
    })
  }
  obtenerIdsCinta(copias: any[]): string[] {
    return copias.map(copia => copia.id_cinta);
  }


  eliminarPelicula(id: any){
    this._peliculaService.eliminarPelicula(id).subscribe(data => {

      Swal.fire({
        title: 'Eliminacion de Producto',
        text: "¿Desea eliminar el producto?",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          console.log(data);
          this.obtenerPeliculas();
          this.elementos = this.listPeliculas.length;
          this.router.navigate(['/listar-peliculas'])

        }
      })
    })
    

  }


  agregarPelicula(){

    const pelicula: Pelicula = {
      titulo: this.peliculaForm.get('titulo')?.value,
      genero: this.peliculaForm.get('genero')?.value,
      director: this.peliculaForm.get('director')?.value,
      actores: this.peliculaForm.get('actores')?.value,
    }

    console.log(pelicula)

    Swal.fire({
      title: 'Creacion de Pelicula',
      text: "¿Desea crear la pelicula?",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this._peliculaService.crearPelicula(pelicula).subscribe(data =>{
          console.log(data);  
          this.router.navigate(['/listar-peliculas'])
        }) 
      }
    })

    
  }
}
