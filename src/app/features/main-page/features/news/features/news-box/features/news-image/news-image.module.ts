import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsImageComponent } from './news-image.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NewsImageComponent],
  exports: [NewsImageComponent],
})
export class NewsImageModule {}
