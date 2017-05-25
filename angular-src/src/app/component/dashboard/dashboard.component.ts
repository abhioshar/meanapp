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
    if(this.gameService.areCellsDone() == true) {
      this.restartGame();
      return;
    }
    if(this.gameService.playerClick(cellIndex) == true) {
      return;
    } else {
      this.changePlayer();
    }  
  }

  /**
   * Changes the current player.
   */
  changePlayer() {
    var player = this.gameService.changePlayer();
    // if(this.gameService.areCellsDone() == true) {
    //   this.gameService.restartGame();
    //   return;
    // }
    if(player == 1) {
      this.computerTurn();
    }
  }

  /**
   * This encompasses the logic of the strategy of computer bot.
   */
  computerTurn() {

    if(this.gameService.areCellsDone() == true) {
      this.gameService.restartGame();
      return;
    }

    var cellIndex = this.gameService.getComputerCellIndex();
    
    this.playerClick(cellIndex);
  }

  /**
   * Restarts the game.
   */
  restartGame() {
    console.log("game restarted");
    this.gameService.restartGame();
  }

}
