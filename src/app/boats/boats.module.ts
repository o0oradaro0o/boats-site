import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoatsSummaryComponent } from './summary/summary.component';
import { RouterModule, Routes } from '@angular/router';
import { BoatsComponent } from './boats/boats.component';
import { ListComponent } from './list/list.component';
import {
  MatSortModule,
  MatListModule,
  MatTableModule,
  MatTabsModule,
  MatCheckboxModule
} from '@angular/material';
import { SharedModule } from '../shared/shared.module';

const BoatsRoutes: Routes = [{ path: '', component: BoatsComponent }];

@NgModule({
  declarations: [BoatsSummaryComponent, BoatsComponent, ListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(BoatsRoutes),
    MatTabsModule,
    MatTableModule,
    MatListModule,
    MatSortModule,
    SharedModule,
    MatCheckboxModule
  ]
})
export class BoatsModule {}
