import { Component, OnInit, ViewChild } from '@angular/core';
import { IPhoto } from 'src/app/shered/dto/photo';
import { PhotosService } from 'src/app/shered/photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos: Array<IPhoto>

  constructor(private photosService: PhotosService) { }

  ngOnInit(): void {
    this.photosService.getAllPhotos().subscribe((data) => {
      this.photos = data;
    })
  }

  getComponent(component): void {
    console.log(component.currentPhoto);
  }
}
