import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users.component';
import { UserDeailsComponent } from './user-deails/user-deails.component';
import { AllUsersComponent } from './all-users/all-users.component';



@NgModule({
  declarations: [
    UsersComponent,
    CreateUserComponent,
    UserComponent,
    UserDeailsComponent,
    AllUsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
