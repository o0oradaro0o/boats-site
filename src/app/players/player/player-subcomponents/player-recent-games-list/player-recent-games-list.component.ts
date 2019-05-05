import { Component, OnInit, Input } from '@angular/core';
import { GameDetail } from 'src/app/models/game-detail';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-recent-games-list',
  templateUrl: './player-recent-games-list.component.html',
  styleUrls: ['./player-recent-games-list.component.scss']
})
export class PlayerRecentGamesListComponent implements OnInit {
  @Input() recentGames: GameDetail[];

  constructor(private router: Router) {}

  ngOnInit() {}

  handleClick(matchId: number) {
    this.router.navigate(['/games', matchId]);
  }

  getDurationPercent(seconds: number) {
    return `${seconds < 3600 ? seconds / 36 : 100}%`;
  }
}
