import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameDashboardComponent } from './game-dashboard/game-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { DataGrabberService } from '../data-grabber.service';
import {ActivatedRoute} from '@angular/router';
import {map, filter, switchMap} from 'rxjs/operators';

const GameDashboard: Routes = [
  { path: ':matchId', component: GameDashboardComponent },

];

@NgModule({
  declarations: [GameDashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(GameDashboard),
  ]
})
export class GameDashboardModule {

  matchId;
  GameDetail$;

  constructor( private svc: DataGrabberService, route: ActivatedRoute) {
    console.log(this.matchId);
    this.GameDetail$ = route.queryParams.pipe(
      map(params => params.matchId),
      filter(matchId => !!matchId),
      switchMap(GameDetail => svc.getGameDetail(this.matchId))
    );

    console.log(this.matchId);
  }

}
