import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCarComponent } from './add-car/add-car.component';
import { CarsComponent } from './cars/cars.component';
import { CarRoutingModule } from './car-routing.module';

@NgModule({
  declarations: [
    AddCarComponent,
    CarsComponent
  ],
  imports: [
    CommonModule,
    CarRoutingModule
  ]
})
export class CarModule { }
