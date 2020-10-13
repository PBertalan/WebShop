import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';
import { IndexLayoutComponent } from './index/index-layout/index-layout.component';

const routes: Routes = [
  {path: 'list', component: ProductListComponent},
  {path: '', component: IndexLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
