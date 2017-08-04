import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostComponent } from './post/post.component';

import { TranslatePipe }   from './../translate/translate.pipe';
import { SafePipe }   from './../pipes/safe.pipe';
import { NavFilterComponent } from './nav-filter/nav-filter.component';
import { MetadataDisplayerComponent } from './metadata-displayer/metadata-displayer.component';
import { UserDateInfoComponent } from './user-date-info/user-date-info.component';
import { PipesModule } from './../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PipesModule
  ],
  exports:[
  	PostComponent,
  	NavFilterComponent,
  	MetadataDisplayerComponent,
  	UserDateInfoComponent

  ],
  declarations: [
    TranslatePipe,
  	PostComponent,
  	NavFilterComponent,
  	MetadataDisplayerComponent,
  	UserDateInfoComponent

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
