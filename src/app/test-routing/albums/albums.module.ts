import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './album/album.component';
import { AlbumsRoutingModule } from './albums-routing.module';
import { CreateAlbumComponent } from './create-album/create-album.component';
import { AlbumsComponent } from './albums.component';



@NgModule({
  declarations: [
    AlbumsComponent,
    AlbumComponent,
    CreateAlbumComponent
  ],
  imports: [
    CommonModule,
    AlbumsRoutingModule
  ]
})
export class AlbumsModule { }
