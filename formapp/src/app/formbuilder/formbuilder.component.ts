import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReactiveComponent } from '../reactive/reactive.component';
import { NgFor } from '@angular/common';
import { Product } from '../Product';

@Component({
  selector: 'app-formbuilder',
  standalone: true,
  imports: [ReactiveFormsModule,NgFor],
  templateUrl: './formbuilder.component.html',
  styleUrl: './formbuilder.component.css'
})
export class FormbuilderComponent {


  product = new Product('','','',0,true)
  productForm:FormGroup;
  // productForm : FormGroup;
  constructor(private formBuilder: FormBuilder){
    this.productForm=this.formBuilder.group({
      productName: [,[Validators.required, Validators.minLength(8)]],
      desc: this.formBuilder.group({
        age:[0],
        season: [''],
      }),
      category: [''],
      qty: [0],
      price: [0],
      suppliers: this.formBuilder.array([
        this.formBuilder.control('')
      ])
    });
  }
 


  onSubmit(){
    console.error(this.productForm);
    console.error(this.suppliers.at(0).value);
    // console.error(this.productForm.value);
    console.warn(this.productForm.controls['productName'].value);
    // console.error(this.productForm.controls['description'].controls['age'].value);
    // console.log(this.productForm.controls['suppliers'].controls[0].value);
    console.error(this.productForm.get('desc')?.get('age')?.value);
    console.error(this.productForm.get('suppliers')?.get([0])?.value);
  }

  get suppliers(){
    return this.productForm.get('suppliers') as FormArray;
  }

  addNewSupplier(){
    console.warn(this.suppliers);
    this.suppliers.push(this.formBuilder.control(''));
  }
}
