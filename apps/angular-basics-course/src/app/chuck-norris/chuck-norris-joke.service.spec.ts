import { TestBed } from '@angular/core/testing';

import { ChuckNorrisJokeService } from './chuck-norris-joke.service';

describe('ChuckNorrisJokeService', () => {
  let service: ChuckNorrisJokeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChuckNorrisJokeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
