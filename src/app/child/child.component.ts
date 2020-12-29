import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() items: string[] = [];
  @Output() itemAdded = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }

  addNewItem(newItem: HTMLInputElement) {
    this.items.push(newItem.value);
    // emit value to notify parent component
    this.itemAdded.emit(newItem.value);
    newItem.value = "";
  }

}