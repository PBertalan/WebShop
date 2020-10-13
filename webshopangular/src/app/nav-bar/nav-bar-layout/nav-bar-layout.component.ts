import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-layout',
  templateUrl: './nav-bar-layout.component.html',
  styleUrls: ['./nav-bar-layout.component.css']
})
export class NavBarLayoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  loadIndex(){
    this.router.navigate(['']);
  }

}
