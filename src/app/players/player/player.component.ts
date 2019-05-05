import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataGrabberService } from 'src/app/data-grabber.service';
import { GameDetail } from 'src/app/models/game-detail';
import { ItemRecordContent } from 'src/app/models/player-item-record';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  ItemRecordList$: Observable<ItemRecordContent>;
  BoatRecordList$: Observable<ItemRecordContent>;

  recentGames: GameDetail[];
  playerId: number;

  constructor(loader: DataGrabberService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.playerId = params.id;
      loader.getRecentMatches(this.playerId).subscribe(res => {
        this.recentGames = res;
      });
      this.ItemRecordList$ = loader.getPlayerItemData(this.playerId);
      this.BoatRecordList$ = loader.getPlayerBoatData(this.playerId);
   
    });
  }

  ngOnInit() {}
}
