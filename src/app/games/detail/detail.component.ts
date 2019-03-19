import { Component, OnInit, Input } from '@angular/core';
import { GameDetailContent } from 'src/app/models/game-detail';

@Component({
  selector: 'game-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class GameDetailComponent implements OnInit {
  @Input() DetailGamesList: GameDetailContent;
  constructor() { }

  ngOnInit() {
  }

  FixDate(date)
  {
    const somedate = new Date(date);
    somedate.setMinutes(-somedate.getTimezoneOffset());
    return somedate.toLocaleDateString() + ' ' + somedate.toLocaleTimeString();
  }
  FixTime(time)
  {
    if (!time) {
      return '--';
    } else {
      const totalSecs = +time;
      const hours = totalSecs / 3600;
      const minutes = (totalSecs % 3600) / 60;
      const seconds = totalSecs % 60;
      let minSep = '0';
      let secSeo = '0';
      if (seconds > 10) {
        secSeo = '';
      }
      if (minutes > 10) {
        minSep = '';
      }
      if (hours > 1) {

        return Math.floor(hours) + ':' + minSep + Math.floor(minutes) + ':' + secSeo + seconds;
      } else {

       return Math.floor(minutes) + ':' + secSeo + seconds;
      }
    }
    return '--';
  }
}
