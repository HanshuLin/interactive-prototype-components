import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { CartesianModuleV1 } from '@appd/components';
import {MyElementComponent} from './main-page/my-element.component';

import {createCustomElement} from '@angular/elements';
import {AppdAreaChartComponent} from './appd-component/appd-area-chart.component';

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
    AppdAreaChartComponent,
  ],
  entryComponents: [AppdAreaChartComponent],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {

  constructor(injector: Injector) {
    const areaChartElem = createCustomElement(AppdAreaChartComponent, {injector});
    customElements.define('appd-area-chart', areaChartElem);
  }

  ngDoBootstrap() {}
}
