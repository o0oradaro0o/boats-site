import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { GameDetailContent, GameDetail } from 'src/app/models/game-detail';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'game-player-snapshot',
  templateUrl: './player-snapshot.component.html',
  styleUrls: ['./player-snapshot.component.scss']
})
export class PlayerSnapshotComponent implements OnInit, OnChanges {
  @Input() DetailGamesList: GameDetailContent;
  playersList: GameDetail[];
  sortedData: GameDetail[];
  northTeamData: GameDetail[];
  southTeamData: GameDetail[];

  // ── overall best-in-game stat leaders ────────────────────────────────
  bestKills = new Set<string>();
  bestDeaths = new Set<string>();
  bestLastHits = new Set<string>();
  bestHeroDmg = new Set<string>();
  bestTanked = new Set<string>();
  bestBldgDmg = new Set<string>();

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.DetailGamesList) {
      if (!this.playersList) {
        this.playersList = [];
      }

      if (this.playersList && this.DetailGamesList) {
        this.DetailGamesList.Content.forEach(player => {
          player.HeroDamage = Math.floor(player.HeroDamage);
          player.damageTanked = Math.floor(player.damageTanked);
          player.buildingDamage = Math.floor(player.buildingDamage);

          this.playersList.push(player);
        });
      }
      const data = this.playersList.slice();
      this.northTeamData = data.filter(playerData => playerData.tm === 'North');
      this.southTeamData = data.filter(playerData => playerData.tm === 'South');
      this.computeBestStats(data);
    }
  }

  private computeBestStats(allPlayers: GameDetail[]) {
    this.bestKills.clear();
    this.bestDeaths.clear();
    this.bestLastHits.clear();
    this.bestHeroDmg.clear();
    this.bestTanked.clear();
    this.bestBldgDmg.clear();

    if (!allPlayers.length) return;

    let maxKills = -Infinity;
    let minDeaths = Infinity;
    let maxLH = -Infinity;
    let maxHeroDmg = -Infinity;
    let maxTanked = -Infinity;
    let maxBldgDmg = -Infinity;

    for (const p of allPlayers) {
      if (+p.kls > maxKills) maxKills = +p.kls;
      if (+p.dth < minDeaths) minDeaths = +p.dth;
      if (+p.lh > maxLH) maxLH = +p.lh;
      if (+p.HeroDamage > maxHeroDmg) maxHeroDmg = +p.HeroDamage;
      if (+p.damageTanked > maxTanked) maxTanked = +p.damageTanked;
      if (+p.buildingDamage > maxBldgDmg) maxBldgDmg = +p.buildingDamage;
    }

    for (const p of allPlayers) {
      const id = p.playerID;
      if (+p.kls === maxKills) this.bestKills.add(id);
      if (+p.dth === minDeaths) this.bestDeaths.add(id);
      if (+p.lh === maxLH) this.bestLastHits.add(id);
      if (+p.HeroDamage === maxHeroDmg) this.bestHeroDmg.add(id);
      if (+p.damageTanked === maxTanked) this.bestTanked.add(id);
      if (+p.buildingDamage === maxBldgDmg) this.bestBldgDmg.add(id);
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
        case 'ship':
          return compare(a.shp, b.shp, isAsc);

        default:
          return compare(new Date(a.tm), new Date(b.tm), isAsc);
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
