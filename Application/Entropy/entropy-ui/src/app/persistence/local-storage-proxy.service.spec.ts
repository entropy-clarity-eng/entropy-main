import { TestBed } from '@angular/core/testing';

import { LocalStorageProxyService } from './local-storage-proxy.service';

describe('LocalServiceProxyService', () => {
  beforeEach(() => 
  {
    TestBed.configureTestingModule({})
    localStorage.clear();
  });

  it('should be created', () => {
    const service: LocalStorageProxyService = TestBed.get(LocalStorageProxyService);
    expect(service).toBeTruthy();
  });

  it('should set a string value in local storage', () => {
    const service: LocalStorageProxyService = TestBed.get(LocalStorageProxyService);
    
    service.setString("test-key","test-value")

    expect(localStorage.getItem("test-key")).toEqual("test-value");

    
  });
});
