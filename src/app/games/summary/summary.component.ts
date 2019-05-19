import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  OnChanges
} from '@angular/core';
import { GameContent, GameSimple } from 'src/app/models/game-simple';

@Component({
  selector: 'games-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class GamesSummaryComponent implements OnInit, OnChanges {
  @Input() SimpleGamesList: GameContent;
  filteredGamesList: GameSimple[];

  coOpCount: number;
  tradingCount: number;
  coOpWins: number;
  tradingWins: number;
  battleWins: number;
  battleModeCount: number;
  totalEvenTeams: number;
  totalValidGames: number;
  gamesInLast24Hours: number;
  playersInLast24Hours: number;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.SimpleGamesList) {
      if (!this.filteredGamesList) {
        this.filteredGamesList = [];
      }
      if (this.SimpleGamesList) {
        this.SimpleGamesList.Content.forEach(game => {
          if (
            game.dateProcessed &&
            game.numPlayers &&
            game.settings &&
            game.wn
          ) {
            this.filteredGamesList.push(game);
          }
        });
      }

      this.battleModeCount = this.filteredGamesList.filter(
        game => game.settings.battle
      ).length;

      this.tradingCount = this.filteredGamesList.filter(
        game => game.settings.trading
      ).length;

      this.battleWins = this.filteredGamesList.filter(
        game => game.settings.battle && game.wn === 'South'
      ).length;

      this.tradingWins = this.filteredGamesList.filter(
        game => game.settings.trading && game.wn === 'South'
      ).length;

      this.coOpCount = this.filteredGamesList.filter(
        game => game.settings.coOp
      ).length;

      this.coOpWins = this.filteredGamesList.filter(
        game => game.settings.coOp && game.wn === 'South'
      ).length;

      // This isn't actually even teams, just even number of players
      this.totalEvenTeams = this.filteredGamesList.filter(
        game => game.numPlayers % 2 === 0 && !game.settings.coOp
      ).length;

      this.totalValidGames = this.filteredGamesList.filter(
        game =>
          game.dateProcessed && game.numPlayers && game.settings && game.wn
      ).length;

      const yesterday = new Date();
      yesterday.setHours(yesterday.getHours() - 24);

      this.gamesInLast24Hours = this.filteredGamesList.filter(
        game => new Date(game.dateProcessed) > yesterday
      ).length;

      this.playersInLast24Hours = this.filteredGamesList
        .filter(game => new Date(game.dateProcessed) > yesterday)
        .reduce((a, b) => a + b.numPlayers || 0, 0);
    }
  }

  ngOnInit() {}
}
