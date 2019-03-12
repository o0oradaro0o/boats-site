import { Component, OnInit } from '@angular/core';
import { DataGrabberService } from '../../data-grabber.service';
import {ActivatedRoute} from "@angular/router"
import {map, filter, switchMap} from "rxjs/operators"
import { Observable } from 'rxjs';
import { gameDetailContent } from 'src/app/GameDetail';
@Component({
  selector: 'app-game-dashboard',
  templateUrl: './game-dashboard.component.html',
  styleUrls: ['./game-dashboard.component.scss']
})
export class GameDashboardComponent implements OnInit {

  
matchId;
GameDetail$ : Observable<gameDetailContent>;
constructor( private svc: DataGrabberService, route: ActivatedRoute) {
  console.log(this.matchId)
this.GameDetail$ = route.queryParams.pipe(
map(params => params.matchId),
filter(matchId => !!matchId),
switchMap(matchId => svc.getGameDetail(this.matchId))
);

console.log(this.matchId)
}
  ngOnInit() {
  }

}
