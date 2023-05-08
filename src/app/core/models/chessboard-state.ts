export type ChessboardState = {
  white: ChessboardStateColor;
  black: ChessboardStateColor;
}

export type ChessboardStateColor = {
  king: ChessboardStatePiece;
  queen: ChessboardStatePiece;
  rook: ChessboardStatePiece;
  knight: ChessboardStatePiece;
  bishop: ChessboardStatePiece;
  pawn: ChessboardStatePiece;
}

export type ChessboardStatePiece = Array<string>
