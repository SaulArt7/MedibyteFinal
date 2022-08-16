import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

declare var M: any;

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css'],
  providers: [ProductsService],
})
export class TiendaComponent implements OnInit {

  constructor(public productsService: ProductsService) {
    this.load = false;
   }

   public load: boolean;

  ngOnInit(): void {
    console.log('Hola desde Init de Tienda Component');
    this.getProducts();
  }

  getProducts() {
    this.productsService.getProducts().subscribe((res) => {
      this.productsService.products = res;
      console.log(this.productsService.products);
      this.load = true;
    });
  }

}
