import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSubjectService } from 'src/app/shered/data-subject.service';
import { IUser } from 'src/app/shered/dto/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user: IUser;

  constructor(
    private router: Router,
    private dataSubjectService: DataSubjectService
  ) { }

  ngOnInit(): void {
  }

  goToUser() {
    this.dataSubjectService.changeMessage(this.user)
    this.router.navigate(['/users/details/:' + `${this.user.id}`]);
  }
}
