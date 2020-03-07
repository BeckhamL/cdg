import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './dashboard/main/main.component';
import { TimelineComponent } from './dashboard/timeline/timeline.component';
// import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
