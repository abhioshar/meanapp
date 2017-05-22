import { Injectable } from '@angular/core';
import { Cell } from '../helper/cell';
import { Player } from '../helper/player';
import { MdSnackBar } from '@angular/material';

@Injectable()
export class GameService {

  players = [];
  turn: number = 0;
  
  cells = [];
  freeCells = 9;

  constructor(public snackBar: MdSnackBar) { 
    this.initializeCells();
    this.intializePlayers();
  }

  initializeCells() {
    this.cells = [];
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
    this.initializeCells();
    this.intializePlayers();
  }

  playerClick(cellIndex) {
    if(this.turn == 0) {
      this.cells[cellIndex].setValue("tick");
    } else {
      this.cells[cellIndex].setValue("cross");
    }
    this.cells[cellIndex].empty = false;
  }

  changePlayer() {
    this.turn = 1 - this.turn;
    return this.turn;
  }

  cellSetComplete() {
    if(this.cellSetCompleteHelper() == true) {
      this.players[this.turn] += 1;
      this.snackBar.open("Winner", "Player " + (this.turn == 1 ? "computer" : "user"), {
        duration: 5000,
      });
      return true;
    } else {
      return false;
    }
  }

  cellSetCompleteHelper() {
    for(var i = 0; i < 3; i += 3) {
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
    console.log(ind1 + ' ' + cell1.empty + '. ' +  ind2 + cell2.empty + '. ' + ind3 + ' ' + cell3.empty);
    if(cell1.empty == false && cell2.empty == false && cell3.empty == false) {
      if((cell1.value == cell2.value && cell2.value == cell3.value)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  getComputerCellIndex() {
    var cellIndex = Math.floor(Math.random() * 9);
    while(this.cells[cellIndex].empty == false) {
      cellIndex = Math.floor(Math.random() * 9);
    }
    return cellIndex;
  }
}


