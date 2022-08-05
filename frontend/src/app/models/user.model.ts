export class User {
  _id: string;
  name: string;
  lastName: string;
  username: string;
  email: string;
  role: string;
  isActive: any;
  password: string;
  confirmPassword: string;
  // añadimos el de confirmar Contraseña: Este no irá a la API

  constructor(
    _id = '',
    name = '',
    lastName = '',
    username = '',
    email = '',
    role = '',
    isActive: any = '',
    password = '',
    confirmPassword = ''
  ) {
    this._id = _id;
    this.name = name;
    this.lastName = lastName;
    this.username = username;
    this.email = email;
    this.role = role;
    this.isActive = isActive;
    this.password = password;
    this.confirmPassword = confirmPassword;
  }
}
