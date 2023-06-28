import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';


// import { PrestamosDevueltosComponent } from './components/prestamos-devueltos/prestamos-devueltos.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { ListarCopiasComponent } from './components/copias/listar-copias/listar-copias.component';
import { EditarPeliculaComponent } from './components/peliculas/editar-pelicula/editar-pelicula.component';
import { ListarPeliculasComponent } from './components/peliculas/listar-peliculas/listar-peliculas.component';

import { ListarSociosComponent } from './components/socios/listar-socios/listar-socios.component';
import { EditarSocioComponent } from './components/socios/editar-socio/editar-socio.component';

import { ListarPrestamosComponent } from './components/prestamos-done/listar-prestamos/listar-prestamos.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    TasksComponent,
    ListarCopiasComponent,
    EditarPeliculaComponent,
    ListarPeliculasComponent,

    // PrestamosDevueltosComponent,
    ListarSociosComponent,
    EditarSocioComponent ,
    ListarPrestamosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
