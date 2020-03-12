import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StartComponent } from './pages/start/start.component';
import { ScrollSpyDirective } from './scroll-spy.directive';
import { HeadComponent } from './static/head/head.component';
import { ServiceSectionComponent } from './pages/start/sections/service-section/service-section.component';
import { AboutSectionComponent } from './pages/start/sections/about-section/about-section.component';
import { ContactSectionComponent } from './pages/start/sections/contact-section/contact-section.component';
import { FooterComponent } from './static/footer/footer.component';
import { CommonModule } from '@angular/common';
import {MapService} from './map.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    ScrollSpyDirective,
    HeadComponent,
    ServiceSectionComponent,
    AboutSectionComponent,
    ContactSectionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'public/lang/', '.json');
}
