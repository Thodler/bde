import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {UsersListComponent} from "./pages/users-list/users-list.component";
import {IdeaListComponent} from "./pages/idea-list/idea-list.component";
import {IdeaAddComponent} from "./pages/idea-add/idea-add.component";
import {NewsFeedComponent} from "./pages/news-feed/news-feed.component";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UsersListComponent},
  { path: 'newsfeed', component: NewsFeedComponent},


  { path: 'users', component: UsersListComponent},
  { path: 'ideas', component: IdeaListComponent},
  { path: 'ideaAdd', component: IdeaAddComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
