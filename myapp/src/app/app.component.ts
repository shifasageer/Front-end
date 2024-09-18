import { CommonModule, NgFor, NgIf, NgSwitch, NgTemplateOutlet } from '@angular/common';
import { AfterContentInit, AfterViewChecked, Component, DoCheck, NgModule, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ColorComponent } from './color/color.component';
import { style } from '@angular/animations';
import { RadiobgComponent } from './radiobg/radiobg.component';
import { DataComponent } from './data/data.component';
import { AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgFor, CommonModule,NgIf, ColorComponent,NgSwitch,RadiobgComponent,DataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, DoCheck, OnChanges, AfterViewChecked , OnDestroy{
  title = 'myapp';
  // company = 'UST';

  // productid = 'AZ101#789';
  // Description = 'Dual Camer Dual Sim 512 GB';
  // available = 'true';
  // instock = this.available;
  // qty = 200;
  // orderqty = 0;
  // isorderedQtyAvailable = this.orderqty < this.qty ? true : false;
  // deliverColor = 'red';

  // products = [
  //   { productId: '1234', description: 'Mobile', price: '75000' },
  //   { productId: '1000', description: 'Laptop', price: '175000' },
  //   { productId: '1010', description: 'Iphone', price: '85000' },
  //   { productId: '1200', description: 'Ipad', price: '70000' },
  // ];

  // printOrder(input :any): void {
  //   console.log(input, 'order placed');
  // }


  // orderDate : Date =new Date;

  // oddColor = "yellow";
  // evenColor ="cyan";
   title2: string = 'from parent';

  constructor(){
    console.log('constructir() is called......');
  }
  // ngAfterContentInit(): void {
  //   throw new Error('Method not implemented.');
  // }

  ngAfterViewChecked(): void {
      
  }

  

  ngOnChanges(changes: SimpleChanges): void {

    console.log("ngOnChanges() is called")

  }

  ngOnInit(): void {
    console.log('ngOnInit() is called........');
  }

  
  ngDoCheck(): void {
    console.log('ngdocheck() called...... from child')
  }

  keyCapture(event:any){
    this.title = event;
  }
  
  sendMessage(){
    console.warn('click event fired');
  }
 ngOnDestroy(): void {
   console.log('ngOnDestroy().....')
 }
  

}


