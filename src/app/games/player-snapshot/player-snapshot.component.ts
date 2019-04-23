import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { GameDetailContent, GameDetail } from 'src/app/models/game-detail';
import { Sort } from '@angular/material';

@Component({
  selector: 'game-player-snapshot',
  templateUrl: './player-snapshot.component.html',
  styleUrls: ['./player-snapshot.component.scss']
})
export class PlayerSnapshotComponent implements OnInit {
  @Input() DetailGamesList: GameDetailContent;
  playersList: GameDetail[];
  sortedData: GameDetail[];
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.DetailGamesList) {


      if (!this.playersList) {
        this.playersList = [];
      }
      
      if (this.playersList) {
        this.DetailGamesList.Content.forEach(player => {
          player.HeroDamage=Math.floor(player.HeroDamage)
          player.damageTanked=Math.floor(player.damageTanked)
          player.buildingDamage=Math.floor(player.buildingDamage)
          
          this.playersList.push(player);
        });
      }
      console.log(this.playersList.length)
      console.log(this.DetailGamesList.Content.length)
      const data = this.playersList.slice();
      this.sortedData = data;
      this.sortedData = data.sort((a, b) => {
        return compare(
          a.tm,
          b.tm,
          false
        );
      });
    }
  }

  sortData(sort: Sort) {
    const data = this.playersList.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'playerName':
          return compare(a.playerName, b.playerName, isAsc);
        case 'wn':
          return compare(a.wn, b.wn, isAsc);
        case 'level':
          return compare(a.lvl, b.lvl, isAsc);
        case 'kills':
          return compare(a.kls, b.kls, isAsc);
        case 'deaths':
          return compare(a.dth, b.dth, isAsc);
        case 'lasthits':
          return compare(a.lh, b.lh, isAsc);
        case 'herodamage':
          return compare(a.HeroDamage, b.HeroDamage, isAsc);
        case 'damageTanked':
          return compare(a.damageTanked, b.damageTanked, isAsc);
        case 'damageTanked':
          return compare(a.damageTanked, b.damageTanked, isAsc);
        case 'ship':
          return compare(a.shp, b.shp, isAsc);
          
        default:
          return compare(
            new Date(a.tm),
            new Date(b.tm),
            isAsc
          );
      }
    });
  }
}

function compare(
  a: number | string | Date,
  b: number | string | Date,
  isAsc: boolean
) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
