import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ItemRecordContent, ItemRecord } from 'src/app/models/player-item-record';
import { Sort } from '@angular/material';

@Component({
  selector: 'boats-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnChanges {
  @Input() boatRecordList: ItemRecordContent;
  CondencedBoatRecords: ItemRecord[];
  sortedData: ItemRecord[];
  TotalSample: number;
  constructor() {}
  ngOnChanges(changes: SimpleChanges) {
    if (changes.boatRecordList) {
      if (!this.CondencedBoatRecords) {
        this.CondencedBoatRecords = [];
      }

      if (this.boatRecordList) {
        this.boatRecordList.Content.forEach(boat => {
          if(boat.item) {
            if (boat.item==="Barrel") 
            {
              this.TotalSample  =boat.compGames;
              boat.compWins=boat.compGames/2
            }
            this.CondencedBoatRecords.push(boat);
            

          }
        });
      }
      // console.log(this.filteredGamesList.length)
      // console.log(this.SimpleGamesList.Content.length)
      const data = this.CondencedBoatRecords.slice();
      this.sortedData = data;
      this.sortedData = data.sort((a, b) => {
        return compare(new Date(a.compGames), new Date(b.compGames), false);
      });
    }
  }
  ngOnInit() {}

  sortData(sort: Sort) {
    const data = this.CondencedBoatRecords.slice();
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
