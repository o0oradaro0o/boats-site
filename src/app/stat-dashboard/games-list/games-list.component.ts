import { Component, OnInit, Input, OnChanges, SimpleChanges  } from '@angular/core';
import { GameSimple, content } from 'src/app/GameSimple';
import {Sort} from '@angular/material';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit, OnChanges  {
  @Input() SimpleGamesList: content;
  filteredGamesList: GameSimple[];
  sortedData: GameSimple[];
  constructor() {

  }
  ngOnChanges(changes: SimpleChanges) {
    if(!this.filteredGamesList)
    {
      this.filteredGamesList=[]
    }
    if(this.SimpleGamesList)
    {
      this.SimpleGamesList.Content.forEach(game => {
        if(game.dateProcessed && game.numPlayers && game.settings && game.wn)
      {
        this.filteredGamesList.push(game)
      }
      });
    }
    const data = this.filteredGamesList.slice();
      this.sortedData = data;


    this.sortedData = data.sort((a, b) => {
        return compare(a.dateProcessed, b.dateProcessed, false);
    });
  }

  ngOnInit() {
    if(this.SimpleGamesList)
    {
    this.SimpleGamesList.Content.forEach(game => {
      if(game.dateProcessed && game.numPlayers && game.settings && game.wn)
    {
      this.filteredGamesList.push(game)
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
        case 'dateProcessed': return compare(a.dateProcessed, b.dateProcessed, isAsc);
        default: return compare(a.dateProcessed, b.dateProcessed, isAsc);
      }
    });
  }
  

  showRow(game: GameSimple)
  {
    if(game.dateProcessed && game.numPlayers && game.settings && game.wn)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}