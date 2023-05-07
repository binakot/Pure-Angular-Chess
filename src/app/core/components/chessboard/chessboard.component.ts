import { Component, OnInit } from '@angular/core';
import { ChessGameService } from "../../services/chess-game.service";

@Component({
  selector: 'app-chessboard',
  templateUrl: './chessboard.component.html',
  styleUrls: ['./chessboard.component.scss']
})
export class ChessboardComponent implements OnInit {

  constructor(private chessGameService: ChessGameService) {
  }

  ngOnInit(): void {
    this.render();
  }

  private render(): void {
    this.chessGameService.debug(); // TODO Render!
  }
}
