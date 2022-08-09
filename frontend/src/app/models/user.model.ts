export class User {
  _id: string;
  name: string;
  lastName: string;
  email: string;
  document: number;
  tel: number;
  role: string;
  isActive: any;
  password: string;
  confirmPassword: string;
  // añadimos el de confirmar Contraseña: Este no irá a la API

  constructor(
    _id = '',
    name = '',
    lastName = '',
    email = '',
    document = 0,
    tel = 0,
    role = '',
    isActive: any = '',
    password = '',
    confirmPassword = ''
  ) {
    this._id = _id;
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.document = document;
    this.tel = tel;
    this.role = role;
    this.isActive = isActive;
    this.password = password;
    this.confirmPassword = confirmPassword;
  }
}
