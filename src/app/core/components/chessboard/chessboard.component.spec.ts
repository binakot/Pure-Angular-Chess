import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChessboardComponent } from '@/core/components/chessboard/chessboard.component';

describe('ChessboardComponent', () => {
  let component: ChessboardComponent;
  let fixture: ComponentFixture<ChessboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChessboardComponent]
    });
    fixture = TestBed.createComponent(ChessboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
