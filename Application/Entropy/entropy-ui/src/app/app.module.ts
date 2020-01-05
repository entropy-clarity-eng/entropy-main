import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThoughtsModule } from './thoughts/thoughts.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ThoughtsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
