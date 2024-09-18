import { Component } from '@angular/core';
import { Product } from '../product';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-data',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})

export class DataComponent {


  productData: Product[]=[];
  constructor(private service:DataService){
    this.productData = service.getProducts();
  }


  selectedOption: string = '';

  
  filteredItems = [...this.productData];
  
  filterItems(): void {
    if (this.selectedOption) {
      this.filteredItems = this.productData.filter(item =>
        item.brand === this.selectedOption
      );
    }
     else {
       this.filteredItems = [...this.productData];  
    }
    this.filteredItemsCount = this.filteredItems.length;
  }
  filteredItemsCount: number = this.filteredItems.length;


  filterPrice: number = 0;

  filteredItems2 = [...this.productData];

  filterItems2(): void {
    if (this.selectedOption) {
      this.filteredItems2 = this.productData.filter(item =>
        item.price === this.filterPrice
      );
    }
     else {
      this.filteredItems2 = [...this.productData];  
    }
  }

  




  
}
