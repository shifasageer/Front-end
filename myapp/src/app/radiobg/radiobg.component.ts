import { Component } from '@angular/core';

@Component({
  selector: 'app-radiobg',
  standalone: true,
  imports: [],
  templateUrl: './radiobg.component.html',
  styleUrl: './radiobg.component.css'
})
export class RadiobgComponent {
   bgcolor= "white";
  changeColour(): void {
    this.bgcolor = "yellow";
  }

  changeColourYellow(): void {
    this.bgcolor ="yellow"
  }
  changeColourBlue(): void {
    this.bgcolor ="blue"
  }

}
