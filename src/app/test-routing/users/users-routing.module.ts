import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'all'
      },
      {
        path: 'create',
        component: CreateUserComponent,
        //   canActivate: [PermissionGuard],
        data: {
          permissions: ['DEVICE_CREATE']
        }
      },
      {
        path: ':id',
        component: UserComponent,
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
export class UsersRoutingModule { }

