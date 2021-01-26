import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserDeailsComponent } from './user-deails/user-deails.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: UsersComponent
  },
  {
    path: 'details/:id',
    component: UserDeailsComponent
  },
  {
    path: 'create',
    component: CreateUserComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }