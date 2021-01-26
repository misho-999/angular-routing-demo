import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DataSubjectService } from 'src/app/shered/data-subject.service';
import { IAlbum } from 'src/app/shered/dto/album';

@Component({
  selector: 'app-albums-datails',
  templateUrl: './albums-datails.component.html',
  styleUrls: ['./albums-datails.component.css']
})
export class AlbumsDatailsComponent implements OnInit {

  currentAlbum: IAlbum;
  @Input() albumSubject: BehaviorSubject <{ album: IAlbum}>;
  constructor(private dataSubjectService: DataSubjectService) { }

  ngOnInit(): void {
    this.dataSubjectService.currentMessage$.subscribe((data) => {
      this.currentAlbum = data;
    })
  }
}
