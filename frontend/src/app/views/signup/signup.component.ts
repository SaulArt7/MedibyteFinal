import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

// import { CommonModule } from '@angular/common';

declare var M: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [UsersService],
})
export class SignupComponent implements OnInit {
  // name = 'Michael Cocuy';
  result = 0;
  // name = '';
  // lastName = '';
  // username = '';
  // email = '';
  // role = '';
  // fechaCreacionUsuario = '';
  // updatedAt = '';
  // isActive = '';
  // _id = '';

  constructor(public usersService: UsersService) {}

  ngOnInit(): void {
    console.log('Hola desde Init de Home Component');
    this.getUsers();
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.usersService.selectedUser = new User();
    }
  }

  addUser(form: NgForm) {
    // El mismo método lo uso para verificando si hay _id en el input hidden, dividir las instrucciones en dos:

    if (form.value._id) {
      this.usersService.putUser(form.value).subscribe((res) => {
        console.log(res);
        // this.
        this.resetForm(form);
        // M.toast({ html: 'Actualizado Satisfactoriamente' });
        this.getUsers();
      });
    } else {
      console.log(form.value);
      delete form.value._id; // Por error al intenar enviar un Usuario con ID en ''

      // Validaciones del profe para verificar si algún campo está vacío en el formualario:
      let { email, name, lastName, password, confirmPassword } = form.value;
      if (!email || !name || !lastName || !password || !confirmPassword) {
        alert('Diligencie todos los campos');
      }
      if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
      }

      this.usersService.postUser(form.value).subscribe((res) => {
        console.log(res);
        this.resetForm(form);
        // M.toast({ html: 'Guardado Satisfactoriamente' });
        this.getUsers();
      });
    }
  }
  // El subscribe recibe dos parámetros que son funciones:
  // La primera si recibe datos, la segunda si hubo error:
  // this.usersService.postUser(form.value).subscribe((data) => {console.log()}, (error)=> {console.log(error)})} ** El primer -valor- (en este caso data)A códigos de estado de tipo 200 y 300.
  // **Para esto res ó data deben ser de tipo any
  // alert(error.error.staturs): Nos retorna el estado de la petición: 'Usuario creado correctamente'
  // alert(res.staturs): Nos retorna el estado de la petición: 'Usuario creado correctamente'



  getUsers() {
    this.usersService.getUsers().subscribe((res) => {
      this.usersService.users = res;
      // this.usersService.users = res; // Previa
      // console.log(this.usersService.users);
      console.log(this.usersService.users);
    });
  }

  editUser(user: User) {
    this.usersService.selectedUser = user;
    // this.usersService.putUser(user);
  }

  deleteUser(_id: string) {
    if (confirm('¿Estás seguro de que desea eliminar este usuario?')) {
      this.usersService.deleteUser(_id).subscribe((res) => {
        console.log(res);
        M.toast({ html: 'Usuario eliminado satisfactoriamente' });
        this.getUsers();
      });
    }
  }
}

// for (let index = 0; index < this.userService.users.user.length; index++) {
//   an = document.getElementById('charsContainer').innerHTML += `

//   <div class="card m-4" style="width: 18rem;">
//     <img src="" class="card-img-top" alt="...">
//     <div class="card-body">
//       <h5 class="card-title">${data.name}</h5>
//       <p class="card-text">Genero: ${data.gender}</p>
//       <p class="card-text">Ubicacion: ${data.location.name}</p>
//       <p class="card-text">Estado: ${data.status}</p>
//       <p class="card-text">Especie: ${data.species}</p>
//       <p class="card-text h4">Estado: ${data.id}</p>
//     </div>
//   </div>
//   `

// generarTarjeta(): void {
//   += `

//
//           `
//         }
//        }

// Previo funcionando con un sólo usuario:
// this.name = typeof(this.userService.users)
// this.name = this.userService.users.user[0].name;
// this.lastName = this.userService.users.user[0].lastName;
// this.username = this.userService.users.user[0].username;
// this.email = this.userService.users.user[0].email;
// this.role = this.userService.users.user[0].role;
// this.fechaCreacionUsuario = this.userService.users.user[0].createdAt;
// this.updatedAt = this.userService.users.user[0].updatedAt;
// this.isActive = this.userService.users.user[0].isActive;
// this._id = this.userService.users.user[0]._id;
