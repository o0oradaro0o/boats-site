import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { GameDetailContent } from 'src/app/models/game-detail';
import { GameDataService } from 'src/app/game-data.service';
import { ShipData } from 'src/app/models/game-data.models';

@Component({
  selector: 'app-purchase-log',
  templateUrl: './purchase-log.component.html',
  styleUrls: ['./purchase-log.component.scss'],
})
export class PurchaseLogComponent implements OnInit, OnChanges {
  @Input() playerDetails: GameDetailContent;

  northPlayers = [];
  southPlayers = [];
  private shipIconMap = new Map<string, string>();
  private iconsLoaded = false;

  constructor(private gameData: GameDataService) {}

  ngOnInit() {
    this.gameData.getShips().subscribe((ships: ShipData[]) => {
      ships.forEach((s) =>
        this.shipIconMap.set(s.name.trim().toLowerCase(), s.icon),
      );
      this.iconsLoaded = true;
      if (this.playerDetails) {
        this.buildPlayers(this.playerDetails);
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.playerDetails && changes.playerDetails.currentValue) {
      this.northPlayers = [];
      this.southPlayers = [];
      if (this.iconsLoaded) {
        this.buildPlayers(changes.playerDetails.currentValue);
      }
    }
  }

  private getShipIcon(name: string): string {
    const icon = this.shipIconMap.get((name ?? '').trim().toLowerCase());
    return `/assets/boat-icons/${
      icon ??
      (name ?? '')
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '_')
    }.png`;
  }

  private buildPlayers(details: GameDetailContent) {
    for (const player of details.Content) {
      const name = player.playerName;
      const team = player.tm;
      const playerID = player.playerID;

      const items = (player.buildOrder ?? []).map((itemData) => {
        const itemName = String(itemData.item);
        const imageName = itemName.replace(/ /g, '_').substring(5);
        return {
          name: itemName,
          time: itemData.time,
          image: `/assets/items/${imageName}.png`,
        };
      });

      const ships = (player.boatOrder ?? []).map((shipData) => {
        return {
          name: String(shipData.item),
          time: shipData.time,
          image: this.getShipIcon(String(shipData.item)),
        };
      });

      const newPlayerData = { name, items, ships, playerID };
      if (team === 'North') {
        this.northPlayers.push(newPlayerData);
      } else if (team === 'South') {
        this.southPlayers.push(newPlayerData);
      }
    }
  }
}
