import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumsModule } from './test-routing/albums/albums.module';
import { HomeComponent } from './test-routing/home/home.component';
import { PageNotFoundComponent } from './test-routing/page-not-found/page-not-found.component';
import { TodosModule } from './test-routing/todos/todos.module';
import { UsersModule } from './test-routing/users/users.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientXsrfModule.disable(),
    AlbumsModule,
    TodosModule,
    UsersModule,
  ],
  // providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
