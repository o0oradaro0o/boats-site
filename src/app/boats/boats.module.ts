import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoatsSummaryComponent } from './summary/summary.component';
import { RouterModule, Routes } from '@angular/router';
import { BoatsComponent } from './boats/boats.component';
import { ListComponent } from './list/list.component';
import { ShipCardComponent } from './ship-card/ship-card.component';
import { DetailComponent } from './detail/detail.component';
import { MatSortModule } from '@angular/material/sort';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SharedModule } from '../shared/shared.module';

const BoatsRoutes: Routes = [
  { path: '', component: BoatsComponent },
  { path: ':slug', component: DetailComponent },
];

@NgModule({
  declarations: [
    BoatsSummaryComponent,
    BoatsComponent,
    ListComponent,
    ShipCardComponent,
    DetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(BoatsRoutes),
    MatTabsModule,
    MatTableModule,
    MatListModule,
    MatSortModule,
    SharedModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
  ],
})
export class BoatsModule {}
