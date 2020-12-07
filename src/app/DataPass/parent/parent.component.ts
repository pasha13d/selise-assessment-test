import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  posts='';
  parentPosts: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  AddPosts(posts) {
    console.log(posts);
    this.parentPosts.push(posts);
  }

  childEvent(data) {
    alert(data);
  }

}
