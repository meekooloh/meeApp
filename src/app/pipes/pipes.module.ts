import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './safe.pipe';
import { CapitalizePipe } from './capitalize.pipe';
import { AddMetasPipe } from './add-metas.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SafePipe,
    CapitalizePipe,
    AddMetasPipe
  ],exports:[
    SafePipe,
    CapitalizePipe,
    AddMetasPipe
  ]
})
export class PipesModule { }
