import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataSubjectService } from 'src/app/shered/data-subject.service';
import { IAlbum } from 'src/app/shered/dto/album';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  @Input() album: IAlbum;
  constructor(
    private router: Router,
    private dataSubjectService: DataSubjectService
  ) { }

  ngOnInit(): void {

  }

  goToAlbum() {
    //pass album to album datails by through DataSubjectService
    this.dataSubjectService.changeMessage(this.album)
    this.router.navigate(['/albums/details/:' + `${this.album.id}`]);
  }

  goToUser() {
   
    return
  }
}
