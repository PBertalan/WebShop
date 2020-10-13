import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { FilterLayoutComponent } from './filter-layout/filter-layout.component';



@NgModule({
  declarations: [ProductListComponent, FilterLayoutComponent],
  imports: [
    CommonModule
  ],
  exports : [
    FilterLayoutComponent
  ]
})
export class ProductModule { }
