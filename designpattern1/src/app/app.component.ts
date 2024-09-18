import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestObservableComponent } from './test-observable/test-observable.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TestObservableComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'designpattern1';
}
