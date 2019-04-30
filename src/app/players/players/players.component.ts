import { Component, OnInit } from '@angular/core';
import { DataGrabberService } from 'src/app/data-grabber.service';
import { Observable } from 'rxjs';
import { PlayerSimpleContent } from './../../models/player-simple';
@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  SimplePlayersList: Observable<PlayerSimpleContent>;

  constructor(loader: DataGrabberService) { 
    this.SimplePlayersList = loader.getTopPlayers();
  }

  ngOnInit() {
  }

}
