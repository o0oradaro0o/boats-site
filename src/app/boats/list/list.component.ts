import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import {
  ItemRecordContent,
  ItemRecord
} from 'src/app/models/player-item-record';
import { Sort } from '@angular/material';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'boats-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnChanges {
  @Input() boatRecordList: ItemRecordContent;
  CondensedBoatRecords: ItemRecord[];
  sortedData: ItemRecord[];
  TotalSample: number;
  isSmallScreen: boolean;

  constructor(private breakpointObserver: BreakpointObserver) {}
  ngOnChanges(changes: SimpleChanges) {
    if (changes.boatRecordList) {
      if (!this.CondensedBoatRecords) {
        this.CondensedBoatRecords = [];
      }

      if (this.boatRecordList) {
        this.boatRecordList.Content.forEach(boat => {
          if (boat.item) {
            if (boat.item === 'Barrel') {
              this.TotalSample = boat.compGames;
              boat.compWins = boat.compGames / 2;
            }
            this.CondensedBoatRecords.push(boat);
          }
        });
      }
      // console.log(this.filteredGamesList.length)
      // console.log(this.SimpleGamesList.Content.length)
      const data = this.CondensedBoatRecords.slice();
      this.sortedData = data;
      this.sortedData = data.sort((a, b) => {
        return compare(new Date(a.compGames), new Date(b.compGames), false);
      });
    }
  }

  ngOnInit() {
    this.isSmallScreen = this.breakpointObserver.isMatched(
      '(max-width: 599px)'
    );

    this.breakpointObserver
      .observe(['(min-width: 500px)'])
      .subscribe(result => {
        this.isSmallScreen = this.breakpointObserver.isMatched(
          '(max-width: 599px)'
        );
      });
  }

  sortData(sort: Sort) {
    const data = this.CondensedBoatRecords.slice();
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

    return `${input * 100}%`;
  }
}

function compare(
  a: number | string | Date,
  b: number | string | Date,
  isAsc: boolean
) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
