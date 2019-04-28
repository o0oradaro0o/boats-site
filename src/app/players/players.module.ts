import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { PlayersComponent } from './players/players.component';
import { PlayerComponent } from './player/player.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import {MatSortModule} from '@angular/material/sort';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SummaryComponent } from './summary/summary.component';

const PlayersRoutes: Routes = [
  { path: '', component: PlayersComponent },
  { path: ':id', component: PlayerComponent }
];

@NgModule({
  declarations: [ListComponent, PlayersComponent, PlayerComponent, SummaryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(PlayersRoutes),
    ReactiveFormsModule,
    MatTabsModule,
    MatTableModule,
    MatListModule,
    MatSortModule,
    MatCheckboxModule
  ]
})
export class PlayersModule { }
