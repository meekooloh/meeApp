import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { WindowService } from './services/window.service';

import { GeolocationService } from '../app/services/geolocation.service';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCUH-WneVvU4TupJAbGICXYPthn92MO7oM'
    }),
    CommonModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    GeolocationService,
    WindowService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
