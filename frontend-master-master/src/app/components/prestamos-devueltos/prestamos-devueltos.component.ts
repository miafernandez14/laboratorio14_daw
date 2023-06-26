import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PrestamoService } from 'src/app/services/prestamo.service';
import { prestamo } from 'src/app/models/prestamo';

@Component({
  selector: 'app-prestamos-devueltos',
  templateUrl: './prestamos-devueltos.component.html',
  styleUrls: ['./prestamos-devueltos.component.css']
})
export class PrestamosDevueltosComponent implements OnInit{
  constructor(public prestamoService: PrestamoService) {}

  ngOnInit() {
    this.obtenerPrestamos();
  }

  resetForm(form: NgForm){
    form.reset();
  }

  obtenerPrestamos() {
    this.prestamoService.obtenerPrestamos()
      .subscribe(
        (res) => {
          this.prestamoService.prestamo = res;
        },
        (err) => console.error(err)
      );
  }

  crearPrestamo(form: NgForm) {
    if (form.value._id) {
      this.prestamoService.devolverPrestamo(form.value).subscribe(
        res => console.log(res),
        err => console.error(err)
      )
    } else {
      this.prestamoService.crearPrestamo(form.value).subscribe(
        (res)=> {
          this.obtenerPrestamos();
          form.reset();
        },
        (err) =>console.error(err)
      );
    }
  }
  
  
  async devolverPrestamo(prestamo: prestamo) {
    this.prestamoService.selectedPrestamo = prestamo;
  }
  

  async eliminarPrestamoHecho(_id: string) {
    if (confirm('Are you sure you want to delete it?')) {
      try {
        await this.prestamoService.eliminarPrestamoHecho(_id).toPromise();
        this.obtenerPrestamos();
      } catch (err) {
        console.error(err);
      }
    }
  }
}
