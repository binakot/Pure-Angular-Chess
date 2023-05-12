import { ChessboardSquare } from "@/core/models/chessboard-square";
import { CHESSBOARD_COLUMNS, CHESSBOARD_ROWS } from "@/core/constants/chessboard.constants";
import { ChessboardState } from "@/core/models/chessboard-state";
import { letterToNumber } from "@/core/utils/string.utils";
import { ChessPieceType } from "@/core/enums/chess-piece-type";
import { ChessPieceColor } from "@/core/enums/chess-piece-color";

export class ChessboardGrid {
  grid: ChessboardSquare[][];

  constructor() {
    this.grid = [];
    for (let r = 0; r < CHESSBOARD_ROWS; r++) {
      this.grid[r] = [];
      for (let c = 0; c < CHESSBOARD_COLUMNS; c++) {
        this.grid[r][c] = ChessboardSquare.buildEmpty();
      }
    }
  }

  applyState(state: ChessboardState): void {
    // WHITE
    const whiteKingPosition = this.positionToCoordinates(state.white.king[0]);
    this.grid[whiteKingPosition.row][whiteKingPosition.column] = new ChessboardSquare(ChessPieceType.KING, ChessPieceColor.WHITE);

    const whiteQueenPosition = this.positionToCoordinates(state.white.queen[0]);
    this.grid[whiteQueenPosition.row][whiteQueenPosition.column] = new ChessboardSquare(ChessPieceType.QUEEN, ChessPieceColor.WHITE);

    const leftWhiteRookPosition = this.positionToCoordinates(state.white.rook[0]);
    this.grid[leftWhiteRookPosition.row][leftWhiteRookPosition.column] = new ChessboardSquare(ChessPieceType.ROOK, ChessPieceColor.WHITE);
    const rightWhiteRookPosition = this.positionToCoordinates(state.white.rook[1]);
    this.grid[rightWhiteRookPosition.row][rightWhiteRookPosition.column] = new ChessboardSquare(ChessPieceType.ROOK, ChessPieceColor.WHITE);

    const leftWhiteKnightPosition = this.positionToCoordinates(state.white.knight[0]);
    this.grid[leftWhiteKnightPosition.row][leftWhiteKnightPosition.column] = new ChessboardSquare(ChessPieceType.KNIGHT, ChessPieceColor.WHITE);
    const rightWhiteKnightPosition = this.positionToCoordinates(state.white.knight[1]);
    this.grid[rightWhiteKnightPosition.row][rightWhiteKnightPosition.column] = new ChessboardSquare(ChessPieceType.KNIGHT, ChessPieceColor.WHITE);

    const leftWhiteBishopPosition = this.positionToCoordinates(state.white.bishop[0]);
    this.grid[leftWhiteBishopPosition.row][leftWhiteBishopPosition.column] = new ChessboardSquare(ChessPieceType.BISHOP, ChessPieceColor.WHITE);
    const rightWhiteBishopPosition = this.positionToCoordinates(state.white.bishop[1]);
    this.grid[rightWhiteBishopPosition.row][rightWhiteBishopPosition.column] = new ChessboardSquare(ChessPieceType.BISHOP, ChessPieceColor.WHITE);

    for (let i = 0; i < state.white.pawn.length; i++) {
      const pawnPosition = this.positionToCoordinates(state.white.pawn[i]);
      this.grid[pawnPosition.row][pawnPosition.column] = new ChessboardSquare(ChessPieceType.PAWN, ChessPieceColor.WHITE);
    }

    // BLACK
    const blackKingPosition = this.positionToCoordinates(state.black.king[0]);
    this.grid[blackKingPosition.row][blackKingPosition.column] = new ChessboardSquare(ChessPieceType.KING, ChessPieceColor.BLACK);

    const blackQueenPosition = this.positionToCoordinates(state.black.queen[0]);
    this.grid[blackQueenPosition.row][blackQueenPosition.column] = new ChessboardSquare(ChessPieceType.QUEEN, ChessPieceColor.BLACK);

    const leftBlackRookPosition = this.positionToCoordinates(state.black.rook[0]);
    this.grid[leftBlackRookPosition.row][leftBlackRookPosition.column] = new ChessboardSquare(ChessPieceType.ROOK, ChessPieceColor.BLACK);
    const rightBlackRookPosition = this.positionToCoordinates(state.black.rook[1]);
    this.grid[rightBlackRookPosition.row][rightBlackRookPosition.column] = new ChessboardSquare(ChessPieceType.ROOK, ChessPieceColor.BLACK);

    const leftBlackKnightPosition = this.positionToCoordinates(state.black.knight[0]);
    this.grid[leftBlackKnightPosition.row][leftBlackKnightPosition.column] = new ChessboardSquare(ChessPieceType.KNIGHT, ChessPieceColor.BLACK);
    const rightBlackKnightPosition = this.positionToCoordinates(state.black.knight[1]);
    this.grid[rightBlackKnightPosition.row][rightBlackKnightPosition.column] = new ChessboardSquare(ChessPieceType.KNIGHT, ChessPieceColor.BLACK);

    const leftBlackBishopPosition = this.positionToCoordinates(state.black.bishop[0]);
    this.grid[leftBlackBishopPosition.row][leftBlackBishopPosition.column] = new ChessboardSquare(ChessPieceType.BISHOP, ChessPieceColor.BLACK);
    const rightBlackBishopPosition = this.positionToCoordinates(state.black.bishop[1]);
    this.grid[rightBlackBishopPosition.row][rightBlackBishopPosition.column] = new ChessboardSquare(ChessPieceType.BISHOP, ChessPieceColor.BLACK);

    for (let i = 0; i < state.black.pawn.length; i++) {
      const pawnPosition = this.positionToCoordinates(state.black.pawn[i]);
      this.grid[pawnPosition.row][pawnPosition.column] = new ChessboardSquare(ChessPieceType.PAWN, ChessPieceColor.BLACK);
    }
  }

  private positionToCoordinates(pos: string): { row: number, column: number } {
    return {
      row: parseInt(pos[1]) - 1,
      column: letterToNumber(pos[0]) - 1
    }
  }
}
