import { TestBed } from '@angular/core/testing';

import { ThoughtApiPersistenceService } from './thought-api-persistence.service';

describe('ThoughtApiPersistenceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThoughtApiPersistenceService = TestBed.get(ThoughtApiPersistenceService);
    expect(service).toBeTruthy();
  });
});
