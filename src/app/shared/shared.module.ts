import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageBannerComponent } from './page-banner/page-banner.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PageBannerComponent],
  exports: [PageBannerComponent]
})
export class SharedModule {}
