import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { GameDataService } from '../game-data.service';
import { DataGrabberService } from '../data-grabber.service';
import { ShipData } from '../models/game-data.models';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  ships: ShipData[] = [];
  totalGames: number = 0;
  weaponTypeCount: number = 12;
  uniquePlayers: number = 0;

  constructor(
    private gameData: GameDataService,
    private loader: DataGrabberService,
  ) {}

  ngOnInit() {
    this.gameData.getShips().subscribe((ships) => {
      this.ships = ships.filter((s) => s.tier > 0);
    });

    this.gameData.getItems().subscribe((items) => {
      const types = new Set(items.weapons.map((w) => w.type));
      this.weaponTypeCount = types.size;
    });

    combineLatest([this.loader.getBoatData(), this.loader.getTopPlayers()])
      .pipe(
        map(([boatData, playersData]) => {
          const records = boatData?.Content || [];
          const barrel = records.find((r) => r.item === 'Barrel');
          const totalSample = barrel?.compGames || 1;
          const totalGames = Math.round(totalSample / 2);
          const uniquePlayers = playersData?.Content?.length ?? 0;
          return { totalGames, uniquePlayers };
        }),
      )
      .subscribe(({ totalGames, uniquePlayers }) => {
        this.totalGames = totalGames;
        this.uniquePlayers = uniquePlayers;
      });
  }

  shipSlug(ship: ShipData): string {
    return (ship.dbName ?? ship.name)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  }
}
