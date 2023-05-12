import { ChessPieceColor } from "@/core/enums/chess-piece-color";
import { ChessPieceType } from "@/core/enums/chess-piece-type";
import { CHESSBOARD_SQUARE_EMPTY } from "@/core/constants/chessboard.constants";

export class ChessboardSquare {
  piece: ChessPieceType | null;
  color: ChessPieceColor | null;

  constructor(piece: ChessPieceType | null,
              color: ChessPieceColor | null) {
    this.piece = piece;
    this.color = color;
  }

  static buildEmpty(): ChessboardSquare {
    return new ChessboardSquare(null, null);
  }

  isEmpty(): boolean {
    return this.piece === null || this.color === null;
  }

  toString(): string {
    if (this.piece == null || this.color == null) {
      return `${CHESSBOARD_SQUARE_EMPTY}`;
    }
    return `${this.color} ${this.piece}`
  }
}
