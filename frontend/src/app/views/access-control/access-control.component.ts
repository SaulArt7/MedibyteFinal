import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Access } from 'src/app/models/access.model';
import {AccessControlService } from 'src/app/services/access-control.service';

declare var M: any;

@Component({
  selector: 'app-access-control',
  templateUrl: './access-control.component.html',
  styleUrls: ['./access-control.component.css'],
  providers: [AccessControlService]
})
export class AccessControlComponent implements OnInit {

  constructor(public accessControlService: AccessControlService ) {
    this.load = false;
   }

   public load: boolean;

  ngOnInit(): void {
    console.log('Hola desde Init de AdminAccessP Component');
    this.getAccessP();
  }

  // resetForm(form?: NgForm) {
  //   if (form) {
  //     form.reset();
  //     this.accessControlService.selectedProduct = new Access();
  //   }
  // }

  // addProduct(form: NgForm) {
  //   if (form.value._id) {
  //     this.productsService.putProduct(form.value).subscribe((res) => {
  //       console.log(res);
  //       // this.
  //       this.resetForm(form);
  //       // M.toast({ html: 'Actualizado Satisfactoriamente' });
  //       alert('Actualizado Satisfactoriamente');
  //       this.getAccessP();
  //     });
  //   } else {
  //     console.log(form.value);
  //     delete form.value._id; // Por error al intenar enviar un Usuario con ID en ''

  //     const { name, price, description, stock, image } = form.value;
  //     if (!name || !price || !description || stock === 0 || image === 0) {
  //       alert('Diligencie todos los campos por favor');
  //       return;
  //     }

  //     this.productsService.postProduct(form.value).subscribe((res) => {
  //       console.log(res);
  //       this.resetForm(form);
  //       // M.toast({ html: 'Guardado Satisfactoriamente' });
  //       alert('Guardado Satisfactoriamente');
  //       this.getAccessP();
  //     });
  //   }
  // }

  getAccessP() {
    this.accessControlService.getAccessP().subscribe((res) => {
      this.accessControlService.accessP = res; // O res.products (si recibí de tipo ANY)
      // this.accessControlService.products = res; // Previa
      // console.log(this.accessControlService.products);
      console.log(this.accessControlService.accessP);
      // console.log(typeof(this.accessControlService.accessP[0].accessGiven));
      this.load = true;
    });
  }

  // editProduct(product: Product) {
  //   this.productsService.selectedProduct = product;
  //   // this.productsService.putProduct(product);
  //   localStorage.setItem('productName', product.name.valueOf());
  //   localStorage.setItem('productID', product._id.valueOf());
  //   // console.log(typeof(product.name))
  // }

  // deleteProduct(_id: string) {
  //   if (confirm('¿Estás seguro de que desea eliminar este usuario?')) {
  //     this.productsService.deleteProduct(_id).subscribe((res) => {
  //       console.log(res);
  //       // M.toast({ html: 'Usuario eliminado satisfactoriamente' });
  //       this.getAccessP();
  //     });
  //   }
  // }

}
