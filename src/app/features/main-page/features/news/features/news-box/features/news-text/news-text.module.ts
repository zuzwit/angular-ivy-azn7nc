import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsTextComponent } from './news-text.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NewsTextComponent],
  exports: [NewsTextComponent],
})
export class NewsTextModule {}
