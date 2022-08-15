import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

declare var M: any;

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductsService]
})
export class ProductListComponent implements OnInit {

  constructor(public productsService: ProductsService ) {
    this.load = false;
   }

   public load: boolean;

  ngOnInit(): void {
    console.log('Hola desde Init de AdminProducts Component');
    this.getProducts();
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.productsService.selectedProduct = new Product();
    }
  }

  addProduct(form: NgForm) {
    if (form.value._id) {
      this.productsService.putProduct(form.value).subscribe((res) => {
        console.log(res);
        // this.
        this.resetForm(form);
        // M.toast({ html: 'Actualizado Satisfactoriamente' });
        alert('Actualizado Satisfactoriamente');
        this.getProducts();
      });
    } else {
      console.log(form.value);
      delete form.value._id; // Por error al intenar enviar un Usuario con ID en ''

      const { name, price, description, stock, image } = form.value;
      if (!name || !price || !description || stock === 0 || image === 0) {
        alert('Diligencie todos los campos por favor');
        return;
      }

      this.productsService.postProduct(form.value).subscribe((res) => {
        console.log(res);
        this.resetForm(form);
        // M.toast({ html: 'Guardado Satisfactoriamente' });
        alert('Guardado Satisfactoriamente');
        this.getProducts();
      });
    }
  }

  getProducts() {
    this.productsService.getProducts().subscribe((res) => {
      this.productsService.products = res; // O res.products (si recibí de tipo ANY)
      // this.productsService.products = res; // Previa
      // console.log(this.productsService.products);
      console.log(this.productsService.products);
      this.load = true;
    });
  }

  editProduct(product: Product) {
    this.productsService.selectedProduct = product;
    // this.productsService.putProduct(product);
  }

  deleteProduct(_id: string) {
    if (confirm('¿Estás seguro de que desea eliminar este usuario?')) {
      this.productsService.deleteProduct(_id).subscribe((res) => {
        console.log(res);
        // M.toast({ html: 'Usuario eliminado satisfactoriamente' });
        this.getProducts();
      });
    }
  }

}
