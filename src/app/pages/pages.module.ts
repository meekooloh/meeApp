import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { ComponentsModule } from './../components/components.module';
import { DirectivesModule } from './../directives/directives.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    DirectivesModule 
  ],
  exports: [
    MainPageComponent,
  ],
  declarations: [
    MainPageComponent,

  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PagesModule { }
