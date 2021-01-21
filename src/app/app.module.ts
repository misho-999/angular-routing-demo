import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestRoutingComponent } from './test-routing/test-routing.component';
import { HomeComponent } from './test-routing/home/home.component';
import { UsersComponent } from './test-routing/users/users.component';
import { TodosComponent } from './test-routing/todos/todos.component';
import { AlbumsComponent } from './test-routing/albums/albums.component';
import { AlbumsModule } from './test-routing/albums/albums.module';
import { TodosModule } from './test-routing/todos/todos.module';
import { UsersModule } from './test-routing/users/users.module';

@NgModule({
  declarations: [
    AppComponent,
    TestRoutingComponent,
    HomeComponent,
    UsersComponent,
    TodosComponent,
    AlbumsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientXsrfModule.disable(),
    AppRoutingModule,
    AlbumsModule,
    TodosModule,
    UsersModule
  ],
  // providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
