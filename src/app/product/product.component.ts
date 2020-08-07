import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  constructor(private alertifyService: AlertifyService,
    public productService: ProductService,
    private activatedRoute: ActivatedRoute) { }

  title: string = "Ürün Listesi";
  filterText: string = ""
  products: Product[];

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    let categoryId;
    this.activatedRoute.params.subscribe(params => {
      categoryId = params["categoryId"]
      this.productService.getProducts(categoryId).subscribe(data => {
        this.products = data;
      });
    })
   
  }

  addtoCart(product: Product): void {
    // console.log(product.name + ' added to cart');
    // alertify.success(product.name + ' added to cart');
    this.alertifyService.success(product.name + ' added to cart');
  }

}
