import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'dash', pathMatch: 'full' },
  { path: 'dash', loadChildren: './stat-dashboard/stat-dashboard.module#StatDashboardModule' },
  { path: 'game', loadChildren: './game-dashboard/game-dashboard.module#GameDashboardModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
