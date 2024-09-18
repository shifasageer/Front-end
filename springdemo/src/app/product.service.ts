import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private apiUrl = 'http://localhost:8090/product/api.1.0';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    console.log('Requesting users from API...');
    return this.http.get<Product[]>(`${this.apiUrl}/getall`);
  }


    getProductById(id: number): Observable<Product> {
    console.log(`Requesting user with ID ${id} from API...`);
    return this.http.get<Product>(`${this.apiUrl}/get/${id}`);
  }

  createProduct(product: Product): Observable<Product> {
    console.log("creating product via API...", product);
    return this.http.post<Product>(`${this.apiUrl}/create`,product)
  }



    updateProduct(id: number, product: Product): Observable<Product> {
    console.log(`Updating product with ID ${id} with data:`, product);
    return this.http.put<Product>(`${this.apiUrl}/update/${id}`, product);
  }


    deleteProduct(id: number): Observable<String> {
    console.log(`Deleting product with ID ${id}...`);
    return this.http.delete<String>(`${this.apiUrl}/delete/${id}`,{responseType:'text' as 'json'});
  }
}




// export class UserService {
 
 
 

 
//   createUser(user: User): Observable<User> {
//     console.log('Creating user with data:', user);
//     return this.http.post<User>(this.apiUrl, user);
//   }
 
//   updateUser(id: number, user: User): Observable<User> {
//     console.log(`Updating user with ID ${id} with data:`, user);
//     return this.http.put<User>(`${this.apiUrl}/${id}`, user);
//   }
 
//   deleteUser(id: number): Observable<void> {
//     console.log(`Deleting user with ID ${id}...`);
//     return this.http.delete<void>(`${this.apiUrl}/${id}`);
//   }
