import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';

//Opcional: ?
import { HomeComponent } from '../views/home/home.component';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  selectedUser: User; // Usuario Seleccionado
  users: any; // Para método getUsers() // | any

  URL_API = 'http://localhost:5000/api/users';

  constructor(public http: HttpClient, public router: Router) {
    this.selectedUser = new User();
  }

  getUsers() {
    return this.http.get(`${this.URL_API}/get-users`); // http://localhost:5007/api/users/get-users
  }

  postUser(user: User) {
    return this.http.post(`${this.URL_API}/sign-up`, user); //http://localhost:5000/api/users/sign-up
  }

  putUser(user: User) {
    return this.http.put(`${this.URL_API}/update-user/${user._id}`, user); // http://localhost:5000/api/users/update-user/_id
  }

  deleteUser(_id: String) {
    return this.http.delete(`${this.URL_API}/delete-user/${_id}`); //http://localhost:5000/api/users/delete-user/_id
  }

  // El objeto que debe llegar acá, para enviarse a la API debe tener:
  // email: '??'; , password: '??'

  // El post (nuestra petición) requiere dos parámetros: la URL (URI + endopoint) y nuestro body
  loginUser(user: User) {
    return this.http.post(`${this.URL_API}/login`, user); //http://localhost:5000/api/users/login
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

  decodeToken(): any {
    const token = localStorage.getItem('token');
    const decoded = jwtDecode(token ? token : 'Error en el token');
    // console.log(decoded);
    return decoded;
  }
}
