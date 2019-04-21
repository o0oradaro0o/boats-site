import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GameDetailContent } from 'src/app/models/game-detail';
import {time} from "d3-time";
import * as d3 from 'd3';
import * as d3timelines from 'd3-timelines';

interface Interaction {
  time: number;
  action: string;
  actor: string;
  target: string;
}

@Component({
  selector: 'game-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class GameTimelineComponent implements OnInit, OnChanges {
  @Input() details: GameDetailContent;

  players = [];
  currentHoverInfo = 'test!';
  HoverImg=""
  // old; don't need.
  kills = {};
  deaths = {};
  ships = {};
  playerIdToName = new Map();

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
      this.playerIdToName.set(player.playerID,player.playerName);
      this.players.push([player.playerID, player.playerName, player.tm]);
      for (const ship of player.boatOrder) {
        this.ships[player.playerID] = this.ships[player.playerID] || [];
        this.ships[player.playerID].push([ship.time, 'ship', player.playerID, ship.item]);
        this.interactions.push({ time: ship.time, action: 'ship',
          actor: player.playerID, target: ship.item.toString() });
      }
      for (const item of player.buildOrder) {
        this.ships[player.playerID] = this.ships[player.playerID] || [];
        this.ships[player.playerID].push([item.time, 'buy', player.playerID, item.item]);
        this.interactions.push({ time: item.time, action: 'buy',
          actor: player.playerID, target: item.item.toString() });
      }
      for (const item of player.saleOrder) {
        if(item.item)
        {
        this.ships[player.playerID] = this.ships[player.playerID] || [];
        this.ships[player.playerID].push([item.time, 'sell', player.playerID, item.item]);
        this.interactions.push({ time: item.time, action: 'sell',
          actor: player.playerID, target: item.item.toString() });
        }
      }
    });
    

    // game data
    this.details.Content[0].combatLog.forEach(interaction => {
        // kills
        this.kills[interaction.killer_name] = this.kills[interaction.killer_name] || [];
        this.kills[interaction.killer_name].push([interaction.Game_time, 'kill', interaction.killed_name]);
        this.interactions.push({ time: interaction.Game_time, action: 'kill',
          actor: interaction.killer_name, target: interaction.killed_name });

        // deaths
        this.deaths[interaction.killed_name] = this.deaths[interaction.killed_name] || [];
        this.deaths[interaction.killed_name].push([interaction.Game_time, 'death', interaction.killer_name]);
        this.interactions.push({ time: interaction.Game_time, action: 'death',
          actor: interaction.killed_name, target: interaction.killer_name });
    });
  }

  makeGraph() {
    for (const player of this.players) {
      const timelinePoints = [];
      for (const inter of this.interactions.filter(inter => inter.actor == player[0])) {
        let color = 'red';
        let target=inter.target
        let image=""
        if(this.playerIdToName.get(target))
        {
          target=this.playerIdToName.get(target)
        }
        let actionText = "killed " +target
        if (inter.action == 'death') {
          color = 'black';
          actionText = "died to " +target
        }
        if (inter.action == 'ship') {
          color = 'blue';
          actionText="Purchased "+target
        }
        if (inter.action == 'buy') {
          color = 'yellow';
          actionText="Purchased "+target.substring(target.indexOf("_")+1).replace("_bow","");
          image="/assets/items/"+target.substring(target.indexOf("_")+1)+".png"
        }
        if (inter.action == 'sell') {
          color = 'grey';
          actionText="sold "+target.substring(target.indexOf("_")+1).replace("_bow","");
          image="/assets/items/"+target.substring(target.indexOf("_")+1)+".png"
       
        }


        const point = {
          color,
          info: actionText,
          starting_time: inter.time*1000,
          ending_time: inter.time*1000 + .1,
          display: 'circle',
          img: image
        };
        timelinePoints.push(point);
      }
      this.datasets.push({
          label: player[1],
          times: timelinePoints
        });
    }
  }

  display() {
    const laneLength = this.players.length;

    const m = [20, 15, 15, 120]; // top right bottom left
    const w = 960 - m[1] - m[3];
    const h = 500 - m[0] - m[2];

    const miniHeight = laneLength * 25 + 50;

    const tBegin = 0;
    const tEnd = this.details.Content[0].gameDuration*1000 / 60;


    const chart = d3timelines.timelines();
    chart.stack();
    chart.beginning(tBegin);
    chart.ending(tEnd);
    chart.margin({left: 120, right: 30, top: 0, bottom: 0});
    chart.width(tEnd/15);
    chart.relativeTime()
    chart.tickFormat({
            format: function(d) { return d3.timeFormat("%S")(d) },
            tickTime: d3.timeSecond,
            tickInterval: 10,
            tickSize: 5,
          });
    

    chart.hover(function(d, i, datum) {
      if(d.info)
      {
        this.currentHoverInfo = d.info;
        this.HoverImg= d.img
      }
    }.bind(this)); 

    const svg = d3.select('#timeline').append('svg').attr('width', 500).attr("height", miniHeight).datum(this.datasets).call(chart);

  }

}
