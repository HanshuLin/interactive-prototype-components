import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import {CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CartService } from './cart.service';

import { CardModuleV1 } from '@appd/components';
import {MyElementComponent} from './element/my-element.component';
import {MyChartComponent} from './my-chart/my-chart.component';
import {WebComponentListComponent} from './web-component-list/web-component-list.component';
import {AppdComponentListComponent} from './appd-component-list/appd-component-list.component';
import {createCustomElement} from '@angular/elements';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    CardModuleV1,
    RouterModule.forRoot([
      { path: '', component: MyElementComponent },
      { path: 'chart', component: MyChartComponent },
      { path: 'appd', component: AppdComponentListComponent },
      { path: 'web', component: WebComponentListComponent }
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    MyElementComponent,
    AppdComponentListComponent,
    WebComponentListComponent,
    MyChartComponent
  ],
  entryComponents: [WebComponentListComponent],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [CartService]
})
export class AppModule {

  constructor(injector: Injector) {
    const el = createCustomElement(WebComponentListComponent, {injector});
    customElements.define('web-comp', el);
  }

  ngDoBootstrap() {}
}
