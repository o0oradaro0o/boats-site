import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { GameDetailContent, EmpGold } from 'src/app/models/game-detail';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'game-gold-chart',
  templateUrl: './gold-chart.component.html',
  styleUrls: ['./gold-chart.component.scss']
})
export class GameGoldChartComponent implements OnInit, OnChanges {
  @Input() DetailGamesList: GameDetailContent;
  constructor() {}

  chart: any;
  northEmpTotal: number[] = [];
  southEmpTotal: number[] = [];
  goldAdvantage: number[] = [];
  empireTick = [];
  madeGraph = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.DetailGamesList) {
      this.madeGraph = this.makeGraph();
      console.log(this.madeGraph);
    }
  }
  ngOnInit() {}
  makeGraph() {
    if (!this.DetailGamesList) {
      return false;
    }
    if (this.empireTick.length > 0) {
      return true;
    }
    if (this.DetailGamesList.Content[0].empGoldHist.length === 0) {
      return false;
    }
    // Add the initial tick to be 0
    this.empireTick.push(0);
    this.northEmpTotal.push(0);
    this.southEmpTotal.push(0);
    this.goldAdvantage.push(0);

    this.DetailGamesList.Content[0].empGoldHist.forEach(gold => {
      this.empireTick.push(Math.floor(gold.EmpireGoldCount * 4));
      this.northEmpTotal.push(Math.floor(gold.North_gold));
      this.southEmpTotal.push(Math.floor(gold.South_Gold * -1));
      this.goldAdvantage.push(
        Math.floor(
          (gold.South_Gold - gold.North_gold) /
            (0.1 + 0.8 * (1 / Math.sqrt(gold.EmpireGoldCount)))
        )
      );
    });

    if (this.empireTick.length > 0) {
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
              fill: false
            },
            {
              label: 'South Gold Awarded',
              data: this.southEmpTotal,
              borderColor: '#55FF55',
              backgroundColor: '#55FF55',
              fill: false
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
          plugins: {
            legend: {
              display: true
            }
          },
          scales: {
            x: {
              display: true
            },
            y: {
              display: true
            }
          }
        }
      });
      return true;
    }
    return false;
  }
}
