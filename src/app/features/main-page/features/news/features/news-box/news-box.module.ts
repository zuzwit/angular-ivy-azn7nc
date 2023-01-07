import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsImageModule } from './features/news-image/news-image.module';
import { NewsTextModule } from './features/news-text/news-text.module';

import { NewsBoxComponent } from './news-box.component';

@NgModule({
  imports: [CommonModule, NewsTextModule, NewsImageModule],
  declarations: [NewsBoxComponent],
  exports: [NewsBoxComponent],
})
export class NewsBoxModule {}
