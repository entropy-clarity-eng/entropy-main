import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectThoughtComponent } from './thoughts/collect-thought/collect-thought.component';


const routes: Routes = [
  { path: '', component: CollectThoughtComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
