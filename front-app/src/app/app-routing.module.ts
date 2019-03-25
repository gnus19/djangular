import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Componentes
import { InicioSesionComponent }   from './inicio-sesion/inicio-sesion.component';
import { RegistroComponent }   from './registro/registro.component';

const routes: Routes = [
	{ path: '', redirectTo: '/sesion', pathMatch: 'full' },
	{ path: 'sesion', component: InicioSesionComponent },
	{ path: 'registro', component: RegistroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
