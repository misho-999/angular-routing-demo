import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AlbumsService } from 'src/app/shered/albums.service';
import { DataSubjectService } from 'src/app/shered/data-subject.service';
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

  @Input() album: IAlbum;
  albums: Array<IAlbum>;
  dataSource = new MatTableDataSource<IAlbum>();

  constructor(private albumsService: AlbumsService,
    private router: Router,
    private dataSubjectService: DataSubjectService) { }

  ngOnInit(): void {
    this.albumsService.getAllAlbums().subscribe((data) => {
      this.albums = data;
      this.dataSource = new MatTableDataSource<IAlbum>(this.albums);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  goToAlbum(row) {
    this.router.navigate(['/albums/details/:' + `${row.id}`]);
    this.dataSubjectService.changeMessage(row);
    console.log(row);
  }
}
