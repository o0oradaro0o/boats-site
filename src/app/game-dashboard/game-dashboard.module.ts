import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameDashboardComponent } from './game-dashboard/game-dashboard.component';
import { RouterModule, Routes } from '@angular/router';


const GameDashboard: Routes = [
  { path: ':matchId', component:GameDashboardComponent },

];

@NgModule({
  declarations: [GameDashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(GameDashboard),
  ]
})
export class GameDashboardModule { }