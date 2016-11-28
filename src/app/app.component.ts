import { Component } from 'angular2/core';
import { TestComponent } from './test-component/test-component.component';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.html'
})
export class AppComponent { 
  name = 'Angular'; 
  list = ['a','b','c'];
}