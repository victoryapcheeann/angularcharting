import { Syncfusion1Component } from './syncfusion1/syncfusion1.component';
import { Syncfusion2Component} from './syncfusion2/syncfusion2.component';

import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
/**
 * Chart Control
 */
import { NgModule, ModuleWithProviders, Type } from '@angular/core';

import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { ChartAllModule, AccumulationChartAllModule, RangeNavigatorAllModule } from '@syncfusion/ej2-angular-charts';

import { SharedModule } from './common/shared.module';

@NgModule({
    imports: [ChartAllModule, RangeNavigatorAllModule, SharedModule, ButtonModule, AccumulationChartAllModule,
        NumericTextBoxModule, HttpModule, JsonpModule, BrowserModule],
declarations: [Syncfusion1Component, Syncfusion2Component],
bootstrap: [Syncfusion1Component, Syncfusion2Component],
exports: [
    Syncfusion1Component, Syncfusion2Component
  ],
})

export class SyncfusionModule { }