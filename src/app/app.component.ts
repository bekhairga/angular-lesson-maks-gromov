import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tutorial';
  name = 'name';
  surname = 'surname';
  email = '';

  changeName(event: Event) {
    this.name = (event.target as HTMLInputElement).value;
  }

  myInnerHTML() {
    return '<p>Hello from inner html</p>';
  }
}
