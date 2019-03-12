import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GameContent } from './../../models/game-simple';
import { DataGrabberService } from './../../data-grabber.service';

@Component({
  selector: 'app-stat-dashboard',
  templateUrl: './stat-dashboard.component.html',
  styleUrls: ['./stat-dashboard.component.scss']
})
export class StatDashboardComponent implements OnInit {

  SimpleGamesList: Observable<GameContent>;

  constructor(loader: DataGrabberService) {
    // List reacts to filter and sort changes
    this.SimpleGamesList = loader.getGames();

  }

  ngOnInit() {
  }

}
