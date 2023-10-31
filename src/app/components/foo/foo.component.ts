import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent {
  // getting template from parent
  @Input()
  template?:TemplateRef<{$implicit: number}>;
}
