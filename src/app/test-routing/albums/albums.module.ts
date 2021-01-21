import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './album/album.component';
import { AddAlbumComponent } from './add-album/add-album.component';
import { AlbumsRoutingModule } from './albums-routing.module';



@NgModule({
  declarations: [
    AlbumComponent,
    AddAlbumComponent
  ],
  imports: [
    CommonModule,
    AlbumsRoutingModule
  ]
})
export class AlbumsModule { }
