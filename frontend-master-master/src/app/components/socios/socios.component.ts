import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SocioService } from 'src/app/services/socio.service';
import { socio } from 'src/app/models/socio';

@Component({
  selector: 'app-socios',
  templateUrl: './socios.component.html',
  styleUrls: ['./socios.component.css']
})
export class SociosComponent implements OnInit{
  constructor(public socioService: SocioService) {}

  ngOnInit() {
    this.obtenerSocios();
  }

  resetForm(form: NgForm){
    form.reset();
  }

  obtenerSocios() {
    this.socioService.obtenerSocios()
      .subscribe(
        (res) => {
          this.socioService.socio = res;
        },
        (err) => console.error(err)
      );
  }

  crearSocio(form: NgForm) {
    if (form.value._id) {
      this.socioService.actualizarSocio(form.value).subscribe(
        res => console.log(res),
        err => console.error(err)
      )
    } else {
      this.socioService.crearSocio(form.value).subscribe(
        (res)=> {
          this.obtenerSocios();
          form.reset();
        },
        (err) =>console.error(err)
      );
    }
  }
  
  
  async actualizarSocio(socio: socio) {
    this.socioService.selectedSocio = socio;
  }
  

  async eliminarSocio(_id: string) {
    if (confirm('Are you sure you want to delete it?')) {
      try {
        await this.socioService.eliminarSocio(_id).toPromise();
        this.obtenerSocios();
      } catch (err) {
        console.error(err);
      }
    }
  } 
}
