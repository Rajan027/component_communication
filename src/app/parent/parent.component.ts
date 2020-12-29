import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Child1Component } from '../child1/child1.component';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewInit {
  @ViewChild(Child1Component) anotherChild!: Child1Component;

  // Initialize child component with items
  items = ['item1', 'item2', 'item3'];
  newItem: string = '';
  employee: any=[];

  constructor(private service: DataServiceService) { }

  ngAfterViewInit(): void {
    // Access child properties and methods
    console.log('Child component name: ' + this.anotherChild.name);
    // update child component's name property
    //setTimeout(() => {this.anotherChild.name = 'Child1Component';});
  }

  ngOnInit(): void {
    // subscrice to observable to get the current value set by parent1 component
    this.service.currentEmployeeDetails.subscribe(employee => {this.employee = employee});
  }

  itemAdded(item: string) {
    this.newItem = item;
  }

}
