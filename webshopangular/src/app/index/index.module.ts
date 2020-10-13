import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexLayoutComponent } from './index-layout/index-layout.component';



@NgModule({
  declarations: [IndexLayoutComponent],
  imports: [
    CommonModule
  ],
  exports : [
    IndexLayoutComponent
  ]
})
export class IndexModule { }
