import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { PassDataService } from 'src/app/shered/data/pass-data.service';
import { IAlbum } from 'src/app/shered/dto/album';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  @Input() album: IAlbum;
  constructor(private passDataService: PassDataService) { }

  ngOnInit(): void {

  }
}
