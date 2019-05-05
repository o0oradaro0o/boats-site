import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ItemRecordContent, ItemRecord } from 'src/app/models/player-item-record';
import { Sort } from '@angular/material';

@Component({
  selector: 'items-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnChanges {
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
      this.TotalSample = 0;
      if (this.ItemRecordList) {
        this.ItemRecordList.Content.forEach(item => {
          if(item.item && !item.item.includes('lorne') && !item.item.includes('caulk') && !item.item.includes('combo')) {
            this.CondencedItemRecords.push(item);
            this.TotalSample = this.TotalSample + item.compGames;
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

    return `${(input * 100)}%`;
  }

}

function compare(
  a: number | string | Date,
  b: number | string | Date,
  isAsc: boolean
) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
