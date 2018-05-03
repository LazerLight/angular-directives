import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FaveNumComponent } from './fave-num/fave-num.component';
import { TravelDestinationsComponent } from './travel-destinations/travel-destinations.component';
import { TextPreviewComponent } from './text-preview/text-preview.component';


@NgModule({
  declarations: [
    AppComponent,
    FaveNumComponent,
    TravelDestinationsComponent,
    TextPreviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
