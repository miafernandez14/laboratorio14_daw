import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { TasksComponent } from './components/tasks/tasks.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PrestamosDevueltosComponent } from './components/prestamos-devueltos/prestamos-devueltos.component';
import { PrestamosDoneComponent } from './components/prestamos-done/prestamos-done.component';
import { SociosComponent } from './components/socios/socios.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tasks',
    pathMatch: 'full'
  },
  {
    path: 'tasks',
    component: TasksComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  
  {
    path: 'peliculas',
    component: PeliculasComponent
  },
  {
    path: 'socios',
    component: SociosComponent
  },
  {
    path: 'prestamo_done',
    component: PrestamosDoneComponent
  },
  {
    path: 'prestamos_devueltos',
    component: PrestamosDevueltosComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
