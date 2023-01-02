import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HeaderComponent} from "./helpers/header/header.component";
import {UsersListComponent} from "./pages/users-list/users-list.component";
import {LoginComponent} from "./pages/login/login.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
