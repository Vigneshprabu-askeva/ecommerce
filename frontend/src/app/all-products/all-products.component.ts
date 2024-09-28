import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  productPageCounter = 1;
  allproducts:any;
  allcategories:any;
  constructor( private productService: ProductService,) { }

  ngOnInit(): void {

    this.productService.getAllCategory().subscribe(
      (res: any) => {
        this.allcategories = res;
      },
      (err) => {
        console.log(err);
      }
    );

    this.productService.getAllProducts(9, this.productPageCounter).subscribe(
      (res: any) => {
        console.log(res);
        this.allproducts = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  addProduct(): void {
    // if (this.newProduct.title && this.newProduct.image && this.newProduct.price && this.newProduct.quantity) {
    //   this.allproducts.push({ ...this.newProduct });
    //   this.newProduct = { title: '', image: '', price: null, quantity: null }; // Reset form
    // } else {
    //   alert("Please fill in all fields."); // Basic validation
    // }
  }

}
