import { Component, OnInit } from '@angular/core';
import { AlbumsService } from 'src/app/shered/albums.service';
import { IAlbum } from 'src/app/shered/dto/album';
import { map, catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: IAlbum[];
  constructor(
    private albumsService: AlbumsService
  ) { }

  ngOnInit(): void {
    this.albumsService.getAllAlbums().subscribe((data) => {
        this.albums = data;
        console.log('Type', typeof(data));
        console.log('data', data);
        console.log('this.albums :', this.albums);

      })

  }
}
