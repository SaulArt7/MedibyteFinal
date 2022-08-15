import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

declare var M: any;

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css'],
  providers: [UsersService],
})
export class AdminpanelComponent implements OnInit {

  result = 0;

  constructor(public usersService: UsersService) { }

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
        console.log(form.value);
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

