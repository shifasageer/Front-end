import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  products: Product[]=[];
  constructor() { 
    
    this.products[0] = new Product('s1021',"Tea","Red label",10,850);
    this.products[1] = new Product('k3022',"0Tata","Bulbs",10,2500);
    this.products[2] = new Product('po432',"Reliance","Dish tv",10,2500);
    this.products[3] = new Product('mp3421',"Samsung","Airconditioner",10,2600);
    this.products[4] = new Product('mp3422',"Samsung","Referigirator",10,2600);
    this.products[5] = new Product('mp3423',"Samsung","TV",10,2700);
    this.products[6] = new Product('s1821',"Tea","Ripple",10,2700);
    this.products[7] = new Product('s1021',"Tea","AVT",10,2700);
    this.products[8] = new Product('k3023',"Tata","watch",10,5000);
    this.products[9] = new Product('k3124',"Tata","salt",10,35);   
    this.products[10] = new Product('po433',"Reliance","Mobile",10,2500);

    }

    getProducts(): Product[]{
      return this.products;
    }

    

  
}