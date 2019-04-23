import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataGrabberService } from '../data-grabber.service';
import {map, filter, switchMap} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GameDetail, GameDetailContent } from 'src/app/models/game-detail';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})

export class GameComponent implements OnInit {
  matchId;
  
  GeneralGameDetail$: Observable<GameDetailContent>;
  PlayerDetails$: Observable<GameDetailContent>;

  constructor( private svc: DataGrabberService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.matchId = params.id;
    });
  }

  ngOnInit() {
    this.PlayerDetails$ = this.svc.getPlayerDetails(this.matchId);
    this.GeneralGameDetail$ = this.svc.getGeneralGameDetail(this.matchId);
  }
}
