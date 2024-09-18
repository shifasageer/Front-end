import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent {

  productForm = new FormGroup({
    productname : new FormControl('',[Validators.required,Validators.minLength(3)]),
    desc: new FormControl('',Validators.maxLength(50)),
    category: new FormControl(''),
    qty: new FormControl(0),
    price: new FormControl(0),
    publish : new FormControl('')
  });

  onSubmit(){
    console.error(this.productForm);
    console.warn(this.productForm.value);
    console.log(this.productForm.controls['price'].value);

  }

}
