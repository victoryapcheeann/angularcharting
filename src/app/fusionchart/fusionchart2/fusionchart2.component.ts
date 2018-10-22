import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fusionchart2',
  styleUrls: ['./fusionchart2.component.css'],
  template: `
  <fusioncharts
    [width]="width"
    [height]="height"
    [type]="type"
    [dataFormat]="dataFormat"
    [dataSource]="dataSource">
  </fusioncharts>`
})
export class Fusionchart2Component{
    width = 600;
    height = 400;
    type = 'pareto2d';
    dataFormat = 'json';
    dataSource = {
      "chart": {
      "caption": " Top Hardware Defects Frequency",
      "subcaption": "Last year - ACME Computers",
      "theme": "fusion",
      "yaxisname": "# reported instances",
      "syaxisname": "% of total instances",
      "decimals": "1",
    "drawcrossline": "1"
    },
    "data": [
    {
      "label": "Hard-Disk",
      "value": "40"
    },
    {
      "label": "PCB",
      "value": "22"
    },
    {
      "label": "Printer",
      "value": "12"
    },
    {
      "label": "CDROM",
      "value": "10"
    },
    {
      "label": "Keyboard",
      "value": "6"
    }
    ]
  }
}
