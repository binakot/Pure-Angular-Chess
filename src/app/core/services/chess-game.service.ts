import { Injectable } from '@angular/core';
import { ChessboardGrid } from "../models/chessboard-grid";
import { numberToLetter } from "../utils/string.utils";
import * as initialChessboardState from "../../assets/static/initial-chessboard-state.json";
import { ChessboardState } from "../models/chessboard-state";

@Injectable({
  providedIn: 'root'
})
export class ChessGameService {
  grid: ChessboardGrid;

  constructor() {
    this.grid = new ChessboardGrid();
    this.grid.applyState(initialChessboardState as ChessboardState);
  }

  public debug(): void {
    for (let r = this.grid.grid.length - 1; r >= 0; r--) {
      for (let c = 0; c < this.grid.grid[r].length; c++) {
        console.log(`${numberToLetter(c + 1)}${r + 1} ${this.grid.grid[r][c]}`);
      }
    }
  }
}
