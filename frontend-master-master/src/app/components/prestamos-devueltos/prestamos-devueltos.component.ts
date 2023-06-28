import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { PrestamoService } from 'src/app/services/prestamo.service';
import { Prestamo } from 'src/app/models/prestamo';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-prestamos-devueltos',
  templateUrl: './prestamos-devueltos.component.html',
  styleUrls: ['./prestamos-devueltos.component.css']
})
export class PrestamosDevueltosComponent implements OnInit{

  

  constructor(private fb: FormBuilder,
    private _prestamoService: PrestamoService,
    private router: Router) {
  }

  listPrestamos: Prestamo[] = [];
  ngOnInit() {
    this.obtenerPrestamos();
  }

  obtenerPrestamos(){
    this._prestamoService.obtenerPrestamos().subscribe(data => {
      console.log(data);
      this.listPrestamos = data;
    })
  }

  
  eliminarPrestamoHecho(id: any){
    this._prestamoService.eliminarPrestamoHecho(id).subscribe(data => {

      Swal.fire({
        title: 'Registro de Prestamo',
        text: "¿Desea eliminar el registro?",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          console.log(data);
          this.obtenerPrestamos();
          this.router.navigate(['/prestamo_devueltos'])

        }
      })
    })
  }
}  

