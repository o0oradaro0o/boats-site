import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, combineLatest } from 'rxjs';
import { takeUntil, switchMap, map } from 'rxjs/operators';
import { GameDataService, LocalizationMap } from '../../game-data.service';
import { DataGrabberService } from '../../data-grabber.service';
import { ShipData, AbilityData } from '../../models/game-data.models';
import { ItemRecord } from '../../models/player-item-record';

export interface AbilityEntry {
  key: string;
  data: AbilityData;
  iconUrl: string;
}

@Component({
  selector: 'app-boat-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit, OnDestroy {
  ship: ShipData | null = null;
  record: ItemRecord | null = null;
  totalSample = 1;
  abilities: AbilityEntry[] = [];
  winRate = 0;
  useRate = 0;
  loading = true;
  notFound = false;

  circumference = 2 * Math.PI * 30;
  dashOffset = 0;

  private localization: LocalizationMap = {};
  private destroy$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private gameDataService: GameDataService,
    private dataGrabberService: DataGrabberService,
  ) {}

  ngOnInit() {
    this.gameDataService.getLocalization().subscribe((loc) => {
      this.localization = loc;
    });

    this.route.paramMap
      .pipe(
        takeUntil(this.destroy$),
        switchMap((params) => {
          const slug = params.get('slug') ?? '';
          return combineLatest([
            this.gameDataService.getShipBySlug(slug),
            this.gameDataService.getAbilities(),
            this.dataGrabberService.getBoatData(),
          ]);
        }),
        map(([ship, abilities, boatData]) => {
          const records = boatData?.Content ?? [];
          const barrel = records.find((r) => r.item === 'Barrel');
          const totalSample =
            (barrel?.compGames ??
              records.reduce((s, r) => s + r.compGames, 0)) ||
            1;
          const record = ship
            ? (records.find((r) => r.item === (ship.dbName ?? ship.name)) ??
              null)
            : null;
          return { ship: ship ?? null, abilities, record, totalSample };
        }),
      )
      .subscribe(({ ship, abilities, record, totalSample }) => {
        this.loading = false;
        if (!ship) {
          this.notFound = true;
          return;
        }
        this.ship = ship;
        this.record = record;
        this.totalSample = totalSample;
        this.winRate =
          record && record.compGames > 0
            ? (record.compWins / record.compGames) * 100
            : 0;
        this.useRate = Math.min(
          ((record?.compGames ?? 0) / totalSample) * 100,
          100,
        );
        this.dashOffset =
          this.circumference - (this.winRate / 100) * this.circumference;
        this.abilities = (ship.abilities ?? [])
          .map((key) => {
            const data = abilities[key];
            if (!data) return null;
            const iconUrl = `assets/game-data/images/spellicons/${data.textureName}.png`;
            return { key, data, iconUrl };
          })
          .filter(Boolean) as AbilityEntry[];
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  get iconUrl(): string {
    if (!this.ship) return '';
    return `/assets/boat-icons/${this.ship.icon}.png`;
  }

  get heroUrl(): string | null {
    return this.ship?.heroImage
      ? `/assets/game-data/images/heroes/${this.ship.heroImage}`
      : null;
  }

  statValues(values: Record<string, string>): { key: string; val: string }[] {
    return Object.entries(values).map(([key, val]) => ({ key, val }));
  }

  /** Look up an ability's display name in addon_english. */
  abilityName(key: string): string {
    const loc = this.localization;
    return (
      loc[`DOTA_Tooltip_Ability_${key}`] ??
      loc[`DOTA_Tooltip_ability_${key}`] ??
      key.split('_').join(' ')
    );
  }

  /** Look up an ability's description in addon_english and convert \n to HTML <br>. */
  abilityDescription(ab: AbilityEntry): string {
    const loc = this.localization;
    const desc = (
      loc[`DOTA_Tooltip_ability_${ab.key}_Description`] ??
      loc[`DOTA_Tooltip_ability_${ab.key}_description`] ??
      ab.data.description
    );
    return desc.replace(/\\n/g, '<br>');
  }

  /** Format a leveled value like "16.0 14.0 12.0 10.0s" → "16.0 / 14.0 / 12.0 / 10.0s". */
  formatLeveledValue(val: string | number): string {
    const str = String(val);
    const parts = str.split(/\s+/);
    if (parts.length <= 1) return str;
    return parts.join(' / ');
  }

  /** Look up a stat value label in addon_english. */
  statLabel(abilityKey: string, statKey: string): string {
    const loc = this.localization;
    return (
      loc[`DOTA_Tooltip_ability_${abilityKey}_${statKey}`] ??
      loc[`DOTA_Tooltip_Ability_${abilityKey}_${statKey}`] ??
      statKey.split('_').join(' ')
    );
  }
}
