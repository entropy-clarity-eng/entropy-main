import { Injectable, Inject } from '@angular/core';
import { ThoughtModel } from './models/thought.model';
import { LocalStorageProxyService } from './local-storage-proxy.service';
import { ThoughtApiPersistenceService } from './thought-api-persistence.service';
import { APIPersistenceError } from './api-persistence-error';
import { BehaviorSubject } from 'rxjs';
import { ThoughtPersistenceStatus } from './thought-persistence-status';



@Injectable({
  providedIn: 'root'
})
/*
Represents Queues for offline persistence of a thought
*/
export class ThoughtOfflinePersistenceService {

  static readonly THOUGHT_KEY_PREFIX = 'thought_';

  public persistenceStatus$ = new BehaviorSubject<ThoughtPersistenceStatus>(new ThoughtPersistenceStatus());

  private currentPersistenceStatus = new ThoughtPersistenceStatus();

  private isConsumingThoughtQueue = false;


  constructor(readonly localStorageProxy: LocalStorageProxyService,
              readonly thoughtAPI: ThoughtApiPersistenceService) {


                this.tryThoughtConsumptionStart();

  }

  static GenerateKey(): string {

    return `${ThoughtOfflinePersistenceService.THOUGHT_KEY_PREFIX}${Date.now()}`;
  }

  add(thoughtText: string): void {

    const thoughtKey = ThoughtOfflinePersistenceService.GenerateKey();
    this.localStorageProxy.setString(thoughtKey, thoughtText);
    this.tryThoughtConsumptionStart();

  }

  private tryThoughtConsumptionStart() {
    if (!this.isConsumingThoughtQueue) {
      this.isConsumingThoughtQueue = true;
      this.consumeThoughtsRecursive();
    }
  }

  private consumeThoughtsRecursive(): void {


    const thoughtKeys = this.getThoughtKeysOrdered();
    const thoughtsLeftInLocalStorage = thoughtKeys.length;
    // Create a new persistence status to be published out after this consumption cycle is complete.
    const newThoughtPersistenceStatus = new ThoughtPersistenceStatus();
    Object.assign(this.currentPersistenceStatus, newThoughtPersistenceStatus);
    newThoughtPersistenceStatus.thoughtsLeftToPersist = thoughtsLeftInLocalStorage;

    if (thoughtsLeftInLocalStorage === 0) {
     
      console.log(`End of thoughts to be processed in local storage.`);
      this.isConsumingThoughtQueue = false;
    } else {
      const earliestKey = thoughtKeys[0];
      const thoughtText = this.localStorageProxy.getItem(earliestKey);

      if (!thoughtText) {

        // TO-DO: Raise error event so user is aware, but we shouldn't stop queue processing. 
        console.error(`Could not locate thought in local storage. Key: ${earliestKey}`);

      } else {
        const thoughtModel = new ThoughtModel();
        const thoughtDate = earliestKey.split(ThoughtOfflinePersistenceService.THOUGHT_KEY_PREFIX)[1];

        thoughtModel.UTCTimeRecorded = new Date(Number.parseInt(thoughtDate));
        thoughtModel.thoughtText = thoughtText;

        this.thoughtAPI.addThought(thoughtModel).then(() => {
          console.log(`Consumed and persisted thought: ${earliestKey}`);
          this.localStorageProxy.removeItem(earliestKey);
          this.currentPersistenceStatus.thoughtsLeftToPersist = this.getThoughtKeysOrdered().length;
          this.currentPersistenceStatus = newThoughtPersistenceStatus;
          this.persistenceStatus$.next(newThoughtPersistenceStatus);
          this.consumeThoughtsRecursive();
        }, (error: APIPersistenceError) => {
          if (error.isConnectionError === true) {
            console.warn('Connection error found, lets retry');
            newThoughtPersistenceStatus.isConnectionAlive = false;
            newThoughtPersistenceStatus.retrySecondsLeft = 30;
            this.currentPersistenceStatus = newThoughtPersistenceStatus;
            this.persistenceStatus$.next(newThoughtPersistenceStatus);
            window.setTimeout(this.consumeThoughtsRecursive.bind(this), 30000);
          } else {
            // TO-DO: Handle this properly.
            newThoughtPersistenceStatus.isConnectionAlive = false;
            newThoughtPersistenceStatus.retrySecondsLeft = 30;
            newThoughtPersistenceStatus.unrecoverableErrorsThisSession += 1;
            this.currentPersistenceStatus = newThoughtPersistenceStatus;
            this.persistenceStatus$.next(newThoughtPersistenceStatus);
            console.error(' Duff thought for some reason, you can contact support matey.');
          }
        });
      }

    }
   

  }

  // Get an alphabetically, descending list of thought keys from local storage. 
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
