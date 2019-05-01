import { Pipe, PipeTransform } from '@angular/core';

/*
  Takes a string that can be transformed into a Date object as
  input and returns a string representing how long ago it was.
*/
@Pipe({
  name: 'howLongAgo'
})
export class HowLongAgoPipe implements PipeTransform {
  transform(dateString: string): string {
    const timeDifferenceMS = Date.now() - +new Date(dateString);
    return this.secondsToHowLongAgo(timeDifferenceMS / 1000);
  }

  secondsToHowLongAgo(seconds: number) {
    const minute = 60;
    const hour = minute * 60;
    const day = hour * 24;
    const month = day * 30;
    const year = 31557600; // fuck rent

    if (seconds > year) {
      return `${Math.floor(seconds / year)} year${this.isPlural(
        seconds,
        year
      )} ago`;
    } else if (seconds > month) {
      return `${Math.floor(seconds / month)} month${this.isPlural(
        seconds,
        month
      )} ago`;
    } else if (seconds > day) {
      return `${Math.floor(seconds / day)} day${this.isPlural(
        seconds,
        day
      )} ago`;
    } else if (seconds > hour) {
      return `${Math.floor(seconds / hour)} hour${this.isPlural(
        seconds,
        hour
      )} ago`;
    } else if (seconds > minute) {
      return `${Math.floor(seconds / minute)} minute${this.isPlural(
        seconds,
        minute
      )} ago`;
    } else {
      return `${seconds} second${this.isPlural(seconds, 1)} ago`;
    }
  }

  isPlural(seconds: number, divisor: number) {
    return seconds / divisor > 2 ? 's' : '';
  }
}
