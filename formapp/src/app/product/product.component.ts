import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../Product';
import { FormsModule } from '@angular/forms';
import { PreviewComponent } from '../preview/preview.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule,PreviewComponent,NgIf],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  product : Product = {
    productName: '',
    productDesc: '',
    productCategory: '',
    productPrice: 0,
    productPublish: false
  }
  enablePreview: string = "none";
  @Output() sendProductEvent = new EventEmitter<Product[]>();

  products : Product[] = [];
  onSubmit(){
    this.products.push(this.product);

    this.product = {
      productName: '',
      productDesc: '',
      productCategory: '',
      productPrice: 0,
      productPublish: false
    };
    this.sendProductEvent.emit(this.products);
    console.log(this.products);
  }

  clickPreview(){
    this.enablePreview = "block";
  }

  onPreviewClose(display: string){
    this.enablePreview = display;
  }
}
