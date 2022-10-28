import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HowLongAgoPipe } from '../pipes/how-long-ago.pipe';
import { SecondsToHhmmssPipe } from '../pipes/seconds-to-hhmmss.pipe';

@NgModule({
  declarations: [HowLongAgoPipe, SecondsToHhmmssPipe],
  imports: [CommonModule],
  exports: [HowLongAgoPipe, SecondsToHhmmssPipe]
})
export class PipesModule {
  static forRoot() {
    return {
      ngModule: PipesModule
    };
  }
}
