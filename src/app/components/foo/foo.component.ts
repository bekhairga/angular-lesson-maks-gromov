import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent {
  //getting props from parent component
  @Input()
  title?:string;
  // getting custom event or function that was generated by parent, we need to create an event
  // Output decorator is need to get a custom event or function
  @Output()
  sayHi = new EventEmitter<string>();
  // this event recieves only string inside of emit


  // creating custom two-way binding
  @Input()
  counter = 0;
  // for two-way binding our emitter MUST finish on "change"
  @Output()
  counterChange = new EventEmitter<number>();


  // changing props name using @Input foobar will be pointed to foo variable in class
  // it is a bad practice
  @Input('foobar') foo: string = '';

  // constructor doesn't know about title
  constructor() {
    console.log(this.title);
  }

  increment() {
    this.counterChange.emit(++this.counter)
  }

  decrement(){
    this.counterChange.emit(--this.counter)
  }

  onSayHi(){
    // we are emitting an event, inside of event all data can be stored
    this.sayHi.emit(this.title);
  }

  //onInit knows about title, cause decorators and anything else works after new
  ngOnInit(){
    console.log(this.title)
  }
}
