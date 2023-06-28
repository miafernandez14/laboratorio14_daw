import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Copia } from 'src/app/models/copia';
import { Prestamo } from 'src/app/models/prestamo';
import { Socio } from 'src/app/models/socio';
import { CopiaService } from 'src/app/services/copia.service';
import { DataLoginService } from 'src/app/services/data-login.service';
import { PrestamoService } from 'src/app/services/prestamo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-prestamos',
  templateUrl: './listar-prestamos.component.html',
  styleUrls: ['./listar-prestamos.component.css']
})
export class ListarPrestamosComponent implements OnInit {

  id_socio: string = '';
  id_copia: string = '';


  listPrestamos: Prestamo[] = [];
  listSocios: Socio[] = [];
  listCopias: Copia[] = [];
  elementos: number = 0;
  prestamoForm: FormGroup;

  constructor(private fb: FormBuilder,
    private _socioService: DataLoginService,
    private _copiaService: CopiaService,
    private _prestamoService: PrestamoService,
  private router: Router) {
    this.prestamoForm = this.fb.group({
      socio: ['', Validators.required],
      copia: ['', Validators.required],
      fechaDevolucion: ['', Validators.required],
  })

}
  ngOnInit(): void {
    this.obtenerCopias();
    this.obtenerPrestamos();
    this.obtenerSocios();
  }

  obtenerPrestamos(){
    this._prestamoService.obtenerPrestamos().subscribe(data => {
      console.log(data);
      this.listPrestamos = data;
      this.elementos = this.listPrestamos.length;
    })
  }

  obtenerSocios(){
    this._socioService.obtenerSocios().subscribe(data => {
      console.log(data);
      this.listSocios = data;
      this.elementos = this.listSocios.length;
    })
  }

  obtenerCopias(){
    this._copiaService.obtenerCopias().subscribe(data => {
      console.log(data);
      this.listCopias = data;
      this.elementos = this.listCopias.length;
    })
  }


  agregarPrestamo(){

    const prestamo: Prestamo = {
      socio: this.id_socio,
      copia: this.id_copia,
      fechaDevolucion: this.prestamoForm.get('fechaDevolucion')?.value,
    }

    console.log(prestamo)

    Swal.fire({
      title: 'Creacion de Prestamo',
      text: "¿Desea crear el prestamo?",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this._prestamoService.crearPrestamo(prestamo).subscribe(data =>{
          console.log(data);  
          this.router.navigate(['/prestamo_done'])
        }) 
      }
    })

    
  }
  
  devolverPrestamo(id: any){
    this._prestamoService.devolverPrestamo(id).subscribe(data => {

      Swal.fire({
        title: 'Devolucion de Prestamo',
        text: "¿Desea devolver el prestamo?",
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
          this.elementos = this.listPrestamos.length;
          this.router.navigate(['/prestamo_done'])

        }
      })
    })
  }
  
}
