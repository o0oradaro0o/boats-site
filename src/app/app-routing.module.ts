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
      { path: 'players', loadChildren: './players/players.module#PlayersModule' },
      { path: 'boats', loadChildren: './boats/boats.module#BoatsModule' },
      { path: 'items', loadChildren: './items/items.module#ItemsModule' },
    
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
