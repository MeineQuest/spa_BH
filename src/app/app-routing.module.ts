import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleOverviewComponent } from './components/peopleoverview/peopleoverview.component';

const routes: Routes = [
  {
    path: 'overview',
    component: PeopleOverviewComponent
  },
  {
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full'

  },
  {
    path: '**',
    component: PeopleOverviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
