import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsDatailsComponent } from './albums-datails/albums-datails.component';
import { AlbumsComponent } from './albums.component';
import { CreateAlbumComponent } from './create-album/create-album.component';




const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AlbumsComponent
  },
  {
    path: 'details/:id',
    component: AlbumsDatailsComponent
  },
  {
    path: 'create',
    component: CreateAlbumComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AlbumsRoutingModule { }

