import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { GamesComponent } from './games.component';
import { GamesSummaryComponent } from './summary/summary.component';
import { GamesListComponent } from './list/list.component';

import { GameComponent } from './game.component';
import { GameGoldChartComponent } from './gold-chart/gold-chart.component';
import { GameDetailComponent } from './detail/detail.component';
import { GameTimelineComponent } from './timeline/timeline.component';
import { PlayerSnapshotComponent } from './player-snapshot/player-snapshot.component';
import { EndGameTableComponent } from './player-snapshot/end-game-table/end-game-table.component';
import { PurchaseLogComponent } from './purchase-log/purchase-log.component';
import { PlayerPurchaseHistoryComponent } from './purchase-log/player-purchase-history/player-purchase-history.component';

import { PipesModule } from '../pipes/pipes.module';
import { SharedModule } from '../shared/shared.module';

const GamesRoutes: Routes = [
  { path: '', component: GamesComponent },
  { path: ':id', component: GameComponent }
];

@NgModule({
  declarations: [
    GamesComponent,
    GamesSummaryComponent,
    GamesListComponent,
    GameComponent,
    GameGoldChartComponent,
    GameDetailComponent,
    GameTimelineComponent,
    PlayerSnapshotComponent,
    EndGameTableComponent,
    PurchaseLogComponent,
    PlayerPurchaseHistoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(GamesRoutes),
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
export class GamesModule {}
