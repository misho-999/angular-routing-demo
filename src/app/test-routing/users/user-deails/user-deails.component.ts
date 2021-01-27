import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataSubjectService } from 'src/app/shered/data-subject.service';
import { IUser } from 'src/app/shered/dto/user';

@Component({
  selector: 'app-user-deails',
  templateUrl: './user-deails.component.html',
  styleUrls: ['./user-deails.component.css']
})
export class UserDetailsComponent implements OnInit {
  currentUser: IUser;

  constructor(private dataSubjectService: DataSubjectService,private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.dataSubjectService.currentMessage$.subscribe((data) => {
      this.currentUser = data;
      console.log('currentUser', this.currentUser);
    })
  }

}
