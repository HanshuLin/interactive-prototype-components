import {Component, OnInit} from '@angular/core';
import { NumberOptions, NumberStyle } from "@appd/common";
import {
  PieDataSliceV1,
  PieLegendOptionsV1,
  PieLegendAlignV1,
  LegendAlign} from '@appd/components';
import {range} from 'lodash';

@Component({
  selector: 'app-appd-pie-chart',
  templateUrl: './appd-pie-chart.component.html',
  styleUrls: ['./appd-pie-chart.component.css']
})
export class AppdPieChartComponent implements OnInit {

  public dataLabels: NumberOptions = { numberStyle: NumberStyle.PERCENT };
  public legend: PieLegendOptionsV1 = { align: PieLegendAlignV1.BOTTOM };
  public data: any[];

  constructor() {
    this.data = this.getData();
  }

  ngOnInit() {}

  private getData(): PieDataSliceV1[] {
    return [
      {
        label: 'Silver',
        value: 34,
      },
      {
        label: 'Platinum',
        value: 31,
      },
      {
        label: 'Bronze',
        value: 12,
      },
      {
        label: 'Diamond',
        value: 10,
      },
      {
        label: 'Gold',
        value: 8,
      },
      {
        label: 'Other',
        value: 5,
      },
    ];
  }
}
