import { Injectable, Inject } from '@angular/core';
import { ThoughtModel } from './models/thought.model';
import { LocalStorageProxyService } from './local-storage-proxy.service';



@Injectable({
  providedIn: 'root'
})
/*
Represents Queues for offline persistence of a thought
*/
export class ThoughtOfflinePersistenceService {

  

  constructor(private readonly localStorageProxy:LocalStorageProxyService) { 
    
    
  }

  static GenerateKey():string {

    return `thought_${Date.now()}`;
  }

  Add(thoughtText:string):void {
    
    //To-do:
    //1): Add a method to the proxy that can take a thought and persist that. 
    //2): Add Key generator and save thought.
    //3): Make sure that text box is cleared and message added to the page to say a thought has been saved. 

    this.localStorageProxy.setString(ThoughtOfflinePersistenceService.GenerateKey(),thoughtText);
   
  }
}
