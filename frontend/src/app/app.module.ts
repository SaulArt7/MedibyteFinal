import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './views/signup/signup.component';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AdminProductsComponent } from './views/admin-products/admin-products.component';
import { AdminClientComponent } from './views/admin-client/admin-client.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminpanelComponent } from './views/adminpanel/adminpanel.component';
import { CalendarComponent } from './components/calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    AdminProductsComponent,
    FooterComponent,
    AdminpanelComponent,
    AdminClientComponent,
    CalendarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
