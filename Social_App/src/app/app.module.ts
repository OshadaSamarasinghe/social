import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './conponents/profile/profile.component';
import { PostsComponent } from './conponents/posts/posts.component';
import { LoginComponent } from './conponents/login/login.component';
import { RegisterComponent } from './conponents/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    PostsComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
