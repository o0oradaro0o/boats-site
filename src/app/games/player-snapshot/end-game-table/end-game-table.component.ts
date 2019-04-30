import { Component, Input } from '@angular/core';
import { GameDetail } from 'src/app/models/game-detail';

@Component({
  selector: 'app-end-game-table',
  templateUrl: './end-game-table.component.html',
  styleUrls: ['./end-game-table.component.scss']
})
export class EndGameTableComponent {
  @Input() playerData: GameDetail[];
  constructor() {}
}
