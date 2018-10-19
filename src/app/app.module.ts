import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FusionChartsModule } from 'angular-fusioncharts';

// Load FusionCharts
import FusionCharts from 'fusioncharts/core';
// Load Charts module
import Pie3d from "fusioncharts/viz/pie3d";
import Pareto2d from "fusioncharts/viz/pareto2d";
import Heatmap from "fusioncharts/viz/Heatmap";
// Load fusion theme
import FusionTheme from 'fusioncharts/themes/es/fusioncharts.theme.fusion';

// Add dependencies to FusionChartsModule
FusionChartsModule.fcRoot(FusionCharts, Pie3d, Pareto2d, Heatmap, FusionTheme);

import { Fusionchart1Component } from './fusionchart1/fusionchart1.component';
import { Fusionchart2Component } from './fusionchart2/fusionchart2.component';
import { Fusionchart3Component } from './fusionchart3/fusionchart3.component'

@NgModule({
  declarations: [
    AppComponent,
    Fusionchart1Component,
    Fusionchart2Component,
    Fusionchart3Component
  ],
  imports: [
    BrowserModule,
    FusionChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
