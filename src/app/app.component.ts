import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.html'
})
export class AppComponent { 
  name = 'Angular'; 
  list = ['a','b','c'];
}