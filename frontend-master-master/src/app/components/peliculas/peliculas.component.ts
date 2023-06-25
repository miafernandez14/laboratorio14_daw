import { Component, OnInit } from '@angular/core';
import { PeliculaService } from 'src/app/services/pelicula.service';
import { NgForm } from '@angular/forms';
import { pelicula } from 'src/app/models/pelicula';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  constructor(public peliculaService: PeliculaService) {}

  ngOnInit() {
    this.obtenerPeliculas();
  }

  resetForm(form: NgForm){
    form.reset();
  }

  obtenerPeliculas() {
    this.peliculaService.obtenerPeliculas()
      .subscribe(
        (res) => {
          this.peliculaService.pelicula = res;
        },
        (err) => console.error(err)
      );
  }

  crearPelicula(form: NgForm) {
    if (form.value._id) {
      this.peliculaService.actualizarPelicula(form.value).subscribe(
        res => console.log(res),
        err => console.error(err)
      )
    } else {
      this.peliculaService.crearPelicula(form.value).subscribe(
        (res)=> {
          this.obtenerPeliculas
          form.reset();
        },
        (err) =>console.error(err)
      );
    }
  }
  
  
  async actualizarPelicula(pelicula: pelicula) {
    this.peliculaService.selectedPelicula = pelicula;
  }
  

  async eliminarPelicula(_id: string) {
    if (confirm('Are you sure you want to delete it?')) {
      try {
        await this.peliculaService.eliminarPelicula(_id).toPromise();
        this.obtenerPeliculas();
      } catch (err) {
        console.error(err);
      }
    }
  } 
}
