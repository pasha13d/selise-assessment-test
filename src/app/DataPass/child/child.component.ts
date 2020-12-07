import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() childPosts: any[] = [];
  
  @Output() passedEvent = new EventEmitter();
  data: string = 'deepika';

  constructor() { }

  ngOnInit(): void {
  }

  PassEvent() {
    this.passedEvent.emit(this.data);
  }

}
