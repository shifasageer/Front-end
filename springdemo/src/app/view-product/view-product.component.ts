import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-view-product',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './view-product.component.html',
  styleUrl: './view-product.component.css'
})
export class ViewProductComponent {
  product_id: string = '';
  selectedProduct: Product | null = null;

  productArray: Product[] = [];


  constructor(private productService: ProductService) {}
  


  onSubmit(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.productArray =data;

        console.log('Products fetched successfully:', data);
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      },
    });
  }


  viewProductById(): void {
    if (this.product_id == null) {
      this.productService.getProductById(Number(this.product_id)).subscribe({
        next: (data: Product) => {
          console.log('Products fetched successfully:', data);
        },
        error: (error) => console.error('sorry no such user',error),
      });
    } else {
      console.log('Please enter a valid ID');
    }
  }

  



}




