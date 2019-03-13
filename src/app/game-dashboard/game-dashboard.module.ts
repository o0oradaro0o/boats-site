import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameDashboardComponent } from './game-dashboard/game-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { GameGoldDataComponent } from './game-gold-data/game-gold-data.component';
import { GameGeneralDataComponent } from './game-general-data/game-general-data.component';

const GameDashboard: Routes = [
  { path: '', component: GameDashboardComponent },

];

@NgModule({
  declarations: [GameDashboardComponent, GameGoldDataComponent, GameGeneralDataComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(GameDashboard),
  ]
})
export class GameDashboardModule { }
