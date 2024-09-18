import { Component } from '@angular/core';
import { Token } from '../token';
import { AuthenticationResponse } from '../authentication-response';
import { JwttokenService } from '../jwttoken.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-jwttoken',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './jwttoken.component.html',
  styleUrl: './jwttoken.component.css'
})


export class JwttokenComponent {
 
  username: string = '';
  password: string = '';
  loginFailed: boolean = false;
  loginSuccess: boolean = false;
  loading: boolean = false;
 
  constructor(private jwttokenservice: JwttokenService) {}
 
  login() : void {
    this.loading = true;
    this.jwttokenservice.authenticate(this.username, this.password).subscribe({
 
      next: (response: AuthenticationResponse) => {
        this.loading = false;
        this.loginSuccess = true;
        this.loginFailed = false;
        console.log('JWT Token:', response.jwt);
        // Handle the JWT token (e.g., store it in local storage)
        this.jwttokenservice.sendAuthRequest(response.jwt).subscribe({
          next: (response) => {
            console.log(response);
          },
        });

        this.jwttokenservice.sendAuthRequest2(response.jwt).subscribe({
          next: (response) => {
            console.log(response);
          },
        });

        this.jwttokenservice.sendAuthRequest3(response.jwt).subscribe({
          next: (response) => {
            console.log(response);
          },
        });





      },

      error: (err) => {
        this.loading = false;
        this.loginSuccess = false;
        this.loginFailed = true;
        console.error('Authentication failed', err);
      },
    });
  }
}
 