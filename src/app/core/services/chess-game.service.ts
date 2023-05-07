import { Injectable } from '@angular/core';
import { ChessboardGrid } from "../models/chessboard-grid";
import { numberToLetter } from "../utils/string.utils";

@Injectable({
  providedIn: 'root'
})
export class ChessGameService {
  board: ChessboardGrid;

  constructor() {
    this.board = new ChessboardGrid();
  }

  public debug(): void {
    for (let r = this.board.grid.length - 1; r >= 0; r--) {
      for (let c = 0; c < this.board.grid[r].length; c++) {
        console.log(`${numberToLetter(c + 1)}${r + 1} ${this.board.grid[r][c]}`);
      }
    }
  }
}
