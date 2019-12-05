import { Injectable } from '@angular/core';
import { WindowProxyService } from './window-proxy.service';

@Injectable({
  providedIn: 'root'
})
export class ConnectionStatusService {

  constructor(readonly windowProxy:WindowProxyService) {

    //To-Do: Figure out what the 'startup' config should be
    //1): Is window online fired when the app starts by any chance? 
    //2): If not, then we may have to request it from navigator. 

   }
}
