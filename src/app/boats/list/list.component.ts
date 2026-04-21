import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import {
  ItemRecordContent,
  ItemRecord,
} from 'src/app/models/player-item-record';
import { Sort } from '@angular/material/sort';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { GameDataService } from '../../game-data.service';
import { ShipData } from '../../models/game-data.models';

export interface TierGroup {
  tier: number;
  label: string;
  sublabel: string;
  ships: EnrichedRecord[];
}

export interface EnrichedRecord {
  record: ItemRecord;
  shipData: ShipData | null;
}

function getPriceBracket(ship: ShipData): {
  key: number;
  label: string;
  sublabel: string;
} {
  const price = ship.price ?? 0;
  if (price === 0) return { key: 0, label: 'Starter', sublabel: 'Free' };
  if (price === 1000) return { key: 1, label: '1,000g', sublabel: 'Tier 1' };
  if (price === 3000) return { key: 2, label: '3,000g', sublabel: 'Tier 2' };
  if (price === 6000) return { key: 3, label: '6,000g', sublabel: 'Tier 2' };
  if (price === 12000) return { key: 4, label: '12,000g', sublabel: 'Tier 3' };
  return { key: 5, label: 'Traders', sublabel: 'Special' };
}

@Component({
  selector: 'boats-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, OnChanges, OnDestroy {
  @Input() boatRecordList: ItemRecordContent;

  tierGroups: TierGroup[] = [];
  TotalSample = 1;
  isSmallScreen: boolean;
  sortField: keyof ItemRecord | 'winRate' = 'compGames';
  sortDir: 'asc' | 'desc' = 'desc';

  private ships: ShipData[] = [];
  private condensed: ItemRecord[] = [];
  private destroy$ = new Subject<void>();

  constructor(
    private breakpointObserver: BreakpointObserver,
    private gameDataService: GameDataService,
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.boatRecordList && this.boatRecordList) {
      this.condensed = [];
      this.boatRecordList.Content.forEach((boat) => {
        if (!boat.item) return;
        if (boat.item === 'Barrel') {
          this.TotalSample = boat.compGames;
          boat.compWins = boat.compGames / 2;
        }
        this.condensed.push(boat);
      });
      this.buildGroups();
    }
  }

  ngOnInit() {
    this.isSmallScreen =
      this.breakpointObserver.isMatched('(max-width: 599px)');
    this.breakpointObserver
      .observe(['(min-width: 500px)'])
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.isSmallScreen =
          this.breakpointObserver.isMatched('(max-width: 599px)');
      });

    this.gameDataService
      .getShips()
      .pipe(takeUntil(this.destroy$))
      .subscribe((ships) => {
        this.ships = ships;
        this.buildGroups();
      });
  }

  private buildGroups() {
    if (!this.condensed.length) return;

    const sortedRecords = [...this.condensed].sort((a, b) => {
      const aWin = a.compGames > 0 ? a.compWins / a.compGames : 0;
      const bWin = b.compGames > 0 ? b.compWins / b.compGames : 0;
      return bWin - aWin;
    });

    const bracketMap = new Map<
      number,
      { label: string; sublabel: string; ships: EnrichedRecord[] }
    >();
    for (const record of sortedRecords) {
      const itemName = record.item?.trim().toLowerCase();
      const shipData =
        this.ships.find(
          (s) => (s.dbName ?? s.name).trim().toLowerCase() === itemName,
        ) ?? null;
      const bracket = shipData
        ? getPriceBracket(shipData)
        : { key: 99, label: 'Other', sublabel: '' };
      if (!bracketMap.has(bracket.key)) {
        bracketMap.set(bracket.key, {
          label: bracket.label,
          sublabel: bracket.sublabel,
          ships: [],
        });
      }
      bracketMap.get(bracket.key).ships.push({ record, shipData });
    }

    this.tierGroups = Array.from(bracketMap.entries())
      .sort(([a], [b]) => a - b)
      .map(([tier, { label, sublabel, ships }]) => ({
        tier,
        label,
        sublabel,
        ships,
      }));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  sortData(sort: Sort) {
    this.sortField = sort.active as any;
    this.sortDir = (sort.direction as 'asc' | 'desc') || 'desc';
    this.buildGroups();
  }

  getPercent(input: number): string {
    return `${input * 100}%`;
  }
}

function compare(
  a: number | string | Date,
  b: number | string | Date,
  isAsc: boolean,
) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
