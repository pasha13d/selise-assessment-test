import { Component, OnInit, ViewChild } from '@angular/core';
import { FeedbackCollectionService } from '../services/feedback-collection.service';

@Component({
  selector: 'feedback-collection',
  templateUrl: './feedback-collection.component.html',
  styleUrls: ['./feedback-collection.component.css']
})
export class FeedbackCollectionComponent implements OnInit {
  dataSource=[];
  private value;
  constructor(public service: FeedbackCollectionService) { }

  ngOnInit(): void {
    this.service.getByPosts().subscribe(res => {
      if(!res) {
        return;
      }
      this.dataSource = res;
    });
  }
  postSearch=''

  get totalComments(){
    this.value =this.dataSource;
    var sum = 0;
    for(let j=0; j<this.dataSource.length; j++){  
      sum+= parseFloat(this.value[j].PostTitle);
      }
      return sum;
  }

  up=50;
  down=50;
  like(){
    this.up++;
  }
  dislike() {
    this.down--;
  }
}
