import { Component } from '@angular/core';

@Component({
  selector: 'app-fusionchart1',
  styleUrls: ['./fusionchart1.component.css'],
  template: `    
  <fusioncharts 
    width="600" 
    height="400"
    type="pie3d"
    [dataSource]=dataSource >
  </fusioncharts>
  `
})
export class Fusionchart1Component {
  dataSource = {
    "chart": {
       "caption": "Recommended Portfolio Split",
       "subCaption": "For a net-worth of $1M",
       "showValues": "1",
       "showPercentInTooltip": "0",
       "numberPrefix": "$",
       "enableMultiSlicing": "1",
       "theme": "fusion"
    },
    "data": [{
       "label": "Equity",
       "value": "300000"
    }, {
       "label": "Debt",
       "value": "230000"
    }, {
       "label": "Bullion",
       "value": "180000"
    }, {
       "label": "Real-estate",
       "value": "270000"
    }, {
       "label": "Insurance",
       "value": "20000"
    }]
 }
}