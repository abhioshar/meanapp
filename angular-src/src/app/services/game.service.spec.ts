/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GameService } from './game.service';
import { MdSnackBar } from '@angular/material';

describe('GameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ MdSnackBar ],
      providers: [GameService]
    });
  });

  it('should change the player', () => {
    var mdSnackBar: MdSnackBar;
    let gameService = new GameService(mdSnackBar);
    gameService.turn = 1;
    expect(gameService.changePlayer()).toBe(0);
  });

  it('should ...', () => {
    var mdSnackBar: MdSnackBar;
    let gameService = new GameService(mdSnackBar);
    expect(gameService).toBeTruthy();
  });
});
