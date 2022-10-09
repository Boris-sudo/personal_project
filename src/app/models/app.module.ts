import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../components/app.component';
import { TopBarComponent } from '../components/top-bar/top-bar.component';
import { MainPageComponent } from '../components/main-page/main-page.component';
import { HouseMastersComponent } from '../components/house-masters/house-masters.component';
import { RoomsComponent } from '../components/rooms/rooms.component';
import { RegistrationMenuComponent } from '../components/registration-menu/registration-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    MainPageComponent,
    HouseMastersComponent,
    RoomsComponent,
    RegistrationMenuComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
