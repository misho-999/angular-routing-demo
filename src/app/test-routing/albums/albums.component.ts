import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AlbumsService } from 'src/app/shered/albums.service';
import { IAlbum } from 'src/app/shered/dto/album';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'userId'];
  pageSize: number[] = [10, 20, 30];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  albums: Array<IAlbum>;
  dataSource = new MatTableDataSource<IAlbum>();

  constructor(private albumsService: AlbumsService) { }

  ngOnInit(): void {
    this.albumsService.getAllAlbums().subscribe((data) => {
      this.albums = data;
      this.dataSource = new MatTableDataSource<IAlbum>(this.albums);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
}
