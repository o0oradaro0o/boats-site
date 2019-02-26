import { Component, OnInit, Input } from '@angular/core';
import { GameSimple } from 'src/app/GameSimple';

@Component({
  selector: 'app-games-row',
  templateUrl: './games-row.component.html',
  styleUrls: ['./games-row.component.scss']
})
export class GamesRowComponent implements OnInit {
  @Input() game: GameSimple;
  constructor() { }

  ngOnInit() {
  }

}
