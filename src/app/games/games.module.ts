import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import {MatSortModule} from '@angular/material/sort';

import { GamesComponent } from './games.component';
import { GamesSummaryComponent } from './summary/summary.component';
import { GamesListComponent } from './list/list.component';

const GamesRoutes: Routes = [
  { path: '', component: GamesComponent },
];

@NgModule({
  declarations: [ GamesComponent, GamesSummaryComponent, GamesListComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild(GamesRoutes),
    ReactiveFormsModule,
    MatTabsModule,
    MatTableModule,
    MatListModule,
    MatSortModule
  ]
})

export class GamesModule { }
