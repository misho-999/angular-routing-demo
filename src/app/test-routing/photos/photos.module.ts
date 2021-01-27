import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { PhotoComponent } from './photo/photo.component';
import { PhotosComponent } from './photos.component';
import { PhotosRoutingModule } from './photos-routing.module';
import {MatGridListModule} from '@angular/material/grid-list';



@NgModule({
  declarations: [
    PhotosComponent,
    PhotoComponent],
  imports: [
    CommonModule,
    MatCardModule,
    PhotosRoutingModule,
    MatGridListModule,
  ]
})
export class PhotoModule { }
