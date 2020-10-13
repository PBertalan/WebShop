import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index-layout',
  templateUrl: './index-layout.component.html',
  styleUrls: ['./index-layout.component.css']
})
export class IndexLayoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  loadClothes(sex : string){
      console.log(sex);
      console.log("Valami");
      localStorage.setItem('sex' ,sex);
      this.router.navigate(['list']);
  }

}
