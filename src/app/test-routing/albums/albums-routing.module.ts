import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumComponent } from './album/album.component';
import { AlbumsComponent } from './albums.component';
import { CreateAlbumComponent } from './create-album/create-album.component';




const routes: Routes = [
  {
    path: '',
    component: AlbumsComponent,
    children: [
     
      {
        path: 'create',
        component: CreateAlbumComponent,
        //   canActivate: [PermissionGuard],
        data: {
          permissions: ['DEVICE_CREATE']
        }
      },
      {
        path: ':id',
        component: AlbumComponent,
        //   canActivate: [PermissionGuard],
        data: {
          permissions: ['DEVICE_READ']
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AlbumsRoutingModule { }

