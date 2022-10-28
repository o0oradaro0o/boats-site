import { Component, Input, OnInit } from '@angular/core';
import { GameDetail } from 'src/app/models/game-detail';
import { Router } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-end-game-table',
  templateUrl: './end-game-table.component.html',
  styleUrls: ['./end-game-table.component.scss']
})
export class EndGameTableComponent implements OnInit {
  @Input() playerData: GameDetail[];
  isSmallScreen: boolean;

  constructor(
    private router: Router,
    private breakpointObserver: BreakpointObserver
  ) {}

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

  handleClick(playerID: number) {
    this.router.navigate(['/players', playerID]);
  }
}
