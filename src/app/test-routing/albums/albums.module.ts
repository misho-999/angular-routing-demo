import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsRoutingModule } from './albums-routing.module';
import { CreateAlbumComponent } from './create-album/create-album.component';
import { AlbumsComponent } from './albums.component';
import { AlbumsDatailsComponent } from './albums-datails/albums-datails.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';



@NgModule({
  declarations: [
    AlbumsComponent,
    CreateAlbumComponent,
    AlbumsDatailsComponent,
  ],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class AlbumsModule { }
