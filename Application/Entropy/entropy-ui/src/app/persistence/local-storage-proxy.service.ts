import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

///
/// Provides strobly typed definitions of the local storage API.
///
export class LocalStorageProxyService {
  

  constructor() { }

  setString(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  removeItem(key: string) {
    return localStorage.removeItem(key);
  }

  length():number {
    return localStorage.length;
  }

  key(index:number):string {
    return localStorage.key(index);
  }

  getItem(key:string):string {
      return localStorage.getItem(key);
  }

}
