import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeTextComponent } from './welcome-text.component';

@NgModule({
  imports: [CommonModule],
  declarations: [WelcomeTextComponent],
  exports: [WelcomeTextComponent],
})
export class WelcomeTextModule {}
