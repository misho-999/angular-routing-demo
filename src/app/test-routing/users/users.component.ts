import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/shered/dto/user';
import { UsersService } from 'src/app/shered/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

 users: Array<IUser>
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe((data)=> {
      this.users = data;
    })
  }

}
