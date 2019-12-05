import { Injectable } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/*
Acts as a proxy for events & properties of Browser Window API to make it easier to unit test. 
*/
export class WindowProxyService {

  $onlineEvent:Observable<Event>;
  $offlineEvent:Observable<Event>;

  constructor() { 
    this.$offlineEvent = fromEvent(window,"offline");
    this.$onlineEvent = fromEvent(window,"online");
  }
}
