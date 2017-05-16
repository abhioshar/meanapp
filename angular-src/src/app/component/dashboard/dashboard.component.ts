import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [GameService]
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
