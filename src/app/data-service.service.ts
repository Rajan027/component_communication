import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  public data: any=[];

  private employee = new BehaviorSubject(this.data);

  currentEmployeeDetails = this.employee.asObservable();

  updateEmployeeDetails(employee: any) {
    this.employee.next(employee);
  }
}
