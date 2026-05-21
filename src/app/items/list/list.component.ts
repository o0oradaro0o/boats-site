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
import { GameDataService, LocalizationMap } from '../../game-data.service';
import {
  WeaponData,
  HullData,
  ItemsJson,
} from '../../models/game-data.models';

const WEAPON_TYPES = [
  'fire',
  'ice',
  'poison',
  'plasma',
  'wind',
  'coal',
  'chaos',
  'breach',
  'spin',
  'light',
  'spread',
  'iron',
];
const MIX_TYPES = [
  'spread_plasma',
  'plasma_fire',
  'fire_coal',
  'coal_chaos',
  'chaos_poison',
  'poison_light',
  'light_spin',
  'spin_breach',
  'breach_ice',
  'ice_wind',
  'light_iron',
  'iron_breach',
];

function inferWeaponType(key: string): string {
  for (const mix of MIX_TYPES) {
    if (key.includes(mix)) return mix;
  }
  for (const t of WEAPON_TYPES) {
    if (key.includes(t)) return t;
  }
  return 'unknown';
}

/** Format a weapon type string as a display label. */
function formatWeaponType(type: string): string {
  if (type.includes('_')) {
    return type
      .split('_')
      .map((w) => (w === 'spin' ? 'Iron' : w.charAt(0).toUpperCase() + w.slice(1)))
      .join('/');
  }
  if (type === 'spin') return 'Iron';
  return type.charAt(0).toUpperCase() + type.slice(1);
}

/** Build a short nickname e.g. "Fire 2", "Ice Ult", "Spread/Plasma 1". */
function weaponNickname(weaponData: WeaponData | null, weaponType: string | null): string | null {
  if (!weaponType) return null;
  const base = formatWeaponType(weaponType);
  if (weaponData?.isUlt) return `${base} Ult`;
  if (weaponData?.tier) return `${base} ${weaponData.tier}`;
  return base;
}

export interface EnrichedItem {
  record: ItemRecord;
  iconUrl: string;
  weaponType: string | null;
  weaponNickname: string | null;
  weaponData: WeaponData | null;
  hullData: HullData | null;
  category: 'weapon' | 'hull' | 'sail' | 'repair' | 'wood' | 'other';
}

@Component({
  selector: 'items-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, OnChanges, OnDestroy {
  @Input() ItemRecordList: ItemRecordContent;

  activeTab: 'all' | 'weapon' | 'hull' | 'sail' | 'repair' | 'wood' = 'all';
  allItems: EnrichedItem[] = [];
  TotalSample = 1;
  isSmallScreen: boolean;
  maxDps = 1;
  maxRange = 1;

  private gameItems: ItemsJson | null = null;
  private itemNameMap = new Map<string, string>();
  private localization: LocalizationMap = {};
  private condensed: ItemRecord[] = [];
  private destroy$ = new Subject<void>();

  constructor(
    private breakpointObserver: BreakpointObserver,
    private gameDataService: GameDataService,
  ) {
    this.gameDataService.getLocalization().subscribe((loc) => {
      this.localization = loc;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.ItemRecordList && this.ItemRecordList) {
      this.condensed = [];
      this.TotalSample = 0;
      this.ItemRecordList.Content.forEach((item) => {
        if (
          item.item &&
          !item.item.includes('lorne') &&
          !item.item.includes('caulk') &&
          !item.item.includes('combo') &&
          !item.item.includes('tpscroll')
        ) {
          this.condensed.push(item);
          this.TotalSample += item.compGames;
        }
      });
      this.buildEnriched();
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
      .getItems()
      .pipe(takeUntil(this.destroy$))
      .subscribe((items) => {
        this.gameItems = items;
        this.itemNameMap.clear();
        [...items.weapons, ...items.hulls, ...items.sails, ...items.repairs, ...items.woods].forEach(
          (item) => this.itemNameMap.set(item.key, item.name),
        );
        this.maxDps = Math.max(...items.weapons.map((w) => w.dps || 0), 1);
        this.maxRange = Math.max(...items.weapons.map((w) => w.range || 0), 1);
        this.buildEnriched();
      });
  }

  private buildEnriched() {
    if (!this.condensed.length) return;
    this.allItems = this.condensed
      .sort((a, b) => b.compGames - a.compGames)
      .map((record) => {
        const key = record.item;
        const iconUrl = `/assets/game-data/images/items/${key.replace('item_', '')}.png`;
        let weaponType: string | null = null;
        let weaponData: WeaponData | null = null;
        let hullData: HullData | null = null;
        let category: EnrichedItem['category'] = 'other';

        if (this.gameItems) {
          weaponData =
            this.gameItems.weapons.find((w) => w.key === key) ?? null;
          hullData = this.gameItems.hulls.find((h) => h.key === key) ?? null;
          const sailData = this.gameItems.sails.find((s) => s.key === key);
          const repairData = this.gameItems.repairs.find((r) => r.key === key);
          const woodData = this.gameItems.woods.find((w) => w.key === key);
          if (weaponData) {
            category = 'weapon';
            weaponType = weaponData.type;
          } else if (hullData) category = 'hull';
          else if (sailData) category = 'sail';
          else if (repairData) category = 'repair';
          else if (woodData) category = 'wood';
        }
        if (!weaponType && (key.includes('_bow') || key.includes('_cannon'))) {
          weaponType = inferWeaponType(key);
          category = 'weapon';
        }
        return { record, iconUrl, weaponType, weaponNickname: weaponNickname(weaponData, weaponType), weaponData, hullData, category };
      });
  }

  get filteredItems(): EnrichedItem[] {
    const base =
      this.activeTab === 'all'
        ? this.allItems
        : this.allItems.filter((i) => i.category === this.activeTab);
    return base.filter((i) => i.record.compGames > 50);
  }

  setTab(tab: typeof this.activeTab) {
    this.activeTab = tab;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  sortData(sort: Sort) {
    const isAsc = sort.direction === 'asc';
    this.allItems = [...this.allItems].sort((a, b) => {
      switch (sort.active) {
        case 'name':
          return compare(a.record.item, b.record.item, isAsc);
        case 'games':
          return compare(a.record.compGames, b.record.compGames, isAsc);
        case 'winper':
          return compare(
            a.record.compGames > 0
              ? a.record.compWins / a.record.compGames
              : -1,
            b.record.compGames > 0
              ? b.record.compWins / b.record.compGames
              : -1,
            isAsc,
          );
        default:
          return compare(a.record.compGames, b.record.compGames, isAsc);
      }
    });
  }

  getPercent(input: number): string {
    return `${input * 100}%`;
  }

  displayName(key: string): string {
    // Prefer the name from items.json
    const fromItems = this.itemNameMap.get(key);
    if (fromItems) return fromItems;
    // Fall back to localization map
    const localized = this.localization['DOTA_Tooltip_ability_' + key]
      || this.localization['DOTA_Tooltip_ability_item_' + key];
    if (localized) return localized;
    // Last resort: prettify the key
    return key
      .split('_')
      .join(' ')
      .replace('item ', '')
      .replace(/\b\w/g, (c) => c.toUpperCase());
  }
}

function compare(
  a: number | string | Date,
  b: number | string | Date,
  isAsc: boolean,
) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
