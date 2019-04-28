import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { Sort } from '@angular/material';
import { Router } from '@angular/router';
import { GameSimple, GameContent } from 'src/app/models/game-simple';

@Component({
  selector: 'games-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class GamesListComponent implements OnInit, OnChanges {
  @Input() SimpleGamesList: GameContent;
  filteredGamesList: GameSimple[];
  sortedData: GameSimple[];
  constructor(private router: Router) {}
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
            if (!game.gameDuration) {
              game.gameDuration = '--';
            } else {
              const totalSecs = +game.gameDuration;
              const hours = totalSecs / 3600;
              const minutes = (totalSecs % 3600) / 60;
              const seconds = totalSecs % 60;
              let minSep = '0';
              let secSeo = '0';
              if (seconds > 9) {
                secSeo = '';
              }
              if (minutes > 9) {
                minSep = '';
              }
              if (hours > 1) {
                game.gameDuration =
                  Math.floor(hours) +
                  ':' +
                  minSep +
                  Math.floor(minutes) +
                  ':' +
                  secSeo +
                  seconds;
              } else {
                game.gameDuration =
                  Math.floor(minutes) + ':' + secSeo + seconds;
              }
            }
            const somedate = new Date(game.dateProcessed);
            somedate.setMinutes(-somedate.getTimezoneOffset());
            game.dateProcessed =
              somedate.toLocaleDateString() +
              ' ' +
              somedate.toLocaleTimeString();
            this.filteredGamesList.push(game);
          }
        });
      }
      // console.log(this.filteredGamesList.length)
      // console.log(this.SimpleGamesList.Content.length)
      const data = this.filteredGamesList.slice();
      this.sortedData = data;
      this.sortedData = data.sort((a, b) => {
        return compare(
          new Date(a.dateProcessed),
          new Date(b.dateProcessed),
          false
        );
      });
    }
  }

  ngOnInit() {
    if (this.SimpleGamesList) {
      this.SimpleGamesList.Content.forEach(game => {
        if (game.dateProcessed && game.numPlayers && game.settings && game.wn) {
          this.filteredGamesList.push(game);
        }
      });
    }
  }

  sortData(sort: Sort) {
    const data = this.filteredGamesList.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'numPlayers':
          return compare(a.numPlayers, b.numPlayers, isAsc);
        case 'wn':
          return compare(a.wn, b.wn, isAsc);
        case 'CoOp':
          return compare(a.settings.coOp, b.settings.coOp, isAsc);
        case 'battle':
          return compare(a.settings.coOp, b.settings.coOp, isAsc);
        case 'trading':
          return compare(a.settings.trading, b.settings.trading, isAsc);
        case 'dateProcessed':
          return compare(
            new Date(a.dateProcessed),
            new Date(b.dateProcessed),
            isAsc
          );
        default:
          return compare(
            new Date(a.dateProcessed),
            new Date(b.dateProcessed),
            isAsc
          );
      }
    });
  }

  getDurationPercent(duration: string) {
    // duration = mm:ss
    const timeTokens = duration.split(':');
    if (timeTokens.length > 2) {
      return '100%';
    } else if (timeTokens.length < 2) {
      return '0%';
    }
    const minutes = timeTokens[0];
    const percent = (100 * +minutes) / 60;
    return `${percent}%`;
  }

  showRow(game: GameSimple) {
    if (game.dateProcessed && game.numPlayers && game.settings && game.wn) {
      return true;
    }
    return false;
  }
  handleClick(matchId) {
    this.router.navigate(['/games', matchId]).then(e => {
      if (e) {
        console.log('Navigation is successful!');
      } else {
        console.log('Navigation has failed!');
      }
    });
    console.log(matchId);
  }
}

function compare(
  a: number | string | Date,
  b: number | string | Date,
  isAsc: boolean
) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
