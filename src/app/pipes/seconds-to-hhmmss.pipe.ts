import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondsToHhmmss'
})
export class SecondsToHhmmssPipe implements PipeTransform {
  transform(input: number): string {
    const hours = Math.floor(input / 3600);
    const minutes = Math.floor((input - hours * 3600) / 60);
    const seconds = input - hours * 3600 - minutes * 60;

    let hh = '' + hours;
    let mm = '' + minutes;
    let ss = '' + seconds;

    if (hours < 10) {
      hh = '0' + hours;
    }
    if (minutes < 10) {
      mm = '0' + minutes;
    }
    if (seconds < 10) {
      ss = '0' + seconds;
    }
    if (hours > 0) {
      return hh + ':' + mm + ':' + ss;
    } else {
      return mm + ':' + ss;
    }
  }
}
