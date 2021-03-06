import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './dashboard/main/main.component';
import { TimelineComponent } from './dashboard/timeline/timeline.component';
import { LanguageGridComponent } from './dashboard/language-grid/language-grid.component';
import { ProgrammingDifficultyComponent } from './dashboard/programming-difficulty/programming-difficulty.component';
import { AngularTiltModule } from 'angular-tilt';
import { CodingGifComponent } from './ui-elements/coding-gif/coding-gif.component';
// import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TimelineComponent,
    LanguageGridComponent,
    ProgrammingDifficultyComponent,
    CodingGifComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularTiltModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
