import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { IUser } from 'src/app/shered/dto/user';
import { UsersService } from 'src/app/shered/users.service';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  displayedColumns: string[] = ['userId', 'username', 'name', 'email', 'userAddressCity', 'userAddressStreet', 'userAddressSuite', 'userAddressZipcode'];
  pageSize: number[] = [2, 5, 8];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  users: Array<IUser>
  dataSource = new MatTableDataSource<IUser>();
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe((data) => {
      this.users = data;
      this.dataSource = new MatTableDataSource<IUser>(this.users);
      this.dataSource.paginator = this.paginator;
    })
  }
}
