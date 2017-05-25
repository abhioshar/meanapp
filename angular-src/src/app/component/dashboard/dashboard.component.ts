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
    console.log(this.gameService.cells);
    this.gameService.playerClick(cellIndex);
  }
}
