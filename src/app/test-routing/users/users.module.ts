import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { CreateUserComponent } from './create-user/create-user.component';
import { UsersComponent } from './users.component';
import { UserDetailsComponent } from './user-deails/user-deails.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    UsersComponent,
    CreateUserComponent,
    UserDetailsComponent,
    UserComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
  ]
})
export class UsersModule { }
