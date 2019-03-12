import { Component, OnInit } from '@angular/core';
import { DataGrabberService } from '../../data-grabber.service';
import {ActivatedRoute} from '@angular/router';
import {map, filter, switchMap} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GameDetail, GameDetailContent } from 'src/app/models/game-detail';

@Component({
  selector: 'app-game-dashboard',
  templateUrl: './game-dashboard.component.html',
  styleUrls: ['./game-dashboard.component.scss']
})
export class GameDashboardComponent implements OnInit {


matchId;
GameDetail$: Observable<GameDetailContent>;
constructor( private svc: DataGrabberService, private  route: ActivatedRoute) {

  this.route.queryParams.subscribe(params => {
    this.matchId = params['matchId'];
    console.log(this.matchId); // Print the parameter to the console. 
  });

  
}
  ngOnInit() {
  }

}
