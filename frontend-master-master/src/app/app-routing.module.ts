import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { TasksComponent } from './components/tasks/tasks.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
// import { PrestamosDevueltosComponent } from './components/prestamos-devueltos/prestamos-devueltos.component';
// import { ListarPrestamosComponent } from './components/prestamos-done/listar-prestamos';
import { ListarPeliculasComponent } from './components/peliculas/listar-peliculas/listar-peliculas.component';
import { EditarPeliculaComponent } from './components/peliculas/editar-pelicula/editar-pelicula.component';
import { ListarCopiasComponent } from './components/copias/listar-copias/listar-copias.component';
import { ListarSociosComponent } from './components/socios/listar-socios/listar-socios.component';
import { EditarSocioComponent } from './components/socios/editar-socio/editar-socio.component';
import { ListarPrestamosComponent } from './components/prestamos-done/listar-prestamos/listar-prestamos.component';

const routes: Routes = [
  {path: '',redirectTo: '/tasks',pathMatch: 'full'},
  {path: 'tasks',component: TasksComponent},
  {path: 'signin',component: SigninComponent},
  {path: 'signup',component: SignupComponent},
  {path: 'peliculas',component: ListarPeliculasComponent},
  {path: 'peliculas/:id',component: EditarPeliculaComponent},
  {path: 'copias',component: ListarCopiasComponent},

  {path: 'socios',component: ListarSociosComponent},
  {path: 'socios/:id',component: EditarSocioComponent},
  {path: 'prestamo_done',component: ListarPrestamosComponent},
  {path: 'prestamo_devueltos',component: ListarPrestamosComponent},
  // {path: 'prestamos_devueltos',component: PrestamosDevueltosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
