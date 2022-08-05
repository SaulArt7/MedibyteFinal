import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  selectedProduct: Product; // Usuario Seleccionado
  products: any; // Para método getProducts() // | any

  URL_API = 'http://localhost:5000/api/products';

  constructor(public http: HttpClient) {
    this.selectedProduct = new Product();
  }

  getProducts() {
    return this.http.get(`${this.URL_API}/get-all`); // http://localhost:5007/api/products/get-products
  }

  postProduct(product: Product) {
    return this.http.post(`${this.URL_API}/create`, product); //http://localhost:5000/api/products/sign-up
  }

  putProduct(product: Product) {
    return this.http.put(`${this.URL_API}/update-product/${product._id}`, product); // http://localhost:5000/api/products/update-product/_id
  }

  deleteProduct(_id: String) {
    return this.http.delete(`${this.URL_API}/delete-product/${_id}`); //http://localhost:5000/api/products/delete-product/_id
  }

  loginProduct(product: Product){
    return this.http.post(`${this.URL_API}/login`, product); //http://localhost:5000/api/products/login
  }

}
