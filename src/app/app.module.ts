import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StartComponent } from './pages/start/start.component';
import { ScrollSpyDirective } from './scroll-spy.directive';
import { HeadComponent } from './static/head/head.component';
import { OurProductsSectionComponent } from './pages/start/sections/our-products-section/our-products-section.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    ScrollSpyDirective,
    HeadComponent,
    OurProductsSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
