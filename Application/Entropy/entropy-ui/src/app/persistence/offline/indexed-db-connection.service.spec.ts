import { TestBed } from '@angular/core/testing';

import { IndexedDbConnectionService } from './indexed-db-connection.service';

describe('IndexedDbConnectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IndexedDbConnectionService = TestBed.get(IndexedDbConnectionService);
    expect(service).toBeTruthy();
  });
});
