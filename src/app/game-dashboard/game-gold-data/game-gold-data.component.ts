import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { GameDetailContent, EmpGold } from 'src/app/models/game-detail';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-game-gold-data',
  templateUrl: './game-gold-data.component.html',
  styleUrls: ['./game-gold-data.component.scss']
})
export class GameGoldDataComponent implements OnInit, OnChanges {
  @Input() DetailGamesList: GameDetailContent;
  constructor() { }

  chart = [];
  northEmpTotal: number[] = [];
  southEmpTotal: number[] = [];
  goldAdvantage: number[] = [];
  empireTick = [];
  ngOnChanges(changes: SimpleChanges) {
    if (changes['DetailGamesList']) {
      this.makeGraph();
    }
  }
  ngOnInit() {
  }
  makeGraph() {
    console.log(this.empireTick.length)
    if(!this.DetailGamesList)
    {
      return true;
    }
    if (this.empireTick.length > 0) {
      return true;
    }
    this.DetailGamesList.Content[0].empGoldHist.forEach(gold => {
      this.empireTick.push(Math.floor(gold.EmpireGoldCount * 4));
      this.northEmpTotal.push(Math.floor(gold.North_gold));
      this.southEmpTotal.push(Math.floor(gold.South_Gold * -1));
      this.goldAdvantage.push(Math.floor((gold.South_Gold-gold.North_gold) / (0.1 + 0.8 * (1 / Math.sqrt(gold.EmpireGoldCount)))));
    });
    console.log(this.empireTick[0])
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: this.empireTick,
        datasets: [
          {
            label: 'North Gold Awarded',
            data: this.northEmpTotal,
            borderColor: '#FFcccc',
            fill: false
          },
          {
            label: 'South Gold Awarded',
            data: this.southEmpTotal,
            borderColor: '#ccFFcc',
            fill: false
          },
          {
            label: 'Gold Advantage',
            data: this.goldAdvantage,
            borderColor: '#DAA520',
            fill: false,
            backgroundColor: '#EBB630'
          }
        ]
      },
      options: {
        legend: {
          display: true
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
    if (this.empireTick.length > 0) {
      return true;
    }
    return false;
  }
}
