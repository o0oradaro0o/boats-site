import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GameContent } from './../models/game-simple';
import { DataGrabberService } from './../data-grabber.service';

@Component({
  selector: 'games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  SimpleGamesList: Observable<GameContent>;

  constructor(loader: DataGrabberService) {
    // List reacts to filter and sort changes
    this.SimpleGamesList = loader.getGames();
  }

  ngOnInit() {
  }
}
