import { Component, OnInit, Input } from '@angular/core';
import { GameDetail } from 'src/app/models/game-detail';
import { Router } from '@angular/router';
import { GameDataService } from 'src/app/game-data.service';
import { ShipData } from 'src/app/models/game-data.models';

@Component({
  selector: 'app-player-recent-games-list',
  templateUrl: './player-recent-games-list.component.html',
  styleUrls: ['./player-recent-games-list.component.scss'],
})
export class PlayerRecentGamesListComponent implements OnInit {
  private _recentGames: GameDetail[] = [];
  get recentGames() {
    return this._recentGames;
  }
  @Input() set recentGames(val: GameDetail[]) {
    this._recentGames = (val ?? []).filter((g) => !!g.shp);
  }

  private shipIconMap = new Map<string, string>();

  constructor(
    private router: Router,
    private gameData: GameDataService,
  ) {}

  ngOnInit() {
    this.gameData.getShips().subscribe((ships: ShipData[]) => {
      this.shipIconMap = this.gameData.buildShipIconMap(ships);
    });
  }

  getShipIcon(name: string): string {
    const icon = this.shipIconMap.get((name ?? '').trim().toLowerCase());
    return `/assets/boat-icons/${
      icon ??
      (name ?? '')
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '_')
    }.png`;
  }

  handleClick(matchId: number) {
    this.router.navigate(['/games', matchId]);
  }

  getDurationPercent(seconds: number) {
    return `${seconds < 3600 ? seconds / 36 : 100}%`;
  }
}
