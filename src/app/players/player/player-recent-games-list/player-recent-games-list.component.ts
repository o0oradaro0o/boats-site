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

  parseSeconds(input: number) {
    const hours = Math.floor(input / 3600);
    const minutes = Math.floor((input - hours * 3600) / 60);
    const seconds = input - hours * 3600 - minutes * 60;

    let hh = '' + hours;
    let mm = '' + minutes;
    let ss = '' + seconds;

    if (hours < 10) {
      hh = '0' + hours;
    }
    if (minutes < 10) {
      mm = '0' + minutes;
    }
    if (seconds < 10) {
      ss = '0' + seconds;
    }
    if (hours > 0) {
      return hh + ':' + mm + ':' + ss;
    } else {
      return mm + ':' + ss;
    }
  }
}
