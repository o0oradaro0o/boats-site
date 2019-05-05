import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ItemRecordContent, ItemRecord } from 'src/app/models/player-Item-record';
import { Sort } from '@angular/material';

@Component({
  selector: 'player-boats-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class PlayerBoatListComponent implements OnInit, OnChanges {
  @Input() ItemRecordList: ItemRecordContent;
  CondencedItemRecords: ItemRecord[];
  sortedData: ItemRecord[];
  TotalSample: number;
  constructor() {}
  ngOnChanges(changes: SimpleChanges) {
    if (changes.ItemRecordList) {
      if (!this.CondencedItemRecords) {
        this.CondencedItemRecords = [];
      }
      
      if (this.ItemRecordList) {
        this.TotalSample=0;
        this.ItemRecordList.Content.forEach(Item => {
          if (Item.item && Item.compGames>0 && !Item.item.includes('Barrel')) {
            this.TotalSample=this.TotalSample+Item.compGames;
            if (this.CondencedItemRecords.length === 0) {
            this.CondencedItemRecords.push(Item);
            }
            let foundMatch = false;
            this.CondencedItemRecords.forEach(condencedItem => {

              if (condencedItem.item === Item.item) {
                condencedItem.games = condencedItem.games + Item.games;
                condencedItem.compGames = condencedItem.compGames + Item.compGames;
                condencedItem.compWins = condencedItem.compWins + Item.compWins;
                condencedItem.wins = condencedItem.wins + Item.wins;
                foundMatch = true;
              }

            });
            if (!foundMatch) {
              this.CondencedItemRecords.push(Item);
            }
          }
        });
      }
      // console.log(this.filteredGamesList.length)
      // console.log(this.SimpleGamesList.Content.length)
      const data = this.CondencedItemRecords.slice();
      this.sortedData = data;
      this.sortedData = data.sort((a, b) => {
        return compare(new Date(a.compGames), new Date(b.compGames), false);
      });
    }
  }
  ngOnInit() {}

  sortData(sort: Sort) {
    const data = this.CondencedItemRecords.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a: ItemRecord, b: ItemRecord) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return compare(a.item, b.item, isAsc);
        case 'games':
          return compare(a.compGames, b.compGames, isAsc);
        case 'winper':
          return compare(
            a.compGames > 0 ? a.compWins / a.compGames : -1,
            b.compGames > 0 ? b.compWins / b.compGames : -1,
            isAsc
          );
         default:
          return compare(a.compGames, b.compGames, isAsc);
      }
    });
  }
  getPercent(input: number) {
    // duration = mm:ss

    if (input > 3) {
      return '100%';
    }
    return `${(input * 100) / 3}%`;
  }

}

function compare(
  a: number | string | Date,
  b: number | string | Date,
  isAsc: boolean
) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
