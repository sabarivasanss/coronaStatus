import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { RouterModule } from '@angular/router';
import { MapviewComponent } from './mapview/mapview.component'
import { CountryListComponent } from './country-list/country-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DeathcountComponent } from './deathcount/deathcount.component';
import { RecovercountComponent } from './recovercount/recovercount.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { LineChartComponent } from './line-chart/line-chart.component';
 
@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    CountryListComponent,
    MapviewComponent,
    DeathcountComponent,
    RecovercountComponent,
    LineChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleChartsModule,
    FormsModule,
    GoogleChartsModule.forRoot({ mapsApiKey: 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY' })
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
