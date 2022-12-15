import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MainPageModule } from './features/main-page/main-page.module';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule, MainPageModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
