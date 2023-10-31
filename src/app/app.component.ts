import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App Component Hello';
  expression = false;

  age = 23;

  sayHi(text: string) {
    // receiving data from child
    console.log('say hi', text);
  }
}
