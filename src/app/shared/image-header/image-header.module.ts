import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageHeaderComponent } from './image-header.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ImageHeaderComponent],
  exports: [ImageHeaderComponent]
})
export class ImageHeaderModule { }