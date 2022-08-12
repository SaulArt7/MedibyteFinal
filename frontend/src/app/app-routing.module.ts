import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProductsComponent } from './views/admin-products/admin-products.component';
import { HomeComponent } from './views/home/home.component'; // Se importa sólo con la ruta en Routes:
import { LoginComponent } from './views/login/login.component';
import { SignupComponent } from './views/signup/signup.component';

import { UserGuard } from './guards/user.guard';
import { AdminpanelComponent } from './views/adminpanel/adminpanel.component';
import { TiendaComponent } from './views/tienda/tienda.component';

const routes: Routes = [
// Rutas a componentes
{path: 'login', component: LoginComponent},
{path: 'signup', component: SignupComponent},
{path: 'home', component: HomeComponent}, // Sin Slash
{path: 'admin-products',component:AdminProductsComponent, canActivate: [UserGuard]},
{path: 'adminpanel', component: AdminpanelComponent, canActivate: [UserGuard]},
{path: 'tienda', component: TiendaComponent},
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
