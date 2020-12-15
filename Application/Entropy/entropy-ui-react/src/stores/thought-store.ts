 import {observable, action} from "mobx";
import { ThoughtPersistenceStatus } from "../thoughts/thought-persistence-status";
import { ThoughtModel } from "../thoughts/thought-model";
import { ThoughtAPI } from "../thoughts/thought-api";
import { APIPersistenceError } from "../general/api-persistence-error";
 
 export const THOUGHT_KEY_PREFIX = 'thought_';

 export class ThoughtStore  {

    @observable thoughts:[] = [];
    
    @observable currentPersistenceStatus = new ThoughtPersistenceStatus();
    private isConsumingThoughtQueue = false;

    @action
    add(thoughtText: string)  {
        const key = ThoughtStore.GenerateKey();
        localStorage.setItem(key,thoughtText);
        this.tryThoughtConsumptionStart();        

    }

    private tryThoughtConsumptionStart() {
      if (!this.isConsumingThoughtQueue) {
        this.isConsumingThoughtQueue = true;
        this.consumeThoughtsRecursive();
      }
    }

    static GenerateKey(): string {

        return `${THOUGHT_KEY_PREFIX}${Date.now()}`;
      }

      private consumeThoughtsRecursive(): void {


        const thoughtKeys = this.getThoughtKeysOrdered();
        const thoughtsLeftInLocalStorage = thoughtKeys.length;
        // Create a new persistence status.
        const newThoughtPersistenceStatus = new ThoughtPersistenceStatus();
        Object.assign(this.currentPersistenceStatus, newThoughtPersistenceStatus);
        newThoughtPersistenceStatus.thoughtsLeftToPersist = thoughtsLeftInLocalStorage;
        this.currentPersistenceStatus = newThoughtPersistenceStatus;

        if (thoughtsLeftInLocalStorage === 0) {
         
          console.log(`End of thoughts to be processed in local storage.`);
          this.isConsumingThoughtQueue = false;
        } else {
          const earliestKey = thoughtKeys[0];
          const thoughtText = localStorage.getItem(earliestKey);
    
          if (!thoughtText) {
    
            // TO-DO: Raise error event so user is aware, but we shouldn't stop queue processing. 
            console.error(`Could not locate thought in local storage. Key: ${earliestKey}`);
            localStorage.removeItem(earliestKey);
            this.consumeThoughtsRecursive();
    
          } else {
            const thoughtModel = new ThoughtModel();
            const thoughtDate = earliestKey.split(THOUGHT_KEY_PREFIX)[1];
    
            thoughtModel.UTCTimeRecorded = new Date(Number.parseInt(thoughtDate));
            thoughtModel.thoughtText = thoughtText;
    
            ThoughtAPI.addThought(thoughtModel).then(() => {
              console.log(`Consumed and persisted thought: ${earliestKey}`);
             
              localStorage.removeItem(earliestKey);
              this.currentPersistenceStatus.thoughtsLeftToPersist = this.getThoughtKeysOrdered().length;
              this.currentPersistenceStatus = newThoughtPersistenceStatus;
              this.currentPersistenceStatus = newThoughtPersistenceStatus;
              this.consumeThoughtsRecursive();
            }, (error: APIPersistenceError) => {
              if (error.isConnectionError === true) {
                console.warn('Connection error found, lets retry');
                newThoughtPersistenceStatus.isConnectionAlive = false;
                newThoughtPersistenceStatus.retrySecondsLeft = 30;
                this.currentPersistenceStatus = newThoughtPersistenceStatus;
                this.currentPersistenceStatus = newThoughtPersistenceStatus;
                window.setTimeout(this.consumeThoughtsRecursive.bind(this), 30000);
              } else {
                // TO-DO: Handle this properly.
                newThoughtPersistenceStatus.isConnectionAlive = false;
                newThoughtPersistenceStatus.retrySecondsLeft = 30;
                newThoughtPersistenceStatus.unrecoverableErrorsThisSession += 1;
                this.currentPersistenceStatus = newThoughtPersistenceStatus;
                this.currentPersistenceStatus = newThoughtPersistenceStatus;
                console.error(' Duff thought for some reason, you can contact support matey.');
              }
            });
          }
    
        }
       
    
      }
    
      // Get an alphabetically, descending list of thought keys from local storage. 
      private getThoughtKeysOrdered(): Array<string> {
    
        var keys = new Array<string>();
    
        for (var i = 0; i < localStorage.length; i++) {
    
          var key = localStorage.key(i);
          if(key) {
            keys.push(key);
          } else {
            console.log(`No thought for key: ${key}`);
          }
          
        }
    
        keys = keys.filter((value) => { return value.indexOf(THOUGHT_KEY_PREFIX) !== -1 });
    
        return keys.sort(
          (a, b) => {
            if (a < b) { return -1; }
            if (a > b) { return 1; }
            return 0;
          }
        );
    
    
      }

}