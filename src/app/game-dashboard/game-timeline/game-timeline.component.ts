import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GameDetailContent } from 'src/app/models/game-detail';
import { D3 } from 'd3';

interface Interaction {
  time: number;
  action: string;
  actor: string;
  target: string;
}

@Component({
  selector: 'app-game-timeline',
  templateUrl: './game-timeline.component.html',
  styleUrls: ['./game-timeline.component.scss']
})
export class GameTimelineComponent implements OnInit, OnChanges {
  @Input() details: GameDetailContent;

  players = [];

  // old; don't need.
  kills = {};
  deaths = {};
  ships = {};

  // new hotness
  interactions: Interaction[] = [];

  datasets = [];
  empireTick = [];

  constructor() { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.details) {
      console.log(this.empireTick.length);

      if (!this.details || this.empireTick.length > 0) {
        return true;
      }

      this.parseContent();
      this.makeGraph();
      this.display();
    }
  }

  parseContent() {
    // player data
    this.details.Content.forEach( player => {
      this.players.push([player.playerID, player.playerName, player.tm]);
      for (const ship of player.boatOrder) {
        this.ships[player.playerID] = this.ships[player.playerID] || [];
        this.ships[player.playerID].push([ship.time, 'ship', player.playerID, ship.item]);
        this.interactions.push({ time: ship.time, action: 'ship',
          actor: player.playerID, target: ship.item.toString() });
      }
    });

    // game data
    this.details.Content[0].combatLog.forEach(interaction => {
        // kills
        this.kills[interaction.killer_name] = this.kills[interaction.killer_name] || [];
        this.kills[interaction.killer_name].push([interaction.time, 'kill', interaction.killed_name]);
        this.interactions.push({ time: interaction.time, action: 'kill',
          actor: interaction.killer_name, target: interaction.killed_name });

        // deaths
        this.deaths[interaction.killed_name] = this.deaths[interaction.killed_name] || [];
        this.deaths[interaction.killed_name].push([interaction.time, 'death', interaction.killer_name]);
        this.interactions.push({ time: interaction.time, action: 'death',
          actor: interaction.killed_name, target: interaction.killer_name });
    });
  }

  makeGraph() {
    for (const player of this.players) {
      for (const interaction of this.interactions.filter(inter => inter.actor = player.playerID)) {
        this.datasets.push({
          lane: player.playerID,
          id: player.playerID,
          team: player.tm,
          action: interaction.action,
          target: interaction.target,
          time: interaction.time
        });
      }
    }
  }

  display() {
    const laneLength = this.players.length;

    const m = [20, 15, 15, 120]; // top right bottom left
    const w = 960 - m[1] - m[3];
    const h = 500 - m[0] - m[2];

    const miniHeight = laneLength * 12 + 50;
    const mainHeight = h - miniHeight - 50;

    const tBegin = 0;
    const tEnd = this.empireTick.length * 4 + 3;

    let chart = D3.timeline();
    let svg = D3.select('#timeline').append('svg').attr('width', 500).datum(this.interactions)

    if (this.empireTick.length > 0) {
      return true;
    }
    return false;
  }

}
