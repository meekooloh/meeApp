import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './safe.pipe';
import { CapitalizePipe } from './capitalize.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SafePipe,
    CapitalizePipe
  ],exports:[
    SafePipe,
    CapitalizePipe
  ]
})
export class PipesModule { }
