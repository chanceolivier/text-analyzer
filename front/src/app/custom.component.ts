import { Component } from '@angular/core';
import { TextService } from './text.service';
import _ from 'lodash';

@Component({
  selector: 'custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css'],
})
export class CustomComponent {
  currentId: string;
  stats: string = 'Rien pour le moment';
  options = {
            title : { text : ' ' },
             chart: {
                type: 'pie',
                 animation: false
            },
            plotOptions: {
                pie: {
                    innerSize: '40%',
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true,
                    states: {
                      hover: {
                        halo: {
                          size: 0
                        }
                      }
                    }
                },
                   series: {
                    animation: false,
                }
            },
            tooltip: {
                enabled: false
            },
            legend: {
                useHTML: true,
                enabled: true,
                align: 'right',
                verticalAlign: 'top',
                layout: 'vertical',
                x: 0,
              y:30,
                symbolHeight: 12,
                itemMarginBottom: 1,
                symbolWidth: 25,
                symbolRadius: 1,
                labelFormatter: function () {
                    return '<div style="width:180px"><span class="pull-left" style= "font-weight: 500; padding-bottom: 5px">' + this.name +
                    '</span><span class="pull-right" style= "font-weight: 500" >' + this.value +
                    '</span></div> ';
                },
                title: {
            text: ' Issues<br/><span style="font-size: 9px; color: #666; font-weight: normal">Total: 2000</span>'
        },
      },
      series: [{
        data: [{ name: 'AA Test_long_name_for_testing_purpose', value: '5,044', y: 5044 },
                { name: 'BB Test', value: '5,044', y: 5044 },
                { name: 'CC Test', value: '5,355', y: 5355 },
                { name: 'DD Test', value: '5,672', y: 56721 },
                { name: 'EE Test', value: '9,874', y: 98743 }],
        allowPointSelect: true
        }]
      };
      chart;

  constructor(
    private textService: TextService,
  ) {

  }

  saveInstance(chartInstance) {
    this.chart = chartInstance;
  }

  saveText(text): void {
    this.textService.saveText(text).subscribe(
      data => this.stats = data.id
    )
  }

  getStatistics(id: string) {
    this.textService.getStatistics(id).subscribe(
      data => {
        this.stats = JSON.stringify(data);
        this.chart.series[0].setData(this.formatData(data));
      }
    )
  }

  formatData(data): any {
    var res = [];
    _.each(data, (value, key) => {
      res = [ ...res, { name: key, value: value, y: value } ];
    })
    return res;
  }
}
