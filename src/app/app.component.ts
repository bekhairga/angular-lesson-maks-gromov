import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = '';
  surname = '';
  email = '';

  handleSubmit(event: Event) {
    event.preventDefault();
    if (this.email !== '' && this.name !== '' && this.surname !== '') {
      alert('Everything is valid, success submission');
      return;
    }
    alert('Please write valid fields');
  }
}
