import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Module holds test harnesses for things that can'tbe unit tested effectively.
e.g. Proxy Services around 
*/
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class TestHarnessesModule { }
