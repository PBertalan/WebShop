import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarLayoutComponent } from './nav-bar-layout/nav-bar-layout.component';



@NgModule({
  declarations: [NavBarLayoutComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NavBarLayoutComponent
  ]
})
export class NavBarModule { }
