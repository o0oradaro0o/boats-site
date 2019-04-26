import { Component, OnInit } from '@angular/core';
import { Observable, merge} from 'rxjs';
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
    
    const today = new Date();
    const tomorrow = new Date(today);
    const yesterday = new Date(today);
    const DByesterday = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    yesterday.setDate(today.getDate() - 1);
    DByesterday.setDate(today.getDate() - 2);
    this.SimpleGamesList = merge(loader.getGames(tomorrow),loader.getGames(today),loader.getGames(yesterday),loader.getGames(DByesterday));
  }

  ngOnInit() {
  }
}
