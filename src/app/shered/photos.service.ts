import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './data/data.service';
import { IPhoto } from './dto/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private dataService: DataService) { }

  getAllPhotos(): Observable<IPhoto[]> {
    return this.dataService.get<IPhoto[]>('photos');
  }
}
