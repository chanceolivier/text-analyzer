import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TextService } from './text.service';
import { ChartModule } from 'angular2-highcharts';

import { AppComponent } from './app.component';
import { CustomComponent } from './custom.component';
import { PresentationComponent } from './presentation.component';

declare var require: any;

@NgModule({
  declarations: [
    AppComponent,
    CustomComponent,
    PresentationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ChartModule.forRoot(require('highcharts')),
  ],
  providers: [TextService],
  bootstrap: [AppComponent]
})
export class AppModule { }
