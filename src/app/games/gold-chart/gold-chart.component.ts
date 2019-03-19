import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { GameDetailContent, EmpGold } from 'src/app/models/game-detail';
import { Chart } from 'chart.js';

@Component({
  selector: 'game-gold-chart',
  templateUrl: './gold-chart.component.html',
  styleUrls: ['./gold-chart.component.scss']
})
export class GameGoldChartComponent implements OnInit, OnChanges {
  @Input() DetailGamesList: GameDetailContent;
  constructor() { }

  chart = [];
  northEmpTotal: number[] = [];
  southEmpTotal: number[] = [];
  goldAdvantage: number[] = [];
  empireTick = [];
  ngOnChanges(changes: SimpleChanges) {
    if (changes.DetailGamesList) {
      this.makeGraph();
    }
  }
  ngOnInit() {
  }
  makeGraph() {
    console.log(this.empireTick.length);
    if (!this.DetailGamesList) {
      return true;
    }
    if (this.empireTick.length > 0) {
      return true;
    }
    this.DetailGamesList.Content[0].empGoldHist.forEach(gold => {
      this.empireTick.push(Math.floor(gold.EmpireGoldCount * 4));
      this.northEmpTotal.push(Math.floor(gold.North_gold));
      this.southEmpTotal.push(Math.floor(gold.South_Gold * -1));
      this.goldAdvantage.push(Math.floor((gold.South_Gold - gold.North_gold) / (0.1 + 0.8 * (1 / Math.sqrt(gold.EmpireGoldCount)))));
    });
    console.log(this.empireTick[0]);
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: this.empireTick,
        datasets: [
          {
            label: 'North Gold Awarded',
            data: this.northEmpTotal,
            borderColor: '#FF5555',
            backgroundColor: '#FF5555',
            fill: false,

          },
          {
            label: 'South Gold Awarded',
            data: this.southEmpTotal,
            borderColor: '#55FF55',
            backgroundColor: '#55FF55',
            fill: false,

          },
          {
            label: 'Gold Advantage',
            data: this.goldAdvantage,
            borderColor: '#DAA520',
            backgroundColor: '#EBB63055',
            borderWidth: 1
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
