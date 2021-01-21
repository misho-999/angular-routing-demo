import { Component, OnInit } from '@angular/core';
import { AlbumsService } from 'src/app/shered/albums.service';
import { IAlbum } from 'src/app/shered/dto/album';


@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: IAlbum[];

  constructor(
    private albumsService: AlbumsService,
  ) { }

  ngOnInit(): void {
    this.albumsService.getAllAlbums().subscribe((data) => {
      console.log(data);
      
      this.albums = data;
    })
  }
}
