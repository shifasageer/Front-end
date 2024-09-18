import { Component, OnInit, OnChanges, SimpleChanges, Input, DoCheck, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-color',
  standalone: true,
  imports: [],
  templateUrl: './color.component.html',
  styleUrl: './color.component.css'
})
export class ColorComponent  implements OnInit, OnChanges, DoCheck{

 @Input() 
 title : string ="hello";

 constructor(){
  console.log('constructor is called ......parent')
 }
  

 
 ngDoCheck(): void {
   console.log('ngdocheck() caalled...... from child')
 }

 ngOnChanges(changes: SimpleChanges): void {

  console.log("ngOnChanges() is called.........child component")

}

ngOnInit(): void {
  console.log('ngOnInit() is called.......child component.');
}



 
 

}
