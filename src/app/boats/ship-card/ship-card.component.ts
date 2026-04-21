import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ShipData } from '../../models/game-data.models';
import { ItemRecord } from '../../models/player-item-record';

@Component({
  selector: 'app-ship-card',
  templateUrl: './ship-card.component.html',
  styleUrls: ['./ship-card.component.scss'],
})
export class ShipCardComponent implements OnChanges {
  @Input() shipData: ShipData | null = null;
  @Input() boatRecord: ItemRecord | null = null;
  @Input() totalSample = 1;
  @Input() animationDelay = 0;

  winRate = 0;
  useRate = 0;
  circumference = 2 * Math.PI * 16;
  dashOffset = 0;

  ngOnChanges(changes: SimpleChanges) {
    if (this.boatRecord && this.totalSample > 0) {
      this.winRate =
        this.boatRecord.compGames > 0
          ? (this.boatRecord.compWins / this.boatRecord.compGames) * 100
          : 0;
      this.useRate = Math.min(
        (this.boatRecord.compGames / this.totalSample) * 100,
        100,
      );
    }
    this.dashOffset =
      this.circumference - (this.winRate / 100) * this.circumference;
  }

  get displayName(): string {
    return this.shipData?.name ?? this.boatRecord?.item ?? '?';
  }

  get slug(): string {
    return (this.shipData?.name ?? this.boatRecord?.item ?? '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  }

  get iconUrl(): string {
    if (this.shipData?.icon) {
      return `assets/boat-icons/${this.shipData.icon}.png`;
    }
    if (this.boatRecord?.item) {
      return `assets/boat-icons/${this.boatRecord.item.split(' ').join('_').replace("'", '').toLowerCase()}.png`;
    }
    return '';
  }

  get heroUrl(): string | null {
    if (this.shipData?.heroImage) {
      return `assets/game-data/images/heroes/${this.shipData.heroImage}`;
    }
    return null;
  }
}
