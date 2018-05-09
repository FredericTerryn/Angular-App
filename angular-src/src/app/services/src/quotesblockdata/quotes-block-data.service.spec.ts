import { TestBed, inject } from '@angular/core/testing';

import { QuotesBlockDataService } from './quotes-block-data.service';

describe('QuotesBlockDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuotesBlockDataService]
    });
  });

  it('should be created', inject([QuotesBlockDataService], (service: QuotesBlockDataService) => {
    expect(service).toBeTruthy();
  }));
});
