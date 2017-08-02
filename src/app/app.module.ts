import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from './components/components.module';

import { WindowService } from './services/window.service';

import { GeolocationService } from '../app/services/geolocation.service';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { TranslateService }   from './translate/translate.service';
import { TRANSLATION_PROVIDERS }   from './translate/translation';
@NgModule({
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCUH-WneVvU4TupJAbGICXYPthn92MO7oM'
    }),
    CommonModule,
    FormsModule,
    ComponentsModule,

  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    GeolocationService,
    WindowService,
    TRANSLATION_PROVIDERS,
    TranslateService ,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
