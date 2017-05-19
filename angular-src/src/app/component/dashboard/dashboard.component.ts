import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [GameService]
})
export class DashboardComponent implements OnInit {

  constructor(public gameService: GameService, public snackBar: MdSnackBar) { }

  ngOnInit() {
  }

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

  changePlayer() {
    var player = this.gameService.changePlayer();
    if(player == 1) {
      this.computerTurn();
    }
  }

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

  restartGame() {
    this.gameService.restartGame();
  }

}
