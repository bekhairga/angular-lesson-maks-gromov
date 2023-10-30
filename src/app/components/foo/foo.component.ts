import { Component } from '@angular/core';

interface User {
  id: number;
  name: string;
  template: string
}
@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css'],
})
export class FooComponent {
  expression = false;
  deepObj: any = null;
  users: User[] = [
    {id: 1, name: "John", template: "bold"},
    {id: 2, name: "Doe", template: "italic"},
    {id: 3, name: "Sponge", template: "unknown"},
    {id: 4, name: "Bob", template: "underline"}
  ]
  generateUser() {
    this.deepObj = {
      user: {
        name: "Joe",
        surname: "Doe"
      }
    }
  }

  //below works as a function that knows what to rerender as if it was "key" in React

  trackBy(index:number, user: User){
    return user.id;
  }
}
