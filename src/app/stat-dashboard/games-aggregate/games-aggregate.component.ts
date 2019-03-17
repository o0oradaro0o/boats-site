import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { GameContent, GameSimple } from 'src/app/models/game-simple';

@Component({
  selector: 'app-games-aggregate',
  templateUrl: './games-aggregate.component.html',
  styleUrls: ['./games-aggregate.component.scss']
})
export class GamesAggregateComponent implements OnInit, OnChanges {
  @Input() SimpleGamesList: GameContent;

  constructor() { }
  coOpCount = 0;
  tradingCount = 0;
  southWins = 0;
  coOpWins = 0;
  battleModeCount = 0;
  totalEvenTeams = 0;
  totalValidGames = 0;
  gamesInLast24Hours = 0;
  playersInLast24Hours = 0;

ngOnChanges(changes: SimpleChanges) {
    if (changes.SimpleGamesList) {
      this.coOpCount = 0;
      this.tradingCount = 0;
      this.southWins = 0;
      this.coOpWins = 0;
      this.battleModeCount = 0;
      this.totalEvenTeams = 0;
      this.totalValidGames = 0;
      this.gamesInLast24Hours = 0;
      this.playersInLast24Hours = 0;
      this.SimpleGamesList.Content.forEach(game => {
        const yesterday = new Date();
        yesterday.setHours(yesterday.getHours() - 24);
        if (new Date(game.dateProcessed) > yesterday) {
          this.gamesInLast24Hours++;
          if (game.numPlayers) {
            this.playersInLast24Hours += game.numPlayers;
          }
        }
        if (game.dateProcessed && game.numPlayers && game.settings && game.wn) {
         this.totalValidGames++;
         const SouthWon = game.wn === 'South';
         if (game.settings.coOp) {
          this.coOpCount++;
          if (SouthWon) {
            this.coOpWins++;
          }
         } else {
            if (game.numPlayers % 2 === 0) {
              this.totalEvenTeams++;
              if (SouthWon) {
                this.southWins++;
              }
            }
         }
         if (game.settings.battle) {
          this.battleModeCount++;
         }
         if (game.settings.trading) {
          this.tradingCount++;
         }
        }
      });
    }
  }
  truncateDecimals(dec, digits) {
    const multiplier = Math.pow(10, digits);
    const adjustedNum = dec * multiplier;
    const truncatedNum = Math[adjustedNum < 0 ? 'ceil' : 'floor'](adjustedNum);

    return truncatedNum / multiplier;
}
  ngOnInit() {
  }

}
