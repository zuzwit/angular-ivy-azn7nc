import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdoptedCatsComponent } from './adopted-cats.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AdoptedCatsComponent],
  exports: [AdoptedCatsComponent],
})
export class AdoptedCatsModule {}
