import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//modules
import { NavbarModule } from '../../shared/navbar/navbar.module';
import { FooterModule } from '../../shared/footer/footer.module';
import { ImageHeaderModule } from '../../shared/image-header/image-header.module';
import { WelcomeTextModule } from './features/welcome-text/welcome-text.module';
import { NewsModule } from './features/news/news.module';
import { ArticlesModule } from './features/articles/articles.module';
import { ToAdoptionCatsModule } from './features/cats-to-adoption/cats-to-adoption.module';
import { AdoptedCatsModule } from './features/adopted-cats/adopted-cats.module';

//components
import { MainPageComponent } from './main-page.component';

@NgModule({
  imports: [
    CommonModule,
    NavbarModule,
    FooterModule,
    ImageHeaderModule,
    WelcomeTextModule,
    NewsModule,
    ArticlesModule,
    ToAdoptionCatsModule,
    AdoptedCatsModule,
  ],
  declarations: [MainPageComponent],
  exports: [MainPageComponent],
})
export class MainPageModule {}
