import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './players/players-subcomponents/list/list.component';
import { PlayersComponent } from './players/players.component';
import { PlayerComponent } from './player/player.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SummaryComponent } from './players/players-subcomponents/summary/summary.component';
import { PlayerRecentGamesListComponent } from './player/player-subcomponents/player-recent-games-list/player-recent-games-list.component';
import { PipesModule } from '../pipes/pipes.module';
import { PlayerItemListComponent } from './player/player-subcomponents/player-items-list/list.component';
import { PlayerBoatListComponent } from './player/player-subcomponents/player-boats-list/list.component';
import { PlayerStatsOverviewComponent } from './player/player-subcomponents/player-stats-overview/player-stats-overview.component';

import { SharedModule } from '../shared/shared.module';

const PlayersRoutes: Routes = [
  { path: '', component: PlayersComponent },
  { path: ':id', component: PlayerComponent }
];

@NgModule({
  declarations: [
    ListComponent,
    PlayersComponent,
    PlayerComponent,
    SummaryComponent,
    PlayerRecentGamesListComponent,
    PlayerItemListComponent,
    PlayerBoatListComponent,
    PlayerStatsOverviewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PlayersRoutes),
    ReactiveFormsModule,
    MatTabsModule,
    MatTableModule,
    MatListModule,
    MatSortModule,
    MatCheckboxModule,
    PipesModule,
    SharedModule
  ]
})
export class PlayersModule {}
