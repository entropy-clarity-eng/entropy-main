import { Injectable } from '@angular/core';
import { Dexie } from 'dexie' 
@Injectable({
  providedIn: 'root'
})
/*
Represents the connection to IndexedDb (via Dexie)
*/
export class IndexedDbConnectionService {

  public readonly db = new Dexie('entropyDb');

  constructor() { }
}
