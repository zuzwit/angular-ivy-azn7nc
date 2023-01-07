import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatsToAdoptionComponent } from './cats-to-adoption.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CatsToAdoptionComponent],
  exports: [CatsToAdoptionComponent],
})
export class ToAdoptionCatsModule {}
