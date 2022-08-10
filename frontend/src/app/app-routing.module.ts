import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProductsComponent } from './views/admin-products/admin-products.component';
import { HomeComponent } from './views/home/home.component'; // Se importa sólo con la ruta en Routes:
import { LoginComponent } from './views/login/login.component';
import { SignupComponent } from './views/signup/signup.component';
import { PqrsComponent } from './views/pqrs/pqrs.component';

import { UserGuard } from './guards/user.guard';

const routes: Routes = [
// Rutas a componentes
{path: 'login', component: LoginComponent},
{path: 'signup', component: SignupComponent, canActivate: [UserGuard]},
{path: 'home', component: HomeComponent}, // Sin Slash
{path: 'admin-products',component:AdminProductsComponent, canActivate: [UserGuard]},
{path: 'pqrs', component: PqrsComponent},

// Redireccionamientos o página 404
{path: '', redirectTo: 'home', pathMatch: 'full'},
{path: '**', component: HomeComponent}
// Aquí podemos crear la página 404: No encontrada la ruta.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
