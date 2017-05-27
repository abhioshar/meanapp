/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GameService } from './game.service';
import { MdSnackBar } from '@angular/material';
import { AuthService } from './auth.service';

describe('GameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ MdSnackBar ],
      providers: [GameService, AuthService]
    });
  });

  it('should change the player', () => {
    var mdSnackBar: MdSnackBar;
    var authService: AuthService;
    let gameService = new GameService(mdSnackBar, authService);
    gameService.turn = 1;
    expect(gameService.changePlayer()).toBe(0);
  });

  it('should ...', () => {
    var mdSnackBar: MdSnackBar;
    var authService: AuthService;
    let gameService = new GameService(mdSnackBar, authService);
    expect(gameService).toBeTruthy();
  });
});
