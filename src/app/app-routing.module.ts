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
      { path: 'games', loadChildren: () => import('./games/games.module').then(m => m.GamesModule) },
      {
        path: 'players',
        loadChildren: () => import('./players/players.module').then(m => m.PlayersModule)
      },
      { path: 'boats', loadChildren: () => import('./boats/boats.module').then(m => m.BoatsModule) },
      { path: 'items', loadChildren: () => import('./items/items.module').then(m => m.ItemsModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
