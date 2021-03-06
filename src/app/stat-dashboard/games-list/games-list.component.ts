import { Component, OnInit, Input, OnChanges, SimpleChanges  } from '@angular/core';
import { GameSimple, GameContent } from './../../models/game-simple';
import {Sort} from '@angular/material';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit, OnChanges  {
  @Input() SimpleGamesList: GameContent;
  filteredGamesList: GameSimple[];
  sortedData: GameSimple[];
  constructor() {

  }
  ngOnChanges(changes: SimpleChanges) {
    if (!this.filteredGamesList) {
      this.filteredGamesList = [];
    }

    if (this.SimpleGamesList) {
      this.SimpleGamesList.Content.forEach(
        game => {
          if (game.dateProcessed && game.numPlayers && game.settings && game.wn) {
            const somedate = new Date(game.dateProcessed);
            somedate.setMinutes(-somedate.getTimezoneOffset());
            game.dateProcessed = somedate.toLocaleDateString() + ' ' + somedate.toLocaleTimeString();
            this.filteredGamesList.push(game);
          }
        });
    }
    const data = this.filteredGamesList.slice();
    this.sortedData = data;
    this.sortedData = data.sort((a, b) => {
        return compare(new Date(a.dateProcessed), new Date(b.dateProcessed), false);
    });
  }

  ngOnInit() {
    if (this.SimpleGamesList) {
    this.SimpleGamesList.Content.forEach(
      game => {
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
        case 'numPlayers': return compare(a.numPlayers, b.numPlayers, isAsc);
        case 'wn': return compare(a.wn, b.wn, isAsc);
        case 'CoOp': return compare(a.settings.coOp, b.settings.coOp, isAsc);
        case 'battle': return compare(a.settings.coOp, b.settings.coOp, isAsc);
        case 'trading': return compare(a.settings.trading, b.settings.trading, isAsc);
        case 'dateProcessed': return compare(new Date(a.dateProcessed), new Date(b.dateProcessed), isAsc);
        default: return compare(new Date(a.dateProcessed), new Date(b.dateProcessed), isAsc);
      }
    });
  }


  showRow(game: GameSimple) {
    if (game.dateProcessed && game.numPlayers && game.settings && game.wn) {
      return true;
    }
    return false;
  }
  handleClick(matchId)
  {
    
  }
}

function compare(a: number | string | Date, b: number | string | Date, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
