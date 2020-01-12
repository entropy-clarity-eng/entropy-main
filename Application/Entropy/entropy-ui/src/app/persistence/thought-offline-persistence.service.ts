import { Injectable, Inject } from '@angular/core';
import { ThoughtModel } from './models/thought.model';
import { LocalStorageProxyService } from './local-storage-proxy.service';
import { ThoughtApiPersistenceService } from './thought-api-persistence.service';



@Injectable({
  providedIn: 'root'
})
/*
Represents Queues for offline persistence of a thought
*/
export class ThoughtOfflinePersistenceService {

  private isConsumingThoughtQueue: boolean = false;
  static readonly  THOUGHT_KEY_PREFIX = "thought_";  

  constructor(private readonly localStorageProxy: LocalStorageProxyService,
                      readonly thoughtAPI: ThoughtApiPersistenceService) {

      this.tryThoughtConsumptionStart();
  
    }

  static GenerateKey(): string {

    return `${ThoughtOfflinePersistenceService.THOUGHT_KEY_PREFIX}${Date.now()}`;
  }

  add(thoughtText: string): void {

    var thoughtKey = ThoughtOfflinePersistenceService.GenerateKey();
    this.localStorageProxy.setString(thoughtKey, thoughtText);
    this.tryThoughtConsumptionStart();

  }

  private tryThoughtConsumptionStart() {
    if(!this.isConsumingThoughtQueue) {
      this.isConsumingThoughtQueue = true;
      this.consumeThoughtsRecursive();
    }
  }

  private consumeThoughtsRecursive(): void {

    //Get the earliest thought from getThoughtKeysOrdered, and try to persist it. 
    var thoughtKeys = this.getThoughtKeysOrdered();
    
    if (thoughtKeys.length == 0) {
      console.log(`End of thoughts to be processed in local storage.`);
      this.isConsumingThoughtQueue = false;
    }
      else {
      var earliestKey = thoughtKeys[0];
      var thoughtText = this.localStorageProxy.getItem(earliestKey);
      
      if(!thoughtText) {
        
        //TO-DO: Raise error event so user is aware, but we shouldn't stop queue processing. 
        console.error(`Could not locate thought in local storage. Key: ${earliestKey}`);

      } else {
        var thoughtModel = new ThoughtModel();
        var thoughtDate = earliestKey.split(ThoughtOfflinePersistenceService.THOUGHT_KEY_PREFIX)[1];
        thoughtModel.UTCTimeRecorded = new Date(Number.parseInt(thoughtDate));
        thoughtModel.thoughtText = thoughtText;

        this.thoughtAPI.addThought(thoughtModel).then(() => {
          console.log(`Consumed and persisted thought: ${earliestKey}`);
          this.localStorageProxy.removeItem(earliestKey);
          this.consumeThoughtsRecursive();
        });
      }

    }

  }

  //Get an alphabetically, descending list of thought keys from local storage. 
  private getThoughtKeysOrdered(): Array<string> {

    var keys = new Array<string>();

    for (var i = 0; i < this.localStorageProxy.length(); i++) {

      var key = this.localStorageProxy.key(i);
      keys.push(key);
    }

    keys = keys.filter((value) => { return value.indexOf(ThoughtOfflinePersistenceService.THOUGHT_KEY_PREFIX) != -1 });

    return keys.sort(
      (a, b) => {
        if (a < b) { return -1; }
        if (a > b) { return 1; }
        return 0;
      }
    );


  }
}
