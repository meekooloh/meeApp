import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from './components/components.module';
import { PipesModule } from './pipes/pipes.module';
import { HttpModule } from "@angular/http";

import { WindowService } from './services/window.service';
import { TodoService } from './services/todo.service';
import { PostService } from './services/post.service';
import { CategoryService } from './services/category.service';
import { ApiService } from './services/api.service';
import { RequestService } from './services/request.service';

import { GeolocationService } from '../app/services/geolocation.service';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { TranslateService }   from './translate/translate.service';
import { TRANSLATION_PROVIDERS }   from './translate/translation';
import { MomentModule } from 'angular2-moment/moment.module';

import { routing } from "./app.routing";

@NgModule({
  imports: [
    BrowserModule,
    MomentModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCUH-WneVvU4TupJAbGICXYPthn92MO7oM'
    }),
    routing,
    CommonModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    PipesModule,
    Ng2CarouselamosModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    GeolocationService,
    WindowService,
    PostService,
    CategoryService,
    TodoService,
    ApiService,
    RequestService,
    TRANSLATION_PROVIDERS,
    TranslateService ,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
