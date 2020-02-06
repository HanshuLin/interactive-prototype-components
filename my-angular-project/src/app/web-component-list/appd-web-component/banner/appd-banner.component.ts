import {Component, OnInit} from '@angular/core';
import {
  BannerType,
  BannerConfig
} from '@appd/components';
import {range} from 'lodash';

@Component({
  selector: 'app-appd-banner',
  templateUrl: './appd-banner.component.html',
  styleUrls: ['./appd-banner.component.css']
})
export class AppdBannerComponent implements OnInit {

  public banners: BannerConfig[];

  constructor() {
    this.banners = this.getBanners();
  }

  ngOnInit() {}

  private getBanners(): BannerConfig[] {
    return [
      {
        title: 'Detailed Banner Title',
        message: 'Additional information or details',
        bannerType: BannerType.Info
      }
    ];
  }
}
