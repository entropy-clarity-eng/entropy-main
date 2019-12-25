import { TestBed } from '@angular/core/testing';

import { ThoughtOfflinePersistenceService } from './thought-offline-persistence.service';

describe('ThoughtOfflinePersistenceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThoughtOfflinePersistenceService = TestBed.get(ThoughtOfflinePersistenceService);
    expect(service).toBeTruthy();
  });
});
