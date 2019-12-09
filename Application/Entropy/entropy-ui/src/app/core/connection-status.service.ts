import { Injectable } from '@angular/core';
import { Observable, merge, fromEvent, concat } from 'rxjs';
import {mapTo} from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class ConnectionStatusService {

  $connectionStatus:Observable<boolean>;
  private offlineEvent =  fromEvent(window,"offline");
  private onlineEvent = fromEvent(window,"online");
  private initialState:Observable<boolean>;
  
  constructor(readonly windowProxy:any, readonly navigatorProxy:any) {

   
    //Get initial state from online / offline property in navgiator.
    this.initialState = Observable.create(observer=>{observer.next(navigatorProxy.onLine)});

    this.$connectionStatus = concat(
                                   this.initialState,
                                   this.offlineEvent.pipe(mapTo(false)),
                                   this.onlineEvent.pipe(mapTo(true)))

   }
}
