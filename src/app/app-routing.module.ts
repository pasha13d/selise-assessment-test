import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../app/page-not-found/page-not-found.component';
import { ETicketingComponent } from './e-ticketing/e-ticketing.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: FeedbackCollectionComponent
  // },
  {
    path: '',
    component: ETicketingComponent
  },
  {
    path: 'e-ticketing',
    component: ETicketingComponent
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
