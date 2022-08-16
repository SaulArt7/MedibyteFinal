import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

// import { CommonModule } from '@angular/common';

declare var M: any;

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css'],
  providers: [ProductsService],
})
export class AdminProductsComponent implements OnInit {
  constructor(public productsService: ProductsService) {
    this.load = false;
  }

  public load: boolean; // Para evitar error de carga de productos

  ngOnInit(): void {
    console.log('Hola desde Init de AdminProducts Component');
    this.getProducts();
    if (localStorage.getItem('productName')) {
      let a = new String(localStorage.getItem('productName'));
      this.productsService.selectedProduct.name = a;
      let b = new String(localStorage.getItem('productID'));
      this.productsService.selectedProduct._id = b;
      let c = new Number(localStorage.getItem('productPrice'));
      this.productsService.selectedProduct.price = c;
      let d = new String(localStorage.getItem('productDescription'));
      this.productsService.selectedProduct.description = d;
      let e = new Number(localStorage.getItem('productStock'));
      this.productsService.selectedProduct.stock = e;
      let f = new String(localStorage.getItem('productImage'));
      this.productsService.selectedProduct.image = f;
      let g = new String(localStorage.getItem('productCategory'));
      this.productsService.selectedProduct.category = g;
    }
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
    window.scrollTo(0, 0);
  }

  deleteProduct(_id: string) {
    if (confirm('¿Estás seguro de que desea eliminar este producto?')) {
      this.productsService.deleteProduct(_id).subscribe((res) => {
        console.log(res);
        // M.toast({ html: 'Usuario eliminado satisfactoriamente' });
        this.getProducts();
      });
    }
  }
}
