import { Component, OnInit, Input } from '@angular/core';
import { GameSimple, content } from 'src/app/GameSimple';
@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {
  @Input() SimpleGamesList: content;
  constructor() {

  }

  ngOnInit() {

  }

}
