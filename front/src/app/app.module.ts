import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomComponent } from './custom.component';
import { PresentationComponent } from './presentation.component';
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
