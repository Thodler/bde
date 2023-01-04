import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HeaderComponent} from "./helpers/header/header.component";
import {LoginComponent} from "./pages/login/login.component";
import {UsersListComponent} from "./pages/users-list/users-list.component";
import {FooterComponent} from "./helpers/footer/footer.component";
import {NewsFeedComponent} from "./pages/news-feed/news-feed.component";
import { IdeaListComponent } from './pages/idea-list/idea-list.component';
import { IdeaAddComponent } from './pages/idea-add/idea-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import {UserProfilComponent} from "./helpers/user-profil/user-profil.component";
import {ModalAdminComponent} from "./helpers/modal-admin/modal-admin.component";
import {UserFormComponent} from "./forms/user-form/user-form.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    UsersListComponent,
    FooterComponent,
    IdeaListComponent,
    IdeaAddComponent,
    FooterComponent,
    NewsFeedComponent,
    UserProfilComponent,
    ModalAdminComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
