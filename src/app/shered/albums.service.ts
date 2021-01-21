import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from './data.service';
import { IAddress } from './dto/address';
import { IAlbum } from './dto/album';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(
    private dataService: DataService,
  ) { }

  getAllAlbums(): Observable<IAlbum[]> {
    return this.dataService.get<IAlbum[]>('albums');
  }
}
