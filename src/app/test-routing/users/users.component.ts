import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IUser } from 'src/app/shered/dto/user';
import { UsersService } from 'src/app/shered/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['userId', 'username', 'name', 'email', 'userAddressCity', 'userAddressStreet', 'userAddressSuite', 'userAddressZipcode'];
  pageSize: number[] = [2, 5, 8];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  users: Array<IUser>
  dataSource = new MatTableDataSource<IUser>();
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe((data) => {
      this.users = data;
      this.dataSource = new MatTableDataSource<IUser>(this.users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
}
