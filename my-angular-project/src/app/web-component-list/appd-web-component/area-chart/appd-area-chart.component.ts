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
import * as _ from 'lodash';
import {NCovCityTimeseries, NCovTimeseriesDataPoint} from '../line-chart/appd-line-chart.component';

@Component({
  selector: 'app-appd-area-chart',
  templateUrl: './appd-area-chart.component.html'
})
export class AppdAreaChartComponent implements OnInit {

  public chartConfig: any;
  public seriesConfigs: any;

  constructor() {
    this.chartConfig = this.getChartConfig();
    this.seriesConfigs = this.getSeriesConfigs();
  }

  ngOnInit() {}

  private getData(): NCovCityTimeseries[] {
    return [
      {
        name: 'Hubei',
        data: [
          {time: 1579723200000, confirmed: 444, death: 0},
          {time: 1579809600000, confirmed: 444, death: 17},
          {time: 1579896000000, confirmed: 549, death: 24},
          {time: 1579982400000, confirmed: 1052, death: 52},
          {time: 1580068800000, confirmed: 1423, death: 76},
          {time: 1580155200000, confirmed: 2714, death: 100},
          {time: 1580241600000, confirmed: 3554, death: 125},
          {time: 1580328000000, confirmed: 4586, death: 162},
          {time: 1580414400000, confirmed: 5806, death: 204},
          {time: 1580500800000, confirmed: 7153, death: 249},
          {time: 1580587200000, confirmed: 9074, death: 294},
          {time: 1580673600000, confirmed: 11177, death: 350},
          {time: 1580760000000, confirmed: 13522, death: 414}
        ]
      },
      {
        name: 'China',
        data: [
          {time: 1579723200000, confirmed: 579, death: 0},
          {time: 1579809600000, confirmed: 844, death: 25},
          {time: 1579896000000, confirmed: 1312, death: 41},
          {time: 1579982400000, confirmed: 2015, death: 56},
          {time: 1580068800000, confirmed: 2801, death: 80},
          {time: 1580155200000, confirmed: 4579, death: 106},
          {time: 1580241600000, confirmed: 6061, death: 132},
          {time: 1580328000000, confirmed: 7816, death: 170},
          {time: 1580414400000, confirmed: 9821, death: 213},
          {time: 1580500800000, confirmed: 11948, death: 259},
          {time: 1580587200000, confirmed: 14551, death: 304},
          {time: 1580673600000, confirmed: 17387, death: 362},
          {time: 1580760000000, confirmed: 20626, death: 426}

        ]
      }
    ];
  }

  private getChartConfig(): CartesianChartConfig {
    return {
      title: 'NCoV Deaths',
      legend: {
        align: LegendAlign.BOTTOM,
        visible: true
      },
      xAxis: [{
        type: AxisType.DATETIME
      }],
      yAxis: [{
        title: 'Number of People'
      }],
      stacking: CartesianSeriesStackingType.NORMAL
    };
  }

  private getSeriesConfigs(): CartesianSeriesConfig[] {
    const hubeiData: CartesianDataPoint[] = _.map(
      this.getData()[0].data, (data: NCovTimeseriesDataPoint) => {
        return {
          x: data.time,
          y: data.death
        };
      });

    const chinaData: CartesianDataPoint[] = _.map(
      this.getData()[1].data, (data: NCovTimeseriesDataPoint) => {
        return {
          x: data.time,
          y: data.death
        };
      });

    return [
      {
        name: 'China',
        visualizationType: CartesianVisualizationType.Area,
        data: chinaData
      },
      {
        name: 'Hubei',
        visualizationType: CartesianVisualizationType.Area,
        data: hubeiData
      },
    ];
  }
}
