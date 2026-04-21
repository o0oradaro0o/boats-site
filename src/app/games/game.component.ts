import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { DataGrabberService } from '../data-grabber.service';
import { GameDetailContent } from 'src/app/models/game-detail';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  matchId: number;
  generalData: GameDetailContent;
  playerData: GameDetailContent;
  loading = true;

  constructor(
    private svc: DataGrabberService,
    private route: ActivatedRoute,
  ) {
    this.route.params.subscribe((params) => {
      this.matchId = params.id;
    });
  }

  ngOnInit() {
    forkJoin({
      general: this.svc.getGeneralGameDetail(this.matchId),
      players: this.svc.getPlayerDetails(this.matchId),
    }).subscribe(({ general, players }) => {
      this.generalData = general;
      this.playerData = players;
      this.loading = false;
    });
  }
}
