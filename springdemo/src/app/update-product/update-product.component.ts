import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent {
  product: Product = {
    product_id: 0,
    productName: '',
    price: 0,
    description: '',
    category: ''
  };


  constructor(private productservice: ProductService){}

  onSubmit2(): void {
    if (this.isValidProduct(this.product)) {
      this.productservice.updateProduct(this.product.product_id,this.product).subscribe({
        next: (data) => {
          console.log('Product updated successfully:', data);
          // Optionally, reset the form or navigate to another view
          
        },
        error: (error) => {
          console.error('Error updating product:', error);
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
