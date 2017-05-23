import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { MdSnackBar } from '@angular/material';

/**
 * Dashboard Component.
 * It features the tic-tac-toe game.
 */
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [GameService]
})
export class DashboardComponent implements OnInit {

  /**
   * It intitializes GameSErvice and MdSnackBar classes
   * @param gameService GameService
   * @param snackBar MdSnackBar
   */
  constructor(public gameService: GameService, public snackBar: MdSnackBar) { }

  ngOnInit() {
  }

  /**
   * If the player clicks on the cell with cellIndex.
   * If game over restarts the game, otherwise change the player.
   * @param cellIndex 
   */
  playerClick(cellIndex) {
    this.gameService.playerClick(cellIndex);

    if(this.gameService.cellSetComplete() == true) {
      this.restartGame();
      return;
    } else {
      this.changePlayer();
      return;
    }
  }

  /**
   * Changes the current player.
   */
  changePlayer() {
    var player = this.gameService.changePlayer();
    if(player == 1) {
      this.computerTurn();
    }
  }

  /**
   * This encompasses the logic of the strategy of computer bot.
   */
  computerTurn() {
    var cellIndex = this.gameService.getComputerCellIndex();
    this.gameService.playerClick(cellIndex);

    if(this.gameService.cellSetComplete() == true) {
      this.gameService.restartGame();
      return;
    } else {
      this.changePlayer();
      return;
    }
  }

  /**
   * Restarts the game.
   */
  restartGame() {
    this.gameService.restartGame();
  }

}
