import { Component, Input, OnInit } from '@angular/core';
import { GameDetail } from 'src/app/models/game-detail';
import { Router } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
import { GameDataService } from 'src/app/game-data.service';
import { ShipData } from 'src/app/models/game-data.models';

@Component({
  selector: 'app-end-game-table',
  templateUrl: './end-game-table.component.html',
  styleUrls: ['./end-game-table.component.scss'],
})
export class EndGameTableComponent implements OnInit {
  @Input() playerData: GameDetail[];
  isSmallScreen: boolean;
  private shipIconMap = new Map<string, string>();

  constructor(
    private router: Router,
    private breakpointObserver: BreakpointObserver,
    private gameData: GameDataService,
  ) {}

  ngOnInit() {
    this.isSmallScreen =
      this.breakpointObserver.isMatched('(max-width: 599px)');
    this.breakpointObserver.observe(['(min-width: 500px)']).subscribe(() => {
      this.isSmallScreen =
        this.breakpointObserver.isMatched('(max-width: 599px)');
    });
    this.gameData.getShips().subscribe((ships: ShipData[]) => {
      ships.forEach((s) =>
        this.shipIconMap.set(s.name.trim().toLowerCase(), s.icon),
      );
    });
  }

  getShipIcon(name: string): string {
    const icon = this.shipIconMap.get((name ?? '').trim().toLowerCase());
    return `/assets/boat-icons/${
      icon ??
      (name ?? '')
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '_')
    }.png`;
  }

  handleClick(playerID: number) {
    this.router.navigate(['/players', playerID]);
  }
}
