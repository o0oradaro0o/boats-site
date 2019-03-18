import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Brochure Layout Components
import { BrochureLayoutComponent } from './_layout/brochure-layout/brochure-layout.component';

// Page Components
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  // Brochure Routes
  {
    path: '',
    component: BrochureLayoutComponent,
    children: [
      { path: '', component: HomepageComponent, pathMatch: 'full' },
      { path: 'games', loadChildren: './games/games.module#GamesModule' },
      { path: 'game', loadChildren: './game-dashboard/game-dashboard.module#GameDashboardModule' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
