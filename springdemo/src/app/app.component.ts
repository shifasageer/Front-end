import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { NgForm, ReactiveFormsModule } from '@angular/forms';
import { JwttokenComponent } from './jwttoken/jwttoken.component';
import { SampleExtComponent } from './sample-ext/sample-ext.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CreateProductComponent,ViewProductComponent,ReactiveFormsModule,JwttokenComponent,SampleExtComponent, CreateProductComponent , DeleteProductComponent,UpdateProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'springdemo';
}
