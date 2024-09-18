import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-delete-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './delete-product.component.html',
  styleUrl: './delete-product.component.css'
})
export class DeleteProductComponent {
  product_id: number = 0;

  constructor(private productservice : ProductService){}

  productDelete(): void {

    this.productservice.deleteProduct(Number(this.product_id)).subscribe({
      next: (data) => {
       

        console.log('Products deleted successfully:', data);
      },
      error: (error) => {
        console.error('Error deleting products:', error);
      },

    })
  }

}
