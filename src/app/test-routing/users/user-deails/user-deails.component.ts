import { Component, OnInit } from '@angular/core';
import { DataSubjectService } from 'src/app/shered/data-subject.service';
import { IUser } from 'src/app/shered/dto/user';

@Component({
  selector: 'app-user-deails',
  templateUrl: './user-deails.component.html',
  styleUrls: ['./user-deails.component.css']
})
export class UserDeailsComponent implements OnInit {
  currentUser: IUser;

  constructor(private dataSubjectService: DataSubjectService) { }

  ngOnInit(): void {
    this.dataSubjectService.currentMessage$.subscribe((data) => {
      this.currentUser = data;
    })
  }
}
