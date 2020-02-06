import {Component, OnInit} from '@angular/core';
import {
  CartesianChartConfig,
  CartesianSeriesConfig,
  CartesianVisualizationType,
  CartesianSeriesStackingType,
  AxisType,
  LegendAlign} from '@appd/components';
import {range} from 'lodash';

@Component({
  selector: 'app-appd-area-chart',
  templateUrl: './appd-area-chart.component.html',
  styleUrls: ['./appd-area-chart.component.css']
})
export class AppdAreaChartComponent implements OnInit {

  public chartConfig: any;
  public seriesConfigs: any;

  constructor() {
    this.chartConfig = this.getChartConfig();
    this.seriesConfigs = this.getSeriesConfigs();
  }

  ngOnInit() {}

  private getChartConfig(): CartesianChartConfig {
    return {
      title: 'Area Chart',
      legend: {
        align: LegendAlign.BOTTOM,
        visible: true
      },
      xAxis: [{
        type: AxisType.DATETIME
      }],
      yAxis: [{
        title: 'Y Title'
      }],
      stacking: CartesianSeriesStackingType.NORMAL
    };
  }

  private getSeriesConfigs(): CartesianSeriesConfig[] {
    return [
      {
        name: 'S2',
        visualizationType: CartesianVisualizationType.Area,
        data: [
          {
            x: new Date(2017, 0, 1).getTime(),
            y: null,
          },
          {
            x: new Date(2017, 0, 2).getTime(),
            y: 40.01150728932606,
          },
          {
            x: new Date(2017, 0, 3).getTime(),
            y: 19.31233866787413,
          },
          {
            x: new Date(2017, 0, 4).getTime(),
            y: 7.95335172491135,
          },
          {
            x: new Date(2017, 0, 5).getTime(),
            y: 123.53481045173753,
          },
          {
            x: new Date(2017, 0, 6).getTime(),
            y: 222.42395831205764,
          },
          {
            x: new Date(2017, 0, 7).getTime(),
            y: 0.01500893236933143,
          },
          {
            x: new Date(2017, 0, 8).getTime(),
            y: 169.06050765770325,
          },
          {
            x: new Date(2017, 0, 9).getTime(),
            y: 192.79254698944436,
          },
        ],
      },
      {
        name: 'S1',
        visualizationType: CartesianVisualizationType.Area,
        data: [
          {
            x: new Date(2017, 0, 1).getTime(),
            y: null,
          },
          {
            x: new Date(2017, 0, 2).getTime(),
            y: 28934,
          },
          {
            x: new Date(2017, 0, 3).getTime(),
            y: 232945,
          },
          {
            x: new Date(2017, 0, 4).getTime(),
            y: 293847,
          },
          {
            x: new Date(2017, 0, 5).getTime(),
            y: 245,
          },
          {
            x: new Date(2017, 0, 6).getTime(),
            y: 22764,
          },
          {
            x: new Date(2017, 0, 7).getTime(),
            y: 63143,
          },
          {
            x: new Date(2017, 0, 8).getTime(),
            y: 16925,
          },
          {
            x: new Date(2017, 0, 9).getTime(),
            y: 144436,
          },
        ],
      },
    ];
  }
}
