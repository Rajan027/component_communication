import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, ConnectableObservable, from, Subject } from 'rxjs';
import { multicast } from 'rxjs/operators';

@Component({
  selector: 'app-learn-subjects',
  templateUrl: './learn-subjects.component.html',
  styleUrls: ['./learn-subjects.component.css']
})
export class LearnSubjectsComponent implements OnInit {
  // Example 1
  subject = new Subject<number>();
  observable = from([1, 2, 3]);

  // Example 2
  source = from([4, 5, 6]);
  subject1 = new Subject();
  multicasted = this.source.pipe(multicast(this.subject1)) as ConnectableObservable<number>;
  
  // Example 3 - BehaviorSubject
  behaviorSubject = new BehaviorSubject(0);


  constructor() {
    // Example 1
    this.subject.subscribe({next: (n)=> {console.log(`Observer 1: ${n}`)}});
    this.subject.subscribe({next: (n)=> {console.log(`Observer 2: ${n}`)}});

    // Example 2
    this.multicasted.subscribe({next: (n)=> {console.log(`Observer A: ${n}`)}});
    this.multicasted.subscribe({next: (n)=> {console.log(`Observer B: ${n}`)}});

   }

  ngOnInit(): void {
    // Example 1
    this.subject.next(1);
    this.subject.next(2);

    this.observable.subscribe(this.subject);

    // Example 2 is same as Example 1, but it just shows us the code created under the hood for Example 1
    // this.multicasted.connect(); is equivalent to this.observable.subscribe(this.subject);
    this.multicasted.connect();

    // Example 3
    this.behaviorSubject.subscribe({next: (n)=> {console.log(`BehaviorSubject Observer A: ${n}`)}});
    this.behaviorSubject.next(1);
    this.behaviorSubject.next(2);
    
    this.behaviorSubject.subscribe({next: (n)=> {console.log(`BehaviorSubject Observer B: ${n}`)}});
    this.behaviorSubject.next(3);
  }

}
