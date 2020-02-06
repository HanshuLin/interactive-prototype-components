import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import {CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { TopBarComponent } from './main-page/top-bar/top-bar.component';
import { CartService } from './cart.service';

import { CardModuleV1, CartesianModuleV1, BannersModuleV1, PieModuleV1 } from '@appd/components';
import {MyElementComponent} from './main-page/my-element.component';
import {WebComponentListComponent} from './web-component-list/web-component-list.component';
import {AppdLineChartComponent} from './web-component-list/appd-web-component/line-chart/appd-line-chart.component';

import {createCustomElement} from '@angular/elements';
import {AppdBarChartComponent} from './web-component-list/appd-web-component/bar-chart/appd-bar-chart.component';
import {AppdBannerComponent} from './web-component-list/appd-web-component/banner/appd-banner.component';
import {AppdAreaChartComponent} from './web-component-list/appd-web-component/area-chart/appd-area-chart.component';
import {AppdPieChartComponent} from './web-component-list/appd-web-component/pie-chart/appd-pie-chart.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BannersModuleV1,
    PieModuleV1,
    CardModuleV1,
    CartesianModuleV1,
    RouterModule.forRoot([
      { path: '', component: MyElementComponent }
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    MyElementComponent,
    AppdAreaChartComponent,
    AppdLineChartComponent,
    AppdBarChartComponent,
    AppdBannerComponent,
    AppdPieChartComponent,
    WebComponentListComponent
  ],
  entryComponents: [
    AppdAreaChartComponent,
    AppdLineChartComponent,
    AppdBarChartComponent,
    AppdPieChartComponent,
    AppdBannerComponent
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [CartService]
})
export class AppModule {

  constructor(injector: Injector) {
    const areaChartElem = createCustomElement(AppdAreaChartComponent, {injector});
    customElements.define('appd-area-chart', areaChartElem);

    const lineChartElem = createCustomElement(AppdLineChartComponent, {injector});
    customElements.define('appd-line-chart', lineChartElem);

    const barChartElem = createCustomElement(AppdBarChartComponent, {injector});
    customElements.define('appd-bar-chart', barChartElem);

    const bannerElem = createCustomElement(AppdBannerComponent, {injector});
    customElements.define('appd-banner', bannerElem);

    const pieChartElem = createCustomElement(AppdPieChartComponent, {injector});
    customElements.define('appd-pie-chart', pieChartElem);
  }

  ngDoBootstrap() {}
}
