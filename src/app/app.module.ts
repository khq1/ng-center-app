import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MainComponent } from './components/main/main.component';
import { MenuComponent } from './components/menu/menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { RadioMenuComponent } from './components/radio-menu/radio-menu.component';
import { CrownPageComponent } from './components/pages/crown-page/crown-page.component';
import { ThirdEyeComponent } from './components/pages/third-eye-page/third-eye-page.component';
import { ThroatPageComponent } from './components/pages/throat-page/throat-page.component';
import { HeartPageComponent } from './components/pages/heart-page/heart-page.component';
import { SolarPlexusPageComponent } from './components/pages/solar-plexus-page/solar-plexus-page.component';
import { SacralPageComponent } from './components/pages/sacral-page/sacral-page.component';
import { RootPageComponent } from './components/pages/root-page/root-page.component';
import { GpacMainComponent } from './components/gpac-main/gpac-main.component';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MenuComponent,
    RadioMenuComponent,
    CrownPageComponent,
    ThirdEyeComponent,
    ThroatPageComponent,
    HeartPageComponent,
    SolarPlexusPageComponent,
    SacralPageComponent,
    RootPageComponent,
    GpacMainComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,

  ],
  exports:[MatMenuModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
