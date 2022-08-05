import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import jwtDecode from 'jwt-decode';

import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: any;

  estadoRespuesta: any;

  constructor(public usersService: UsersService, public router: Router) {}

  ngOnInit(): void {
    this.usersService.selectedUser = new User(); // Para que con cada cargue de la aplicación, se reinicie el usuario seleccionado.
  }

  loginUser(form: NgForm) {
    if (form.value.email) {
      console.log(form.value.email);
      console.log(form.value.password);

      this.usersService.loginUser(form.value).subscribe((data: any) => {
        // console.log(data);
        this.usersService.users = data;
        console.log(this.usersService.users.status);

        localStorage.setItem('token', data.token);
        this.router.navigate(['/home']);

        // if (this.usersService.users.status == 'Usuario Logeado') {
        //   console.log(this.decodeToken());
        //   localStorage.setItem('token', data.token);
        //   this.router.navigate(['/home']); // Bien
        // }

        // const estado = res as [];
        // this.estadoRespuesta = estado.filter();
        // console.log(this.estadoRespuesta);
      });
    } else {
      console.log('No se recibieron datos del Formulario');
      //   console.log(form.value);
      //   this.usersService.postUser(form.value).subscribe(res => {
      //     console.log(res);
      //     this.resetForm(form);
      //     M.toast({ html: 'Guardado Satisfactoriamente' });
      //     this.getUsers();
      //   });
    }
  }

  loggedIn() {
    return localStorage.getItem('token') ? true : false;
  }

  // jwt-decode
  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['home']);
    return;
  }

  decodeToken() {
    const token = localStorage.getItem('token');
    const decoded = jwtDecode(token ? token : 'Error en el token');
    return decoded;
  }

  resetForm(form: NgForm) {
    form.reset();
  }
}
