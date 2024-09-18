import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sample } from './sample';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }
  
  getProducts(): Observable<Sample[]> {
    console.log('Requesting users from API...');
    return this.http.get<Sample[]>(`${this.apiUrl}`);
  }
}
