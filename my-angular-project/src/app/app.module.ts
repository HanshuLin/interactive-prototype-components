import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import {CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { TopBarComponent } from './main-page/top-bar/top-bar.component';
import { CartService } from './cart.service';

import { CardModuleV1, CartesianModuleV1 } from '@appd/components';
import {MyElementComponent} from './main-page/my-element.component';
import {WebComponentListComponent} from './web-component-list/web-component-list.component';
import {AppdLineChartComponent} from './web-component-list/appd-web-component/line-chart/appd-line-chart.component';

import {createCustomElement} from '@angular/elements';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    CardModuleV1,
    CartesianModuleV1,
    RouterModule.forRoot([
      { path: '', component: MyElementComponent },
      { path: 'web', component: WebComponentListComponent }
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    MyElementComponent,
    AppdLineChartComponent,
    WebComponentListComponent
  ],
  entryComponents: [
    AppdLineChartComponent],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [CartService]
})
export class AppModule {

  constructor(injector: Injector) {
    const lineChartElem = createCustomElement(AppdLineChartComponent, {injector});
    customElements.define('appd-line-chart', lineChartElem);
  }

  ngDoBootstrap() {}
}
