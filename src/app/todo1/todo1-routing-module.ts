import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from '../todo1/components/parent/parent.component';
import { Child1Component } from '../todo1/components/child1/child1.component';
import { Child2Component } from '../todo1/components/child2/child2.component';
import { Child3Component } from '../todo1/components/child3/child3.component';

const routes: Routes = [
  {
    path: '',
    component: ParentComponent,
    children: [
      { path: '', redirectTo: 'child2', pathMatch: 'full' },
      { path: 'child2', component: Child2Component },
      { path: 'child3', component: Child3Component },
    ],
  },
  { path: '**', redirectTo: 'child2' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class Todo1RoutingModule {}
