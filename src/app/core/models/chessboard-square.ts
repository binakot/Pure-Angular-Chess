import { ChessPieceColor } from "../enums/chess-piece-color";
import { ChessPieceType } from "../enums/chess-piece-type";
import { CHESSBOARD_SQUARE_EMPTY } from "../constants/chessboard.constants";

export class ChessboardSquare {
  color: ChessPieceColor;
  piece: ChessPieceType | null;

  constructor(color: ChessPieceColor, piece: ChessPieceType | null) {
    this.color = color;
    this.piece = piece;
  }

  toString(): string {
    return `SQUARE: ${this.color} ${this.piece ?? CHESSBOARD_SQUARE_EMPTY}`
  }
}
