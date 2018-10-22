import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AmChartsModule } from "@amcharts/amcharts3-angular";

import { Amchart1Component } from './amchart1/amchart1.component';

@NgModule({
  declarations: [
    Amchart1Component
  ],
  imports: [
  	AmChartsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [Amchart1Component],
  exports:[Amchart1Component]
})
export class AmChartModule { }