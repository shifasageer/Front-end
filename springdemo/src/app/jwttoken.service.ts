import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from './token';
import { AuthenticationResponse } from './authentication-response';

@Injectable({
  providedIn: 'root'
})

  // private token!:string;


  // constructor(private http: HttpClient) {}

  // sendTokenRequest(){
  //   let jsonRequestBody: any= {username:'foo', password:'foo'};
  //   let url= 'http://localhost:8092/authenticate';
  //   this.http.post(url, jsonRequestBody , { responseType:'text' as 'json'});
  // }

  // sendAuthRequest(){
  //   const headers = new HttpHeaders().set('Authorization',this.token);

  //   let url='http://localhost:8092/authorize';
  //   this.http.get(url, {headers , responseType: 'text' as 'json'});
  // }


 // Import AuthenticationResponse interface
 

export class JwttokenService{
  private apiUrl = 'http://localhost:8092/authenticate'; // URL to the backend API
 
  constructor(private http: HttpClient) {}
 
  authenticate(
    username: string,
    password: string
  ): Observable<AuthenticationResponse> {
 
    console.log('generating jwt...');
 
    const credentials: Token = { username, password };
    console.log(credentials)
   
    return this.http.post<AuthenticationResponse>(this.apiUrl, credentials);
  }

  sendAuthRequest(jwt: string) {
    console.log('validating...');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwt}`);
    return this.http.get('http://localhost:8092/greet', { headers , responseType:'text' as 'json'});
  }

  sendAuthRequest2(jwt: string) {
    console.log('validating...admin');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwt}`);
    return this.http.get('http://localhost:8092/admin', { headers , responseType:'text' as 'json'});
  }

  sendAuthRequest3(jwt: string) {
    console.log('validating...user');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwt}`);
    return this.http.get('http://localhost:8092/user', { headers , responseType:'text' as 'json'});
  }
}
 


