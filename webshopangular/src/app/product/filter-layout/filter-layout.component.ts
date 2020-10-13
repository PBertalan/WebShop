import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-layout',
  templateUrl: './filter-layout.component.html',
  styleUrls: ['./filter-layout.component.css']
})
export class FilterLayoutComponent implements OnInit {


  @Output() brandFilter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  selectedBrand(brand: string) {
    console.log("filterLay")
    this.brandFilter.emit(brand);
 }

}
