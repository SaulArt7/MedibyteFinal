import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Access } from '../models/access.model';

@Injectable({
  providedIn: 'root',
})
export class AccessControlService {
  selectedAccess: Access; // Usuario Seleccionado
  accessP: any; // Para método getAccessP() // | any

  URL_API = 'http://143.198.180.119:5000/api/accessP';
  //http://localhost:5000/api/accessP/

  constructor(public http: HttpClient) {
    this.selectedAccess = new Access();
  }

  getAccessP() {
    console.log(this.http.get(`${this.URL_API}/get-all-accessP`));
    return this.http.get(`${this.URL_API}/get-all-accessP`);
  }

  // postProduct(product: Product) {
  //   return this.http.post(`${this.URL_API}/create`, product);
  // }

  // putProduct(product: Product) {
  //   return this.http.put(`${this.URL_API}/update-product/${product._id}`, product);
  // }

  // deleteProduct(_id: String) {
  //   return this.http.delete(`${this.URL_API}/delete-product/${_id}`);
  // }

  // loginProduct(product: Product){
  //   return this.http.post(`${this.URL_API}/login`, product);
  // }
}
