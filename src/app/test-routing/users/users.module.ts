import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users.component';
import { UserDeailsComponent } from './user-deails/user-deails.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    UsersComponent,
    CreateUserComponent,
    UserComponent,
    UserDeailsComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class UsersModule { }
