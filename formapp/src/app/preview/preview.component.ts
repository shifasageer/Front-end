import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../Product';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-preview',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.css'
})
export class PreviewComponent {
  @Input() display : string = "none";
  @Output() previewDisplayEvent = new EventEmitter<string>();
  @Input() product : Product = {
    productName: '',
    productDesc: '',
    productCategory: '',
    productPrice: 0,
    productPublish: false
  };

  closePreview(){
    console.log("start");
    this.display = "none";
    this.changeParentPreviewDisplayData();
    console.log("end");
  }

  changeParentPreviewDisplayData(){
    console.log("start inside");
    this.previewDisplayEvent.emit("none");
    console.log("end inside");
  }
}
