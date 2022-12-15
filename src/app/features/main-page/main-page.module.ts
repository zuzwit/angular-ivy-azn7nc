import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarModule } from '../../shared/navbar/navbar.module';
import { FooterModule } from '../../shared/footer/footer.module';

import { MainPageComponent } from './main-page.component';

@NgModule({
  imports: [CommonModule,NavbarModule, FooterModule],
  declarations: [MainPageComponent ],
  exports: [MainPageComponent],
})
export class MainPageModule {}
