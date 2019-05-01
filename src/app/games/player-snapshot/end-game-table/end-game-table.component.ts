import { Component, Input } from '@angular/core';
import { GameDetail } from 'src/app/models/game-detail';
import { Router } from '@angular/router';

@Component({
  selector: 'app-end-game-table',
  templateUrl: './end-game-table.component.html',
  styleUrls: ['./end-game-table.component.scss']
})
export class EndGameTableComponent {
  @Input() playerData: GameDetail[];
  constructor(private router: Router) {}

  handleClick(playerID: number) {
    this.router.navigate(['/players', playerID]);
  }
}
