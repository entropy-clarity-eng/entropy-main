import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectThoughtComponent } from './collect-thought/collect-thought.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [CollectThoughtComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ThoughtsModule { }
