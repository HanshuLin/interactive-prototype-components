import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { CartesianModuleV1 } from '@appd/components';
import {MyElementComponent} from './main-page/my-element.component';

import {createCustomElement} from '@angular/elements';
import {AppdBarChartComponent} from './appd-bar-chart/appd-bar-chart.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    CartesianModuleV1,
    RouterModule.forRoot([
      { path: '', component: MyElementComponent }
    ])
  ],
  declarations: [
    AppComponent,
    MyElementComponent,
    AppdBarChartComponent,
  ],
  entryComponents: [AppdBarChartComponent],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {

  constructor(injector: Injector) {
    const barChartElem = createCustomElement(AppdBarChartComponent, {injector});
    customElements.define('appd-bar-chart', barChartElem);
  }

  ngDoBootstrap() {}
}
