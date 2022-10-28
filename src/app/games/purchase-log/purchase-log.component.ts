import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { GameDetailContent } from 'src/app/models/game-detail';

@Component({
  selector: 'app-purchase-log',
  templateUrl: './purchase-log.component.html',
  styleUrls: ['./purchase-log.component.scss']
})
export class PurchaseLogComponent implements OnInit, OnChanges {
  @Input() playerDetails: GameDetailContent;

  northPlayers = [];
  southPlayers = [];

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.playerDetails && changes.playerDetails.currentValue) {
      const playerData = changes.playerDetails.currentValue.Content;
      for (const player of playerData) {
        const name = player.playerName;
        const team = player.tm;
        const playerID = player.playerID;
        // items and ships should already be sorted
        let items = player.buildOrder;
        let ships = player.boatOrder;

        items = items.map(itemData => {
          const itemName = itemData.item;
          // have to remove the item_ substring to get the right asset name
          const imageName = itemName.replace(/ /g, '_').substring(5);
          const time = itemData.time;
          const image = `/assets/items/${imageName}.png`;
          return { name: itemName, time, image };
        });

        ships = ships.map(shipData => {
          const shipName = shipData.item;
          let imageName = shipName.replace(/ /g, '_');
          imageName = imageName.replace("'", '');
          const time = shipData.time;
          const image = `/assets/boat-icons/${imageName}.png`;
          return { name: shipName, time, image };
        });

        const newPlayerData = {
          name,
          items,
          ships,
          playerID
        };

        if (team === 'North') {
          this.northPlayers.push(newPlayerData);
        } else if (team === 'South') {
          this.southPlayers.push(newPlayerData);
        }
      }
    }
  }
}
