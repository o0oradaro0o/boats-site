import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { GameContent } from './../models/game-simple';
import { DataGrabberService } from './../data-grabber.service';

@Component({
  selector: 'games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {
  Games$: Observable<GameContent>;

  constructor(loader: DataGrabberService) {
    this.Games$ = loader.get300Games().pipe(shareReplay(1));
  }

  ngOnInit() {}
}
