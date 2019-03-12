import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersListComponent } from './players-list/players-list.component';
import { PlayersRowComponent } from './players-row/players-row.component';
import { GamesListComponent } from './games-list/games-list.component';
import { StatDashboardComponent } from './stat-dashboard/stat-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import {MatSortModule} from '@angular/material/sort'
const StatDashboard: Routes = [
  { path: '', component:StatDashboardComponent },

];

@NgModule({
  declarations: [PlayersListComponent, PlayersRowComponent, GamesListComponent, StatDashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(StatDashboard),
    ReactiveFormsModule,
    MatTabsModule,
    MatTableModule,
    MatListModule,
    MatSortModule
  ]
})
export class StatDashboardModule { }
