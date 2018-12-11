import { TestBed } from '@angular/core/testing';

import { SearchKeyService } from './search-key.service';

describe('SearchKeyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchKeyService = TestBed.get(SearchKeyService);
    expect(service).toBeTruthy();
  });
});
