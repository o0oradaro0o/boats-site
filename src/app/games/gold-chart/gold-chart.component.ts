import {
  Component,
  OnInit,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges
} from '@angular/core';
import { GameDetailContent } from 'src/app/models/game-detail';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

// ─── helpers ────────────────────────────────────────────────────────────────

/** Convert seconds to "M:SS" display string. */
function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

/** Format a number with locale separators (e.g. 1,234). */
function fmt(n: number): string {
  return Math.abs(n).toLocaleString();
}

// ─── colour palette (matches site theme) ────────────────────────────────────

const C = {
  bg:        'rgba(7, 14, 30, 0.85)',   // ocean-deep
  text:      'rgba(212, 237, 247, 0.5)', // foam @ 50 %
  grid:      'rgba(74, 123, 247, 0.07)', // blue-500 @ 7 %
  northLine: '#4A7BF7',                   // blue-500
  northFill: 'rgba(74, 123, 247, 0.18)',
  southLine: '#FF96A0',                   // red-500
  southFill: 'rgba(255, 150, 160, 0.18)',
  advLine:   '#FFFAA3',                   // yellow-500
  advFill:   'rgba(255, 250, 163, 0.10)',
  tooltipBg: 'rgba(15, 32, 64, 0.94)',
} as const;

// ─── shared scale defaults ─────────────────────────────────────────────────

const scaleOpts = {
  display: true,
  ticks: {
    color: C.text,
    font: { size: 10, family: "'Segoe UI', system-ui, sans-serif" },
  },
  grid: { color: C.grid },
} as const;

// ─── component ──────────────────────────────────────────────────────────────

@Component({
  selector: 'game-gold-chart',
  templateUrl: './gold-chart.component.html',
  styleUrls: ['./gold-chart.component.scss'],
})
export class GameGoldChartComponent implements OnInit, OnChanges, OnDestroy {
  @Input() DetailGamesList: GameDetailContent;

  chart: Chart | null = null;
  northEmpTotal: number[] = [];
  southEmpTotal: number[] = [];
  goldAdvantage: number[] = [];
  empireTick: number[] = [];
  madeGraph = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.DetailGamesList) {
      this.processData();
    }
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.destroyChart();
  }

  // ── life-cycle helpers ──────────────────────────────────────────────────

  private destroyChart() {
    if (this.chart) {
      this.chart.destroy();
      this.chart = null;
    }
  }

  // ── data processing ─────────────────────────────────────────────────────

  private processData() {
    this.destroyChart();

    const list = this.DetailGamesList;
    if (!list?.Content?.[0]) {
      this.madeGraph = false;
      return;
    }

    const hist = list.Content[0].empGoldHist;
    if (!hist?.length) {
      this.madeGraph = false;
      return;
    }

    // Build datasets from scratch every time.
    this.empireTick     = [0];
    this.northEmpTotal  = [0];
    this.southEmpTotal  = [0];
    this.goldAdvantage  = [0];

    for (const g of hist) {
      this.empireTick.push(Math.floor(g.EmpireGoldCount * 4));
      this.northEmpTotal.push(Math.floor(g.North_gold));
      this.southEmpTotal.push(Math.floor(g.South_Gold * -1));
      const adv =
        (g.South_Gold - g.North_gold) /
        (0.1 + 0.8 * (1 / Math.sqrt(Math.max(g.EmpireGoldCount, 1))));
      this.goldAdvantage.push(Math.floor(adv));
    }

    this.madeGraph = true;
    setTimeout(() => this.createChart(), 0);
  }

  // ── chart rendering ─────────────────────────────────────────────────────

  private createChart() {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement | null;
    if (!canvas) return;

    this.destroyChart();

    this.chart = new Chart(canvas, {
      type: 'line',
      data: {
        labels: this.empireTick,
        datasets: [
          {
            label: 'North Gold',
            data: this.northEmpTotal,
            borderColor: C.northLine,
            backgroundColor: C.northFill,
            borderWidth: 2,
            fill: true,
            pointRadius: 0,
            tension: 0.12,
          },
          {
            label: 'South Gold',
            data: this.southEmpTotal,
            borderColor: C.southLine,
            backgroundColor: C.southFill,
            borderWidth: 2,
            fill: true,
            pointRadius: 0,
            tension: 0.12,
          },
          {
            label: 'Gold Advantage',
            data: this.goldAdvantage,
            borderColor: C.advLine,
            backgroundColor: C.advFill,
            borderWidth: 1.5,
            borderDash: [4, 3],
            fill: false,
            pointRadius: 0,
            tension: 0.12,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        backgroundColor: 'transparent',

        plugins: {
          legend: {
            display: true,
            position: 'top',
            labels: {
              color: C.text,
              font: { size: 11, family: "'Segoe UI', system-ui, sans-serif" },
              boxWidth: 16,
              padding: 18,
              usePointStyle: true,
              pointStyle: 'line',
            },
          },
          tooltip: {
            enabled: true,
            mode: 'index',
            intersect: false,
            backgroundColor: C.tooltipBg,
            titleColor: '#d4edf7',
            bodyColor: '#d4edf7',
            borderColor: 'rgba(74, 123, 247, 0.25)',
            borderWidth: 1,
            padding: { top: 10, right: 14, bottom: 10, left: 14 },
            titleFont: { size: 11, weight: 600 as const },
            bodyFont: { size: 12 },
            callbacks: {
              title: (items) => `⏱  Game Time — ${formatTime(+items[0].label)}`,
              label: (ctx) => {
                const raw = ctx.parsed.y;
                const ds = ctx.dataset.label ?? '';
                if (ds === 'South Gold') {
                  return ` ${ds}:  ${fmt(raw)} gold`;
                }
                if (ds === 'Gold Advantage') {
                  const dir = raw >= 0 ? 'South' : 'North';
                  return ` ${ds}:  ${fmt(raw)} (${dir} leads)`;
                }
                return ` ${ds}:  ${fmt(raw)} gold`;
              },
            },
          },
        },

        scales: {
          x: {
            type: 'category',
            ...scaleOpts,
            title: {
              display: true,
              text: 'Game Time',
              color: C.text,
              font: { size: 10, family: "'Segoe UI', system-ui, sans-serif" },
              padding: { top: 6 },
            },
            ticks: {
              ...scaleOpts.ticks,
              maxTicksLimit: 10,
              callback: (v) => {
                const label = this.empireTick[+v];
                return label !== undefined ? formatTime(label) : '';
              },
            },
          },
          y: {
            ...scaleOpts,
            title: {
              display: true,
              text: 'Gold Earned',
              color: C.text,
              font: { size: 10, family: "'Segoe UI', system-ui, sans-serif" },
              padding: { bottom: 6 },
            },
            ticks: {
              ...scaleOpts.ticks,
              callback: (v) => fmt(+v),
            },
          },
        },

        // ── hover ────────────────────────────────────────────────────────
        interaction: {
          mode: 'nearest',
          axis: 'x',
          intersect: false,
        },
        hover: {
          mode: 'index',
          intersect: false,
        },
      },
    });
  }
}
