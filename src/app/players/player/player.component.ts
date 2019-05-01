import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataGrabberService } from 'src/app/data-grabber.service';
import { GameDetail } from 'src/app/models/game-detail';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  recentGames: GameDetail[];
  playerId: number;

  constructor(loader: DataGrabberService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.playerId = params.id;
      loader.getRecentMatches(this.playerId).subscribe(res => {
        this.recentGames = res;
      });
    });
  }

  ngOnInit() {}
}
