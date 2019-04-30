import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { Sort } from '@angular/material';
import { Router } from '@angular/router';
import { PlayerSimple, PlayerSimpleContent } from 'src/app/models/player-simple';

@Component({
  selector: 'players-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() SimplePlayersList: PlayerSimpleContent;
  filteredPlayersList: PlayerSimple[];
  sortedData: PlayerSimple[];
  constructor(private router: Router) {}
  ngOnChanges(changes: SimpleChanges) {
    if (changes.SimplePlayersList) {
      if (!this.filteredPlayersList) {
        this.filteredPlayersList = [];
      }

      if (this.SimplePlayersList) {
        this.SimplePlayersList.Content.forEach(player => {
            this.filteredPlayersList.push(player);
        });
      }
      // console.log(this.filteredGamesList.length)
      // console.log(this.SimpleGamesList.Content.length)
      const data = this.filteredPlayersList.slice();
      this.sortedData = data;
      this.sortedData = data.sort((a, b) => {
        return compare(
          new Date(a.games),
          new Date(b.games),
          false
        );
      });
    }
  }
  ngOnInit() {
  }
  
  sortData(sort: Sort) {
    const data = this.filteredPlayersList.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a:PlayerSimple, b:PlayerSimple) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return compare(a.playerName, b.playerName, isAsc);
        case 'games':
          return compare(a.games, b.games, isAsc);
        case 'winper':
        return compare(a.compWins/a.compGames, b.compWins/b.compGames, isAsc);
        case 'KD':
        return compare(a.kills/a.deaths, b.kills/b.deaths, isAsc);
        case 'lastHits':
        return compare(a.lastHits/a.games, b.lastHits/b.games, isAsc);
        case 'RecentGame':
          return compare(
            new Date(a.lastGame),
            new Date(b.lastGame),
            isAsc
          );
        default:
          return compare(a.games, b.games, isAsc);
      }
    });
  }
  getKDPercent(kd: number) {
    // duration = mm:ss
    
    if (kd > 3) {
      return '100%';
    } 
    
    return `${kd*100/3}%`;
  }
}


function compare(
  a: number | string | Date,
  b: number | string | Date,
  isAsc: boolean
) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
