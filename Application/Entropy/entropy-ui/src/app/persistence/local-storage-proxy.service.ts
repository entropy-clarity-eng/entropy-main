import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

///
/// Provides strobly typed definitions of the local storage API.
///
export class LocalStorageProxyService {

  constructor() { }

  setString(key:string, value:string):void {
      localStorage.setItem(key,value);
  }
}
