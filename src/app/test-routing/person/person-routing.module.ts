import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPersonComponent } from './add-person/add-person.component';
import { PeopleComponent } from './people/people.component';

const routes: Routes = [
    {
      path: '',
      component: PeopleComponent,
      children: [
        {
          path: '',
          pathMatch: 'full',
          redirectTo: 'all'
        },
        {
          path: 'add',
          component: AddPersonComponent,
        //   canActivate: [PermissionGuard],
          data: {
            permissions: ['DEVICE_CREATE']
          }
        },
        {
          path: 'all',
          component: PeopleComponent,
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
export class PersonRoutingModule { }

