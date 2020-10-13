import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarLayoutComponent } from './side-bar-layout/side-bar-layout.component';



@NgModule({
  declarations: [SideBarLayoutComponent],
  imports: [
    CommonModule
  ],
  exports : [
    SideBarLayoutComponent
  ]
})
export class SideBarModule { }
