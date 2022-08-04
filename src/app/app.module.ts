import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { ContactsListComponent } from './features/contacts-list/components/contacts-list/contacts-list.component';
import { CreatePostComponent } from './features/posts/components/create-post/create-post.component';
import { PostListComponent } from './features/posts/components/post-list/post-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { LoremPicsumListComponent } from './features/lorem-picusm-list/components/lorem-picsum-list/lorem-picsum-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsListComponent,
    CreatePostComponent,
    PostListComponent,
    LoremPicsumListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
