import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { FilterTemplate } from '../model/filter-template';
import { Product } from '../model/product';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList : Product[];
  httpParams: HttpParams;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.httpParams = new HttpParams().set('sex', localStorage.getItem('sex')); 
    this.listFilteredProduct(this.httpParams);
  }

  listFilteredProduct(httpParams: HttpParams){    
             

      this.productService.listFilteredProducts(httpParams).subscribe(productList =>  {
          this.productList = productList;
          console.log(this.productList);
      }


      )
      
  }

  selectedBrand(brand: string) {
    this.httpParams = new HttpParams().set('sex', localStorage.getItem('sex')).append('brand', brand); 
    this.listFilteredProduct(this.httpParams);
   
  }
  
}
