import { Component } from '@angular/core';
import { Router,RouterModule } from '@angular/router';

import { Add_Socio } from 'src/app/models/add_socio';
import { DataLoginService } from 'src/app/services/data-login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-socios',
  templateUrl: './listar-socios.component.html',
  styleUrls: ['./listar-socios.component.css']
})
export class ListarSociosComponent {
  listSocios: Add_Socio[] = [];
  elementos: number = 0;
  
  constructor(
            private _socioService : DataLoginService,
            private router: Router) {

  }


  ngOnInit(): void {
    this.obtenerSocios();
  }

  obtenerSocios(){
    this._socioService.obtenerSocios().subscribe(data => {
      console.log(data);
      this.listSocios = data;
      this.elementos = this.listSocios.length;
    })
  }

  eliminarSocio(id: any){
    this._socioService.eliminarSocio(id).subscribe(data => {

      Swal.fire({
        title: 'Eliminacion de Socio',
        text: "¿Desea eliminar el socio?",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          console.log(data);
          this.obtenerSocios();
          this.elementos = this.listSocios.length;
          this.router.navigate(['/listar-socios'])

        }
      })
    })
    

  }
}
