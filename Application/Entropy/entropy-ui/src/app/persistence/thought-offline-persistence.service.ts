import { Injectable } from '@angular/core';
import { IndexedDbConnectionService } from './indexed-db-connection.service';
import { ThoughtModel } from './models/thought.model';
import Dexie from 'dexie';

@Injectable({
  providedIn: 'root'
})
/*
Represents Queues for offline persistence of a thought
*/
export class ThoughtOfflinePersistenceService {

  thoughtsTable:Dexie.Table<ThoughtModel,number>;

  constructor(private readonly indexedDb:IndexedDbConnectionService) { 
    
    //Create / Reference the Thought table
    this.indexedDb.db.version(1).stores({thoughts: '++id'})

    this.thoughtsTable = this.indexedDb.db.table('thoughts');
  }

  Add(thought:ThoughtModel):Promise<number> {
    
    return this.thoughtsTable.add(thought);
  }
}
