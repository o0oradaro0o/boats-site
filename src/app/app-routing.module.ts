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
    { path: 'stats', loadChildren: './stat-dashboard/stat-dashboard.module#StatDashboardModule' },
    { path: 'game', loadChildren: './game-dashboard/game-dashboard.module#GameDashboardModule' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
