import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackCollectionService {
  readonly rootURL = 'http://localhost:2900/api/';
  
  constructor(private http: HttpClient) { }
  
  getByPosts(): Observable<any> {
    return this.http.get(this.rootURL+'FeedbackCollection/GetByPosts');
  }
}
