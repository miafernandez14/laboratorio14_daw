import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { copia } from 'src/app/models/copia';
import { CopiaService } from 'src/app/services/copia.service';

@Component({
  selector: 'app-prestamos-done',
  templateUrl: './prestamos-done.component.html',
  styleUrls: ['./prestamos-done.component.css']
})
export class PrestamosDoneComponent implements OnInit {
  constructor(public copiaService: CopiaService) {}

  ngOnInit() {
    this.obtenerCopias();
  }

  resetForm(form: NgForm) {
    form.reset();
  }

  obtenerCopias() {
    this.copiaService.obtenerCopias().subscribe(
      (res) => {
        this.copiaService.copia = res;
      },
      (err) => console.error(err)
    );
  }

  crearCopia(form: NgForm) {
    this.copiaService.crearCopia(form.value).subscribe(
      (res) => {
        this.obtenerCopias();
        form.reset();
      },
      (err) => console.error(err)
    );
  }

  async eliminarCopia(_id: string) {
    if (confirm('Are you sure you want to delete it?')) {
      try {
        await this.copiaService.eliminarCopia(_id).toPromise();
        this.obtenerCopias();
      } catch (err) {
        console.error(err);
      }
    }
  }
}
