import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestRoutingComponent } from './test-routing/test-routing.component';
import { HomeComponent } from './test-routing/home/home.component';
import { CarModule } from './test-routing/car/car.module';
import { PersonModule } from './test-routing/person/person.module';
import { StudentModule } from './test-routing/student/student.module';

@NgModule({
  declarations: [
    AppComponent,
    TestRoutingComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientXsrfModule.disable(),
    AppRoutingModule,
    CarModule,
    PersonModule,
    StudentModule
  ],
  // providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
