import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink, RegisterComponent, AboutusComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'spa';


   constructor(private router: Router){}

  renderAboutUs(aboutus : string){
    this.router.navigate([aboutus]);
  }
  
  renderHome(home : string){
    this.router.navigate([home]);
  }
  
  
  renderRegister(register : string){
    this.router.navigate([register]);
  }


}



