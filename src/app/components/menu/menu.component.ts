import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  // adding class to <app-menu>
  @HostBinding("class")
  hostClass = "hidden"
  private skipClick = false;

  // to listen to any events inside of host, second argument is array of args, first is event
  @HostListener('click', ["$event"])
  hostClick(event:Event){
    event.stopPropagation();
  }

  // Host listener is good for window:click
  // @HostListener("window:click", ["$event"])
  // hostWindowClick(){
  //   console.log("window click")

  // }
  show(){
    this.hostClass = "open";
    this.skipClick = true;
  }

  // I can subscribe on window:click only one time
  // below is an example when to hide menu, if user clicks outside the host-binding
  @HostListener("window:click")
  hide(){
    if(this.skipClick){
      this.skipClick = false
      return;
    }
    this.hostClass="hidden"
  }
}
