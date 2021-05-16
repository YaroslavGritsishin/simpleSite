import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeptopHeaderComponent } from './shared/components/leptop-header/leptop-header.component';
import { FirstScreenComponent } from './shared/components/first-screen/first-screen.component';
import { SecondScreenComponent } from './shared/components/second-screen/second-screen.component';
import { VideoScreenComponent } from './shared/components/video-screen/video-screen.component';
import { FooterScreenComponent } from './shared/components/footer-screen/footer-screen.component';
import { LastScreenComponent } from './shared/components/last-screen/last-screen.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CakesPageComponent } from './cakes-page/cakes-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LeptopHeaderComponent,
    FirstScreenComponent,
    SecondScreenComponent,
    VideoScreenComponent,
    FooterScreenComponent,
    LastScreenComponent,
    MainLayoutComponent,
    HomePageComponent,
    CakesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
