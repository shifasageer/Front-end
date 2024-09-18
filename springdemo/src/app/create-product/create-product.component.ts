import { NgIf } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgForm, Validators } from '@angular/forms';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent {
  product: Product = {
    product_id: 0,
    productName: '',
    price: 0,
    description: '',
    category: ''
  };

  constructor(private productService: ProductService) {}

  onSubmit(): void {
    if (this.isValidProduct(this.product)) {
      this.productService.createProduct(this.product).subscribe({
        next: (data) => {
          console.log('Product created successfully:', data);
          // Optionally, reset the form or navigate to another view
          
        },
        error: (error) => {
          console.error('Error creating product:', error);
        },
      });
    } else {
      console.error('Product data is invalid.');
    }
  }

  private isValidProduct(product: Product): boolean {
    return product.productName.trim() !== '' &&
           product.price > 0 &&
           product.description.trim() !== '' &&
           product.category.trim() !== '';
  }

  private resetForm(): void {
    this.product = {
      product_id: 0,
      productName: '',
      price: 0,
      description: '',
      category: ''
    };
  }





}




