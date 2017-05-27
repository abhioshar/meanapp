import { Injectable } from '@angular/core';
import { Cell } from '../helper/cell';
import { Player } from '../helper/player';
import { MdSnackBar } from '@angular/material';
import { AuthService } from './auth.service';

@Injectable()
export class GameService {
  user: any = null;
  players = [];
  turn: number = 0;
  
  cells = [];
  freeCells: number = 9;

  constructor(public snackBar: MdSnackBar, public authService: AuthService) { 
    this.initializeCells();
    this.intializePlayers();
  }

  getUser() {
    if(this.user != null) return;
    this.authService.getProfile().subscribe(data => this.user = data.user);
  }

  initializeCells() {
    this.cells = [];
    this.freeCells = 9;
    for(var i = 1; i <= 9; ++i) {
      var cell = new Cell();
      cell.empty = true;
      cell.value = "";
      cell.symbol = "";

      this.cells.push(cell);
    }
  }

  intializePlayers() {
    this.players = [];
    
    var userPlayer = new Player();
    var computerPlayer = new Player();

    userPlayer.isComputer = false;
    computerPlayer.isComputer = true;

    this.players.push(userPlayer);
    this.players.push(computerPlayer);
  }

  restartGame() {
    console.log("gservice game restarted");
    this.turn = 0;
    this.initializeCells();
    this.intializePlayers();
  }

  playerClick(cellIndex) {
    this.getUser();
    if(this.cells[cellIndex].empty == false) {
      return;
    }

    this.cells[cellIndex].empty = false;
    this.freeCells--;

    if(this.turn == 0) {
      this.cells[cellIndex].setValue("tick");
    } else {
      this.cells[cellIndex].setValue("cross");
    }

    if(this.cellSetComplete() == true) {
      this.snackBar.open("Winner is", this.turn == 1 ? "computer" : this.user.username, {
        duration: 5000,
      });
      this.restartGame();
      return;
    }

    if(this.areCellsDone() == true) {
      this.snackBar.open("Game", "Drawn!", {
        duration: 5000,
      });
      this.restartGame();
      return;
    }

    this.changePlayer();
  }

  cellSetComplete() {
    for(var i = 0; i < 7; i += 3) {
      if(this.cellSetDone(i, i+1, i+2)) {
        return true;
      }
    }

    for(var i = 0; i < 3; i++) {
      if(this.cellSetDone(i, i+3, i+6)) {
        return true;
      }
    }

    if(this.cellSetDone(0, 4, 8) || this.cellSetDone(2, 4, 6)) {
      return true;
    }

    return false;
  }

  cellSetDone(ind1, ind2, ind3) {
    var cell1 = this.cells[ind1];
    var cell2 = this.cells[ind2];
    var cell3 = this.cells[ind3];
    
    if(cell1.empty == false && cell2.empty == false && cell3.empty == false) {
      if((cell1.value == cell2.value && cell2.value == cell3.value)) {
        return true;
      }
    }
    return false;
  }

  changePlayer() {
    this.turn = 1 - this.turn;
    if(this.turn == 1) {
      this.computerMove();
    }
    return this.turn;
  }

  computerMove() {
    var cellIndex = this.getComputerCellIndex();
    this.playerClick(cellIndex);
  }

  getComputerCellIndex() {
    if(this.freeCells <= 2) {
      for(var i = 0; i < 9; ++i) {
        if(this.cells[i].empty == true) {
          return i;
        }
      }
    }
    var cellIndex = Math.floor(Math.random() * 9);
    while(this.cells[cellIndex].empty == false) {
      cellIndex = Math.floor(Math.random() * 9);
    }
    return cellIndex;
  }

  areCellsDone() {
    return (this.freeCells == 0 ? true : false);
  }
}


