import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProductsComponent } from './views/admin-products/admin-products.component';
import { HomeComponent } from './views/home/home.component'; // Se importa sólo con la ruta en Routes:
import { LoginComponent } from './views/login/login.component';
import { SignupComponent } from './views/signup/signup.component';
import { PqrsComponent } from './views/pqrs/pqrs.component';
import { UserGuard } from './guards/user.guard';
import { SuperAdminGuard } from './guards/super-admin.guard';
import { AdminPQRSGuard } from './guards/admin-pqrs.guard';
import { MedicoGuard } from "./guards/medico.guard";
import { AdminProductosGuard } from './guards/admin-productos.guard';
import { AdminClientComponent } from './views/admin-client/admin-client.component';
import { AdminpanelComponent } from './views/adminpanel/adminpanel.component';
import { TiendaComponent } from './views/tienda/tienda.component';
import { ProductListComponent } from './views/product-list/product-list.component';

const routes: Routes = [
// Rutas a componentes
{path: 'login', component: LoginComponent},
{path: 'signup', component: SignupComponent},
{path: 'home', component: HomeComponent}, // Sin Slash
{path: 'admin-products',component:AdminProductsComponent, canActivate: [AdminProductosGuard]},
{path: 'adminpanel', component: AdminpanelComponent, canActivate: [SuperAdminGuard]},
{path: 'admin-client', component:AdminClientComponent, canActivate: [SuperAdminGuard]},
{path: 'tienda', component: TiendaComponent},
{path: 'pqrs', component: PqrsComponent},
{path: 'admin-products/list', component: ProductListComponent},

// Redireccionamientos o página 404
{path: '', redirectTo: '/home', pathMatch: 'full'},
{path: '**', component: HomeComponent}
// Aquí podemos crear la página 404: No encontrada la ruta.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
