import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

// Layout Components
import { AppComponent } from './app.component';
import { BrochureLayoutComponent } from './_layout/brochure-layout/brochure-layout.component';
import { BrochureNavComponent } from './_layout/brochure-nav/brochure-nav.component';
import { BrochureFooterComponent } from './_layout/brochure-footer/brochure-footer.component';

import { PipesModule } from './pipes/pipes.module';

// Page Components
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    PipesModule.forRoot()
  ],
  declarations: [
    AppComponent,
    BrochureLayoutComponent,
    BrochureNavComponent,
    BrochureFooterComponent,
    HomepageComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
