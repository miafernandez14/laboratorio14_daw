import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Copia } from 'src/app/models/copia';
import { Pelicula } from 'src/app/models/pelicula';
import { CopiaService } from 'src/app/services/copia.service';
import { PeliculaService } from 'src/app/services/pelicula.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-copias',
  templateUrl: './listar-copias.component.html',
  styleUrls: ['./listar-copias.component.css']
})
export class ListarCopiasComponent {
  id: string = '';
  cintaForm: FormGroup;

  listCintas: Copia[] = [];
  elementos: number = 0;


  listPeliculas: Pelicula[] = [];

  constructor(
      private _peliculaService: PeliculaService,
      private router: Router,
      private _copiaService: CopiaService,
      private fb: FormBuilder) {
      this.cintaForm = this.fb.group({
        pelicula: ['', Validators.required],
        id_cinta: ['', Validators.required],
      })
}
  
  
  
  ngOnInit(): void {
    this.obtenerPeliculas();
    this.obtenerCintas();
  }
  

  obtenerPeliculas(){
    this._peliculaService.obtenerPeliculas().subscribe(data => {
      console.log(data);
      this.listPeliculas = data;
    })
  }


    agregarCinta(){

    const cinta: Copia = {
      pelicula: this.id,
      id_cinta: this.cintaForm.get('id_cinta')?.value,
    }
    console.log(cinta)

    Swal.fire({
    title: 'Creacion de Cinta',
    text: "¿Desea crear la cinta?",
    icon: 'info',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Aceptar',
    cancelButtonText: 'Cancelar'
    }).then((result) => {
    if (result.isConfirmed) {
    this._copiaService.crearCopia(cinta).subscribe(data =>{
    console.log(data);  
    this.router.navigate(['/listar-cintas'])
    }) 
    }
    })


    }


    obtenerCintas(){
      this._copiaService.obtenerCopias().subscribe(data => {
        console.log(data);
        this.listCintas = data;
        this.elementos = this.listCintas.length;
      })
    }
    
    eliminarCinta(id: any){
      this._copiaService.eliminarCopia(id).subscribe(data => {
    
        Swal.fire({
          title: 'Eliminacion de Cinta',
          text: "¿Desea eliminar la cinta?",
          icon: 'info',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Aceptar',
          cancelButtonText: 'Cancelar'
        }).then((result) => {
          if (result.isConfirmed) {
            console.log(data);
            this.obtenerCintas();
            this.elementos = this.listCintas.length;
            this.router.navigate(['/copias'])
    
          }
        })
      })
      
    
    }
}
