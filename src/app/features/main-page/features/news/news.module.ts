import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsBoxModule } from './features/news-box/news-box.module';

import { NewsComponent } from './news.component';

@NgModule({
  imports: [CommonModule, NewsBoxModule],
  declarations: [NewsComponent],
  exports: [NewsComponent],
})
export class NewsModule {}
