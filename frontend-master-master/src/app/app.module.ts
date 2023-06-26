import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component'; 
import { SociosComponent } from './components/socios/socios.component';
import { PrestamosDoneComponent } from './components/prestamos-done/prestamos-done.component';
import { PrestamosDevueltosComponent } from './components/prestamos-devueltos/prestamos-devueltos.component';
import { TasksComponent } from './components/tasks/tasks.component';



@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    PeliculasComponent,
    SociosComponent,
    PrestamosDoneComponent,
    PrestamosDevueltosComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
