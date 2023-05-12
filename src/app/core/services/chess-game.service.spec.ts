import { TestBed } from '@angular/core/testing';

import { ChessGameService } from '@/core/services/chess-game.service';

describe('ChessGameService', () => {
  let service: ChessGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChessGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
