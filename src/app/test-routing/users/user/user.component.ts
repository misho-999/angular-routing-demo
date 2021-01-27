import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/shered/dto/user';
import { UsersService } from 'src/app/shered/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  currentUser: IUser;

  constructor(private route: ActivatedRoute,
    private usersService: UsersService) { }

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id');
    this.usersService.getUserById(userId).subscribe((data) => {
      this.currentUser = data;
    })
  }
}
