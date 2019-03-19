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
  GameDetail$: Observable<GameDetailContent>;

  constructor( private svc: DataGrabberService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.matchId = params.id;
    });
  }

  ngOnInit() {
    this.GameDetail$ = this.svc.getGameDetail(this.matchId);
  }
}
