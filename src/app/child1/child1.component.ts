import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  name: string = 'Child1 Component';

  constructor() { }

  ngOnInit(): void {
  }

  getName(): string {
    return this.name;
  }

}
