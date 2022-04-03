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



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MenuComponent,
    RadioMenuComponent,

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
