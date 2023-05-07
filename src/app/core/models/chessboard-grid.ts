import { ChessboardSquare } from "./chessboard-square";
import { CHESSBOARD_COLUMNS, CHESSBOARD_ROWS } from "../constants/chessboard.constants";
import { ChessPieceType } from "../enums/chess-piece-type";
import { ChessPieceColor } from "../enums/chess-piece-color";

export class ChessboardGrid {
  grid: ChessboardSquare[][];

  constructor() {
    this.grid = [];
    for (let r = 0; r < CHESSBOARD_ROWS; r++) {
      this.grid[r] = [];
      for (let c = 0; c < CHESSBOARD_COLUMNS; c++) {
        this.grid[r][c] = new ChessboardSquare(ChessPieceColor.BLACK, ChessPieceType.PAWN); // TODO Init from JSON file!
      }
    }
  }
}
