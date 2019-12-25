import { Injectable } from '@angular/core';
import { IndexedDbConnectionService } from './indexed-db-connection.service';

@Injectable({
  providedIn: 'root'
})
/*
Represents Queues for offline persistence of a thought
*/
export class ThoughtOfflinePersistenceService {

  constructor(private readonly indexedDbConnectionService:IndexedDbConnectionService) { 
    
    this.indexedDbConnectionService.db.version(1).stores({thoughts: '++id'})
  }

  Add(thought:Thought):Promise {

  }
}
