import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../app/page-not-found/page-not-found.component';
import { ParentComponent } from './DataPass/parent/parent.component';
import { FeedbackCollectionComponent } from './feedback-collection/feedback-collection.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: FeedbackCollectionComponent
  // },
  {
    path: '',
    component: ParentComponent
  },
  {
    path: 'app-parent',
    component: ParentComponent
  },
  {
    path: 'feedback-collection',
    component: FeedbackCollectionComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
  {
    path: '404',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
