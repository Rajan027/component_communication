import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {

  constructor(private service: DataServiceService) { }

  ngOnInit(): void {
    this.service.updateEmployeeDetails({empId: 1, name: "John"});
  }

}
