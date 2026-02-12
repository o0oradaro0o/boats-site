import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { itemsSummaryComponent } from './summary/summary.component';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { ListComponent } from './list/list.component';
import { MatSortModule } from '@angular/material/sort';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { SharedModule } from '../shared/shared.module';

const itemsRoutes: Routes = [{ path: '', component: ItemsComponent }];

@NgModule({
  declarations: [itemsSummaryComponent, ItemsComponent, ListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(itemsRoutes),
    MatTabsModule,
    MatTableModule,
    MatListModule,
    MatSortModule,
    MatCheckboxModule,
    SharedModule
  ]
})
export class ItemsModule {}
