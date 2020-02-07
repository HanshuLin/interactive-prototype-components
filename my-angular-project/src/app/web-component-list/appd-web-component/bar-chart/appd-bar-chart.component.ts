import {Component, OnInit} from '@angular/core';
import {
  CartesianChartConfig,
  CartesianSeriesConfig,
  CartesianVisualizationType,
  CartesianSeriesStackingType,
  CartesianDataPoint,
  AxisType,
  LegendAlign} from '@appd/components';
import {range} from 'lodash';
import * as _ from "lodash";

@Component({
  selector: 'app-appd-bar-chart',
  templateUrl: './appd-bar-chart.component.html'
})
export class AppdBarChartComponent implements OnInit{

  public chartConfig: any;
  public seriesConfigs: any;

  constructor() {
    this.chartConfig = this.getChartConfig();
    this.seriesConfigs = this.getSeriesConfigs();
  }

  ngOnInit() {}

  private getData(): NCovData[] {
    return [
      {name: 'Anhui', lat: 30.6007, lon: 117.9249, confirmed: 1, death: 0},
      {name: 'Beijing', lat: 39.9042, lon: 116.4074, confirmed: 14, death: 1},
      {name: 'Chongqing', lat: 29.4316, lon: 106.9123, confirmed: 6, death: 2},
      {name: 'Fujian', lat: 26.4837, lon: 117.9249, confirmed: 1, death: 0},
      {name: 'Guangdong', lat: 23.3790, lon: 113.7633, confirmed: 26, death: 0},
      {name: 'Guangxi', lat: 23.7248, lon: 108.8076, confirmed: 2, death: 0},
      {name: 'Guizhou', lat: 26.8430, lon: 107.2903, confirmed: 1, death: 0},
      {name: 'Hainan', lat: 19.5664, lon: 109.9497, confirmed: 4, death: 1},
      {name: 'Hebei', lat: 37.8957, lon: 114.9042, confirmed: 1, death: 1},
      {name: 'Henan', lat: 34.2904, lon: 113.3824, confirmed: 5, death: 2},
      {name: 'Hubei', lat: 30.9667, lon: 112.2333, confirmed: 444, death: 350},
      {name: 'Hunan', lat: 27.6253, lon: 111.8569, confirmed: 4, death: 0},
      {name: 'Jiangsu', lat: 33.1402, lon: 119.7889, confirmed: 1, death: 0},
      {name: 'Jiangxi', lat: 27.0875, lon: 114.9042, confirmed: 2, death: 0},
      {name: 'Liaoning', lat: 41.9437, lon: 122.5290, confirmed: 2, death: 0},
      {name: 'Macau', lat: 22.1987, lon: 113.5439, confirmed: 1, death: 0},
      {name: 'Ningxia', lat: 37.1987, lon: 106.1581, confirmed: 1, death: 0},
      {name: 'shangdong', lat: 31.2304, lon: 121.4737, confirmed: 2, death: 0},
      {name: 'Shanghai', lat: 30.9667, lon: 112.2333, confirmed: 9, death: 1},
      {name: 'Shanxi', lat: 37.2426, lon: 111.8569, confirmed: 1, death: 0},
      {name: 'Sichuan', lat: 30.2638, lon: 102.8055, confirmed: 5, death: 1},
      {name: 'Taiwan', lat: 23.6978, lon: 120.9605, confirmed: 1, death: 0},
      {name: 'Tianjin', lat: 39.3434, lon: 117.3616, confirmed: 4, death: 0},
      {name: 'Seattle', lat: 47.6062, lon: -122.3321, confirmed: 1, death: 0},
      {name: 'Yunnan', lat: 24.4753, lon: 101.3431, confirmed: 1, death: 0},
      {name: 'Zhejiang', lat: 29.1416, lon: 119.7889, confirmed: 10, death: 0},
      {name: 'Japan', lat: 362048, lon: 138.2529, confirmed: 2, death: 0},
      {name: 'Thailand', lat: 15.8700, lon: 100.9925, confirmed: 2, death: 0},
      {name: 'South Korea', lat: 35.9078, lon: 127.7669, confirmed: 1, death: 0},
    ];
  }

  private getChartConfig(): CartesianChartConfig {
    const cata: string[] =  _.map(this.getData(), (data: NCovData) => {
        return data.name;
    });

    return {
      title: 'nCov Report',
      legend: {
        align: LegendAlign.BOTTOM,
      },
      xAxis: [
        {
          type: AxisType.CATEGORY,
          categories: cata
        }
      ],
      yAxis: [
        {
          title: 'Confirms and Deaths',
          unit: ''
        }
      ],
      stacking: CartesianSeriesStackingType.NORMAL
    };
  }

  private getSeriesConfigs(): CartesianSeriesConfig[] {

    const confirmedData: CartesianDataPoint[] = _.map(this.getData(), (data: NCovData) => {
      return {
        name: data.name,
        y: data.confirmed
      };
    });

    const deathData: CartesianDataPoint[] = _.map(this.getData(), (data: NCovData) => {
      return {
        name: data.name,
        y: data.death
      };
    });


    return [
      {
        name: 'Confirmed',
        visualizationType: CartesianVisualizationType.Column,
        data: confirmedData
      },
      {
        name: 'Deaths',
        visualizationType: CartesianVisualizationType.Column,
        data: deathData
      }
    ];
  }
}

export interface NCovData {
  name: string;
  lat: number;
  lon: number;
  confirmed: number;
  death: number;
}
