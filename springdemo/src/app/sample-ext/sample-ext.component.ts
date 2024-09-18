import { Component } from '@angular/core';
import { SampleService } from '../sample.service';
import { Sample } from '../sample';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-sample-ext',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './sample-ext.component.html',
  styleUrl: './sample-ext.component.css'
})
export class SampleExtComponent {

  constructor(private sampleService: SampleService) {}

  sampleArray: Sample[] =[];

  onSubmit2(): void {
    this.sampleService.getProducts().subscribe({
      next: (data) => {
        this.sampleArray =data;

        console.log('Users fetched successfully:', data);
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      },
    });
  }

}
