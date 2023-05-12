import { Component } from '@angular/core';
import { ChessGameService } from "@/core/services/chess-game.service";

@Component({
  selector: 'app-chessboard',
  templateUrl: './chessboard.component.html',
  styleUrls: ['./chessboard.component.scss']
})
export class ChessboardComponent {

  constructor(public chessGameService: ChessGameService) {
  }
}
