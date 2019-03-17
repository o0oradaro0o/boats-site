import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component'

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'stats', loadChildren: './stat-dashboard/stat-dashboard.module#StatDashboardModule' },
  { path: 'game', loadChildren: './game-dashboard/game-dashboard.module#GameDashboardModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
