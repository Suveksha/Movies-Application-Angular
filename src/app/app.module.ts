import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RandomApp } from './randon';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { BannerComponent } from './banner/banner.component';
import { Component1Component } from './component1/component1.component';

@NgModule({
  declarations: [
    AppComponent,
    RandomApp,
    MoviesListComponent,
    BannerComponent,
    Component1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
