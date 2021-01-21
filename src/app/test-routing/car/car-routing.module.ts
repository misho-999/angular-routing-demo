import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCarComponent } from './add-car/add-car.component';
import { CarComponent } from './car.component';
import { CarsComponent } from './cars/cars.component';




const routes: Routes = [
  {
    path: '',
    component: CarsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'all'
      },
      {
        path: 'add',
        component: AddCarComponent,
        //   canActivate: [PermissionGuard],
        data: {
          permissions: ['DEVICE_CREATE']
        }
      },
      {
        path: 'all',
        component: CarsComponent,
        //   canActivate: [PermissionGuard],
        data: {
          permissions: ['DEVICE_READ']
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CarRoutingModule { }

